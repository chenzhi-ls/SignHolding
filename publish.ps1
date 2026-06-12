param(
  [string]$HostName = "118.31.245.149",
  [string]$UserName = "root",
  [string]$Password = "c52reXdHEVqm",
  [string]$RemotePath = "/var/www/sign_holding"
)

$ErrorActionPreference = "Stop"
$ProgressPreference = "SilentlyContinue"

function Ensure-Module {
  param(
    [Parameter(Mandatory = $true)]
    [string]$Name
  )

  if (-not (Get-Module -ListAvailable -Name $Name)) {
    Write-Host "Installing PowerShell module: $Name"
    Install-Module -Name $Name -Scope CurrentUser -Force -AllowClobber
  }

  Import-Module $Name -Force
}

function Invoke-Build {
  param(
    [Parameter(Mandatory = $true)]
    [string]$ProjectRoot
  )

  Write-Host "Building project..."
  Push-Location $ProjectRoot

  try {
    & npm.cmd run build
    if ($LASTEXITCODE -ne 0) {
      throw "Build failed with exit code $LASTEXITCODE."
    }
  }
  finally {
    Pop-Location
  }
}

function Ensure-RemoteDirectory {
  param(
    [Parameter(Mandatory = $true)]
    [string]$Server,
    [Parameter(Mandatory = $true)]
    [System.Management.Automation.PSCredential]$Credential,
    [Parameter(Mandatory = $true)]
    [string]$Path
  )

  $sshSession = $null

  try {
    $sshSession = New-SSHSession -ComputerName $Server -Credential $Credential -AcceptKey
    $command = "mkdir -p '$Path'"
    $result = Invoke-SSHCommand -SessionId $sshSession.SessionId -Command $command

    if ($result.ExitStatus -ne 0) {
      $message = ($result.Error | Out-String).Trim()
      throw "Failed to prepare remote directory. $message"
    }
  }
  finally {
    if ($sshSession) {
      Remove-SSHSession -SessionId $sshSession.SessionId | Out-Null
    }
  }
}

function Publish-Dist {
  param(
    [Parameter(Mandatory = $true)]
    [string]$ProjectRoot,
    [Parameter(Mandatory = $true)]
    [string]$Server,
    [Parameter(Mandatory = $true)]
    [System.Management.Automation.PSCredential]$Credential,
    [Parameter(Mandatory = $true)]
    [string]$Destination
  )

  $distPath = Join-Path $ProjectRoot "dist"
  if (-not (Test-Path $distPath)) {
    throw "dist directory does not exist: $distPath"
  }

  $sftpSession = $null

  try {
    $sftpSession = New-SFTPSession -ComputerName $Server -Credential $Credential -AcceptKey

    if (-not (Test-SFTPPath -SFTPSession $sftpSession -Path $Destination)) {
      New-SFTPItem -SFTPSession $sftpSession -Path $Destination -ItemType Directory -Recurse | Out-Null
    }

    Write-Host "Uploading dist contents to $($Server):$Destination"
    Get-ChildItem -Path $distPath -Force | ForEach-Object {
      Set-SFTPItem -SFTPSession $sftpSession -Path $_.FullName -Destination $Destination -Force | Out-Null
    }
  }
  finally {
    if ($sftpSession) {
      Remove-SFTPSession -SessionId $sftpSession.SessionId | Out-Null
    }
  }
}

$projectRoot = Split-Path -Parent $MyInvocation.MyCommand.Path
if ([string]::IsNullOrWhiteSpace($projectRoot)) {
  $projectRoot = Get-Location
}

Ensure-Module -Name "Posh-SSH"
Invoke-Build -ProjectRoot $projectRoot

$securePassword = ConvertTo-SecureString $Password -AsPlainText -Force
$credential = New-Object System.Management.Automation.PSCredential($UserName, $securePassword)

Ensure-RemoteDirectory -Server $HostName -Credential $credential -Path $RemotePath
Publish-Dist -ProjectRoot $projectRoot -Server $HostName -Credential $credential -Destination $RemotePath

Write-Host "Publish completed successfully."
