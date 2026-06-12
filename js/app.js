document.addEventListener("DOMContentLoaded", () => {
  const translations = {
    zh: {
      brandName: "举牌图生成器",
      pageTitle: "举牌图生成器 - 创建你的定制举牌图",
      pageDescription: "创建趣味举牌图，支持实时文字预览、样式调整与导出就绪布局。",
      navGallery: "作品库",
      navHowItWorks: "使用说明",
      navPricing: "价格",
      ctaCreateSign: "创建举牌图",
      backToGallery: "返回作品库",
      draftSaved: "草稿已保存",
      autosaveStatus: "自动保存：2 分钟前",
      zoomInAria: "放大预览",
      fullscreenAria: "全屏查看预览",
      templatePrefix: "模板：",
      reset: "重置",
      sharePreview: "分享预览",
      yourMessage: "你的文案",
      messageLabel: "举牌文案输入框",
      messagePlaceholder: "输入你想显示在牌子上的文字...",
      maxChars: "最多 60 个字符",
      styleYourText: "文字样式",
      fontFamily: "字体",
      fontModernBold: "现代加粗",
      fontCleanSans: "简洁无衬线",
      fontHeadlineImpact: "海报标题",
      fontHandwritten: "手写风格",
      textSize: "字号",
      textColor: "文字颜色",
      textPosition: "文案位置",
      positionX: "X 轴",
      positionY: "Y 轴",
      colorBlack: "黑色",
      colorBlue: "蓝色",
      colorGreen: "绿色",
      colorOrange: "橙色",
      colorPurple: "紫色",
      colorRed: "红色",
      generateButton: "一键下载",
      generateHint: "约 5 秒生成",
      processing: "下载中...",
      downloadError: "下载失败，请稍后重试。",
      chipTrending: "热门模板",
      chipHighRes: "高清输出",
      albumTitle: "热门画册",
      albumSubtitle: "左右滑动查看热门举牌灵感合集",
      albumPrevAria: "向左滚动画册",
      albumNextAria: "向右滚动画册",
      albumBadgeNew: "新品灵感",
      albumBadgeHot: "热门主题",
      albumBadgeCreative: "创意推荐",
      albumBadgePro: "专业输出",
      albumCard1Title: "办公室举牌",
      albumCard1Desc: "适合公告、欢迎词和活动展示的清爽模板合集。",
      albumCard2Title: "节日祝福",
      albumCard2Desc: "用于节庆祝福、生日惊喜和派对互动的温暖场景。",
      albumCard3Title: "搞怪整活",
      albumCard3Desc: "适合短视频、整蛊内容和社交分享的吸睛文案风格。",
      albumCard4Title: "品牌宣传",
      albumCard4Desc: "适合品牌口号、产品卖点和商业场景展示的高质模板。",
      albumCard5Title: "校园写真",
      albumCard5Desc: "适合毕业季、社团展示和清新校园主题的留念画面。",
      albumCard6Title: "合影举牌",
      albumCard6Desc: "适合团队合照、活动打卡和多人互动的青春场景。",
      albumCard7Title: "校园社团",
      albumCard7Desc: "适合社团招新、校园活动和多人主题海报的青春场景。",
      albumImage1Alt: "五位女生一起举着空白木牌",
      albumImage2Alt: "三位女生在暖色背景前举着木牌",
      albumImage3Alt: "五位女生一起举着空白木牌",
      albumImage4Alt: "蓝发女生在校园门口举着白色牌子",
      albumImage5Alt: "紫发女生在樱花校园里举着白色牌子",
      albumImage6Alt: "五位穿格纹校服的女生在户外举着白色牌子",
      albumImage7Alt: "六位角色在樱花校园里一起举着空白牌子",
      footerTerms: "服务条款",
      footerPrivacy: "隐私政策",
      footerSupport: "联系支持",
      footerApi: "API 文档",
      supportModalTitle: "联系支持",
      supportModalDesc: "如遇下载失败、模板显示异常或其他问题，可以通过以下邮箱联系我们。",
      supportEmailLabel: "支持邮箱",
      supportCopy: "复制邮箱",
      supportCopied: "已复制",
      supportCopyFailed: "复制失败，请手动复制邮箱地址。",
      supportFriendlyNote: "建议在邮件中附上问题描述、浏览器名称、设备信息以及相关截图，这样我们可以更快帮你定位问题。",
      supportResponseNote: "我们通常会在 1-3 个工作日内回复，请留意你的收件箱和垃圾邮件箱。",
      supportCloseAria: "关闭联系支持弹窗",
      footerCopyright: "© 2026 举牌图生成器. 保留所有权利。",
      previewFallback: "在这里输入你的举牌文案",
    },
    en: {
      brandName: "SignGen",
      pageTitle: "SignGen - Create Your Custom Sign",
      pageDescription: "Create playful custom sign images with real-time text preview, styling controls, and export-ready layouts.",
      navGallery: "Gallery",
      navHowItWorks: "How It Works",
      navPricing: "Pricing",
      ctaCreateSign: "Create Sign",
      backToGallery: "Back to Gallery",
      draftSaved: "DRAFT SAVED",
      autosaveStatus: "Autosave: 2m ago",
      zoomInAria: "Zoom in preview",
      fullscreenAria: "Open full screen preview",
      templatePrefix: "Template:",
      reset: "Reset",
      sharePreview: "Share Preview",
      yourMessage: "Your Message",
      messageLabel: "Message for the sign",
      messagePlaceholder: "Type what your sign should say...",
      maxChars: "Max 60 characters",
      styleYourText: "Style Your Text",
      fontFamily: "Font Family",
      fontModernBold: "Modern Bold",
      fontCleanSans: "Clean Sans",
      fontHeadlineImpact: "Headline Impact",
      fontHandwritten: "Handwritten",
      textSize: "Text Size",
      textColor: "Text Color",
      textPosition: "Text Position",
      positionX: "X Axis",
      positionY: "Y Axis",
      colorBlack: "Black",
      colorBlue: "Blue",
      colorGreen: "Green",
      colorOrange: "Orange",
      colorPurple: "Purple",
      colorRed: "Red",
      generateButton: "Download Now",
      generateHint: "Generates in ~5 seconds",
      processing: "Downloading...",
      downloadError: "Download failed. Please try again.",
      chipTrending: "Trending Template",
      chipHighRes: "High Res",
      albumTitle: "Trending Albums",
      albumSubtitle: "Swipe sideways to browse popular sign inspiration collections",
      albumPrevAria: "Scroll albums left",
      albumNextAria: "Scroll albums right",
      albumBadgeNew: "New Ideas",
      albumBadgeHot: "Popular",
      albumBadgeCreative: "Creative Pick",
      albumBadgePro: "Pro Output",
      albumCard1Title: "Office Signs",
      albumCard1Desc: "A clean collection for notices, welcome signs, and event display scenes.",
      albumCard2Title: "Holiday Wishes",
      albumCard2Desc: "Warm layouts for festive greetings, birthday surprises, and party moments.",
      albumCard3Title: "Funny Moments",
      albumCard3Desc: "Catchy styles for short videos, pranks, and shareable social content.",
      albumCard4Title: "Brand Campaigns",
      albumCard4Desc: "Polished templates for slogans, product highlights, and business showcases.",
      albumCard5Title: "Campus Portraits",
      albumCard5Desc: "Great for graduation season, club showcases, and bright school-themed memories.",
      albumCard6Title: "Group Sign Shot",
      albumCard6Desc: "Ideal for team photos, event check-ins, and energetic group interactions.",
      albumCard7Title: "Campus Club",
      albumCard7Desc: "Great for club recruitment, school events, and lively multi-person poster scenes.",
      albumImage1Alt: "Five girls holding a blank wooden sign together",
      albumImage2Alt: "Three girls holding a wooden sign against a warm orange background",
      albumImage3Alt: "Five girls holding a blank wooden sign together",
      albumImage4Alt: "A blue-haired girl holding a white sign near a school entrance",
      albumImage5Alt: "A purple-haired girl holding a white sign in a cherry blossom campus",
      albumImage6Alt: "Five girls in plaid uniforms holding a white sign outdoors",
      albumImage7Alt: "Six characters holding a blank sign together in a cherry blossom campus",
      footerTerms: "Terms of Service",
      footerPrivacy: "Privacy Policy",
      footerSupport: "Contact Support",
      footerApi: "API Documentation",
      supportModalTitle: "Contact Support",
      supportModalDesc: "If downloads fail, templates look incorrect, or you hit any other issue, please contact us via the email below.",
      supportEmailLabel: "Support Email",
      supportCopy: "Copy Email",
      supportCopied: "Copied",
      supportCopyFailed: "Copy failed. Please copy the email address manually.",
      supportFriendlyNote: "Please include your issue summary, browser name, device information, and screenshots if possible so we can help faster.",
      supportResponseNote: "We usually reply within 1-3 business days. Please also check your spam folder.",
      supportCloseAria: "Close support dialog",
      footerCopyright: "© 2026 SignGen. All rights reserved.",
      previewFallback: "Your Awesome Sign Text Here",
    },
  };

  const defaults = {
    message: "",
    fontFamily: "Quicksand",
    fontLabel: '"Quicksand", sans-serif',
    fontSize: 32,
    align: "center",
    textColor: "#1a1a1a",
    positionX: 0,
    positionY: 0,
  };

  const root = document.documentElement;
  const descriptionMeta = document.querySelector('meta[name="description"]');
  const messageInput = document.getElementById("message-input");
  const signPreviewImage = document.getElementById("sign-preview-image");
  const previewStage = signPreviewImage?.parentElement || null;
  const textPositionLayer = document.getElementById("text-position-layer");
  const previewText = document.getElementById("dynamic-text-container");
  const charCount = document.getElementById("char-count");
  const sizeSlider = document.getElementById("size-slider");
  const sizeValue = document.getElementById("size-val");
  const positionXSlider = document.getElementById("position-x-slider");
  const positionYSlider = document.getElementById("position-y-slider");
  const positionXValue = document.getElementById("position-x-val");
  const positionYValue = document.getElementById("position-y-val");
  const generateButton = document.getElementById("generate-btn");
  const generateLabel = document.querySelector("[data-generate-label]");
  const supportTrigger = document.getElementById("support-trigger");
  const supportModal = document.getElementById("support-modal");
  const supportClose = document.getElementById("support-close");
  const supportCopy = document.getElementById("support-copy");
  const supportEmail = document.getElementById("support-email");
  const termsLink = document.getElementById("terms-link");
  const privacyLink = document.getElementById("privacy-link");
  const albumSection = document.getElementById("album-section");
  const templateNameValue = document.getElementById("template-name-value");
  const resetButton = document.getElementById("reset-btn");
  const albumCarousel = document.getElementById("album-carousel");
  const albumCards = Array.from(document.querySelectorAll("[data-album-card]"));
  const defaultAlbumCard = albumCards.find((card) => card.classList.contains("album-card-active")) || albumCards[0] || null;
  const fontButtons = Array.from(document.querySelectorAll(".font-selector-btn"));
  const colorButtons = Array.from(document.querySelectorAll(".color-btn"));
  const languageButtons = Array.from(document.querySelectorAll(".lang-btn"));
  const albumNavButtons = Array.from(document.querySelectorAll("[data-carousel-nav]"));
  const i18nNodes = Array.from(document.querySelectorAll("[data-i18n]"));
  const i18nPlaceholderNodes = Array.from(document.querySelectorAll("[data-i18n-placeholder]"));
  const i18nAriaNodes = Array.from(document.querySelectorAll("[data-i18n-aria-label]"));

  if (
    !messageInput ||
    !textPositionLayer ||
    !previewText ||
    !charCount ||
    !sizeSlider ||
    !sizeValue ||
    !positionXSlider ||
    !positionYSlider ||
    !positionXValue ||
    !positionYValue ||
    !generateButton ||
    !generateLabel
  ) {
    return;
  }

  let currentState = { ...defaults };
  let currentLanguage = window.localStorage.getItem("signgen-language") === "en" ? "en" : "zh";
  let isGenerating = false;
  let isDraggingAlbum = false;
  let albumPointerId = null;
  let dragStartX = 0;
  let dragStartScrollLeft = 0;
  let dragDistance = 0;
  let isDraggingText = false;
  let textPointerId = null;
  let textDragStartX = 0;
  let textDragStartY = 0;
  let textStartPositionX = 0;
  let textStartPositionY = 0;
  let pressedAlbumCard = null;
  let activeTemplateKey = defaultAlbumCard?.dataset.templateKey || "albumCard3Title";
  const supportEmailAddress = "401642796@qq.com";

  const getCopy = () => translations[currentLanguage];

  const applyPreviewState = (state) => {
    currentState = { ...state };
    previewText.textContent = state.message || getCopy().previewFallback;
    previewText.style.fontFamily = state.fontLabel;
    previewText.style.fontSize = `${state.fontSize}px`;
    previewText.style.color = state.textColor;
    previewText.style.textAlign = state.align;
    textPositionLayer.style.transform = `translate(${state.positionX}px, ${state.positionY}px)`;

    messageInput.value = state.message;
    charCount.textContent = `${state.message.length}/60`;
    charCount.classList.toggle("text-error", state.message.length > 55);
    sizeSlider.value = String(state.fontSize);
    sizeValue.textContent = `${state.fontSize}px`;
    positionXSlider.value = String(state.positionX);
    positionYSlider.value = String(state.positionY);
    positionXValue.textContent = `${state.positionX}px`;
    positionYValue.textContent = `${state.positionY}px`;

    fontButtons.forEach((button) => {
      const isActive = button.dataset.font === state.fontFamily;
      button.classList.toggle("bg-primary-container", isActive);
      button.classList.toggle("text-white", isActive);
      button.classList.toggle("border-primary", isActive);
      button.classList.toggle("bg-surface-container", !isActive);
      button.classList.toggle("text-on-surface-variant", !isActive);
      button.classList.toggle("border-transparent", !isActive);
    });

    colorButtons.forEach((button) => {
      const isActive = button.dataset.color === state.textColor;
      button.classList.toggle("active-color", isActive);
      button.classList.toggle("border-primary", isActive);
      button.classList.toggle("bg-primary-container/20", isActive);
      button.classList.toggle("border-transparent", !isActive);
      button.classList.toggle("bg-surface-container", !isActive);
      button.classList.toggle("hover:border-outline-variant", !isActive);
    });
  };

  const applyLanguageStyles = () => {
    languageButtons.forEach((button) => {
      const isActive = button.dataset.lang === currentLanguage;
      button.classList.toggle("bg-white", isActive);
      button.classList.toggle("text-primary", isActive);
      button.classList.toggle("shadow-sm", isActive);
      button.classList.toggle("text-on-surface-variant", !isActive);
    });
  };

  const renderGenerateButton = () => {
    const copy = getCopy();
    generateButton.disabled = isGenerating;
    generateLabel.textContent = isGenerating ? copy.processing : copy.generateButton;
  };

  const renderPolicyLinks = () => {
    const langSuffix = currentLanguage === "en" ? "?lang=en" : "?lang=zh";

    if (termsLink) {
      termsLink.href = `terms.html${langSuffix}`;
    }

    if (privacyLink) {
      privacyLink.href = `privacy.html${langSuffix}`;
    }
  };

  const renderSupportCopyButton = (key = "supportCopy") => {
    if (!supportCopy) {
      return;
    }
    supportCopy.textContent = getCopy()[key] || getCopy().supportCopy;
  };

  const renderTemplateName = () => {
    if (!templateNameValue) {
      return;
    }
    templateNameValue.textContent = getCopy()[activeTemplateKey] || "";
  };

  const renderPreviewImage = () => {
    if (!signPreviewImage) {
      return;
    }

    const activeCard = albumCards.find((card) => card.classList.contains("album-card-active"));
    if (!activeCard) {
      return;
    }

    const imageSrc = activeCard.dataset.imageSrc;
    const imageAltKey = activeCard.dataset.imageAltKey;

    if (imageSrc) {
      signPreviewImage.src = imageSrc;
    }

    if (imageAltKey) {
      signPreviewImage.alt = getCopy()[imageAltKey] || signPreviewImage.alt;
    }
  };

  const applyTranslations = () => {
    const copy = getCopy();

    root.lang = currentLanguage === "zh" ? "zh-CN" : "en";
    document.title = copy.pageTitle;
    if (descriptionMeta) {
      descriptionMeta.setAttribute("content", copy.pageDescription);
    }

    i18nNodes.forEach((node) => {
      const key = node.dataset.i18n;
      if (key && copy[key]) {
        node.textContent = copy[key];
      }
    });

    i18nPlaceholderNodes.forEach((node) => {
      const key = node.dataset.i18nPlaceholder;
      if (key && copy[key]) {
        node.setAttribute("placeholder", copy[key]);
      }
    });

    i18nAriaNodes.forEach((node) => {
      const key = node.dataset.i18nAriaLabel;
      if (key && copy[key]) {
        node.setAttribute("aria-label", copy[key]);
      }
    });

    applyLanguageStyles();
    renderTemplateName();
    renderPreviewImage();
    renderGenerateButton();
    renderPolicyLinks();
    renderSupportCopyButton();
    applyPreviewState(currentState);
  };

  const getFontLabel = (fontFamily) => {
    if (fontFamily === "Quicksand" || fontFamily === "Public Sans") {
      return `"${fontFamily}", sans-serif`;
    }
    return fontFamily;
  };

  const resetState = () => {
    if (defaultAlbumCard) {
      setActiveAlbumCard(defaultAlbumCard);
    }

    if (albumCarousel) {
      albumCarousel.scrollTo({ left: 0, behavior: "smooth" });
    }

    applyPreviewState(defaults);
  };

  const updateAlbumSectionWidth = () => {
    if (!albumSection) {
      return;
    }

    if (window.innerWidth < 1024) {
      albumSection.style.width = "";
      albumSection.style.maxWidth = "";
      return;
    }

    const albumRect = albumSection.getBoundingClientRect();
    const buttonRect = generateButton.getBoundingClientRect();
    const targetWidth = Math.max(buttonRect.right - albumRect.left, albumRect.width);

    albumSection.style.width = `${targetWidth}px`;
    albumSection.style.maxWidth = "none";
  };

  const setActiveAlbumCard = (selectedCard) => {
    albumCards.forEach((card) => {
      card.classList.toggle("album-card-active", card === selectedCard);
    });
    activeTemplateKey = selectedCard.dataset.templateKey || activeTemplateKey;
    renderTemplateName();
    renderPreviewImage();
  };

  const clampPositionValue = (value, slider) => {
    const min = Number(slider.min);
    const max = Number(slider.max);
    return Math.min(max, Math.max(min, value));
  };

  const openSupportModal = () => {
    if (!supportModal) {
      return;
    }
    renderSupportCopyButton();
    supportModal.classList.remove("hidden");
    supportModal.classList.add("flex");
    document.body.style.overflow = "hidden";
  };

  const closeSupportModal = () => {
    if (!supportModal) {
      return;
    }
    supportModal.classList.add("hidden");
    supportModal.classList.remove("flex");
    document.body.style.overflow = "";
    renderSupportCopyButton();
  };

  const copySupportEmail = async () => {
    if (!supportEmail) {
      return;
    }

    try {
      if (navigator.clipboard?.writeText) {
        await navigator.clipboard.writeText(supportEmailAddress);
      } else {
        const textArea = document.createElement("textarea");
        textArea.value = supportEmailAddress;
        textArea.setAttribute("readonly", "");
        textArea.style.position = "absolute";
        textArea.style.left = "-9999px";
        document.body.appendChild(textArea);
        textArea.select();
        document.execCommand("copy");
        document.body.removeChild(textArea);
      }

      renderSupportCopyButton("supportCopied");
      window.setTimeout(() => {
        if (!supportModal?.classList.contains("hidden")) {
          renderSupportCopyButton();
        }
      }, 1600);
    } catch (error) {
      window.alert(getCopy().supportCopyFailed);
    }
  };

  const waitForImageReady = (imageElement) => {
    if (imageElement.complete && imageElement.naturalWidth > 0) {
      return Promise.resolve();
    }

    return new Promise((resolve, reject) => {
      const handleLoad = () => {
        cleanup();
        resolve();
      };

      const handleError = () => {
        cleanup();
        reject(new Error("Image failed to load"));
      };

      const cleanup = () => {
        imageElement.removeEventListener("load", handleLoad);
        imageElement.removeEventListener("error", handleError);
      };

      imageElement.addEventListener("load", handleLoad);
      imageElement.addEventListener("error", handleError);
    });
  };

  const buildWrappedLines = (ctx, text, maxWidth) => {
    const rawLines = text.split("\n");
    const wrappedLines = [];

    rawLines.forEach((rawLine) => {
      if (!rawLine) {
        wrappedLines.push("");
        return;
      }

      let currentLine = "";

      Array.from(rawLine).forEach((char) => {
        const nextLine = `${currentLine}${char}`;
        if (currentLine && ctx.measureText(nextLine).width > maxWidth) {
          wrappedLines.push(currentLine);
          currentLine = char;
          return;
        }
        currentLine = nextLine;
      });

      if (currentLine) {
        wrappedLines.push(currentLine);
      }
    });

    return wrappedLines.length ? wrappedLines : [text];
  };

  const downloadPreviewImage = async () => {
    if (!signPreviewImage || !previewStage) {
      throw new Error("Preview image is unavailable");
    }

    await waitForImageReady(signPreviewImage);

    const canvas = document.createElement("canvas");
    const imageWidth = signPreviewImage.naturalWidth;
    const imageHeight = signPreviewImage.naturalHeight;
    const stageWidth = previewStage.clientWidth;
    const stageHeight = previewStage.clientHeight;
    const scaleX = stageWidth > 0 ? imageWidth / stageWidth : 1;
    const scaleY = stageHeight > 0 ? imageHeight / stageHeight : 1;
    const textAreaWidth = imageWidth * 0.6;
    const message = currentState.message || getCopy().previewFallback;
    const fontSize = Math.max(16, currentState.fontSize * scaleY);
    const lineHeight = fontSize * 1.2;
    const centerX = imageWidth / 2 + currentState.positionX * scaleX;
    const centerY = imageHeight / 2 + currentState.positionY * scaleY;

    canvas.width = imageWidth;
    canvas.height = imageHeight;

    const ctx = canvas.getContext("2d");
    if (!ctx) {
      throw new Error("Canvas context is unavailable");
    }

    ctx.drawImage(signPreviewImage, 0, 0, imageWidth, imageHeight);
    ctx.font = `700 ${fontSize}px ${currentState.fontLabel}`;
    ctx.fillStyle = currentState.textColor;
    ctx.textAlign = "center";
    ctx.textBaseline = "middle";
    ctx.shadowColor = "rgba(0, 0, 0, 0.12)";
    ctx.shadowBlur = Math.max(2, fontSize * 0.08);
    ctx.shadowOffsetX = Math.max(1, fontSize * 0.03);
    ctx.shadowOffsetY = Math.max(1, fontSize * 0.03);

    const lines = buildWrappedLines(ctx, message, textAreaWidth);
    const startY = centerY - ((lines.length - 1) * lineHeight) / 2;

    lines.forEach((line, index) => {
      ctx.fillText(line, centerX, startY + index * lineHeight, textAreaWidth);
    });

    const link = document.createElement("a");
    const timestamp = new Date().toISOString().replace(/[:.]/g, "-");
    const filePrefix = currentLanguage === "zh" ? "举牌图生成器" : "sign-poster-generator";
    link.href = canvas.toDataURL("image/png");
    link.download = `${filePrefix}-${timestamp}.png`;
    link.click();
  };

  messageInput.addEventListener("input", (event) => {
    const value = event.target.value.slice(0, 60);
    applyPreviewState({
      ...currentState,
      message: value,
    });
  });

  sizeSlider.addEventListener("input", (event) => {
    applyPreviewState({
      ...currentState,
      fontSize: Number(event.target.value),
    });
  });

  positionXSlider.addEventListener("input", (event) => {
    applyPreviewState({
      ...currentState,
      positionX: Number(event.target.value),
    });
  });

  positionYSlider.addEventListener("input", (event) => {
    applyPreviewState({
      ...currentState,
      positionY: Number(event.target.value),
    });
  });

  fontButtons.forEach((button) => {
    button.addEventListener("click", () => {
      const fontFamily = button.dataset.font || defaults.fontFamily;
      applyPreviewState({
        ...currentState,
        fontFamily,
        fontLabel: getFontLabel(fontFamily),
      });
    });
  });

  colorButtons.forEach((button) => {
    button.addEventListener("click", () => {
      applyPreviewState({
        ...currentState,
        textColor: button.dataset.color || defaults.textColor,
      });
    });
  });

  if (resetButton) {
    resetButton.addEventListener("click", resetState);
  }

  if (supportEmail) {
    supportEmail.textContent = supportEmailAddress;
  }

  if (supportTrigger) {
    supportTrigger.addEventListener("click", openSupportModal);
  }

  if (supportClose) {
    supportClose.addEventListener("click", closeSupportModal);
  }

  if (supportCopy) {
    supportCopy.addEventListener("click", copySupportEmail);
  }

  if (supportModal) {
    supportModal.addEventListener("click", (event) => {
      if (event.target === supportModal) {
        closeSupportModal();
      }
    });
  }

  previewText.addEventListener("pointerdown", (event) => {
    if (event.pointerType === "mouse" && event.button !== 0) {
      return;
    }

    isDraggingText = true;
    textPointerId = event.pointerId;
    textDragStartX = event.clientX;
    textDragStartY = event.clientY;
    textStartPositionX = currentState.positionX;
    textStartPositionY = currentState.positionY;
    previewText.classList.add("is-dragging");
    previewText.setPointerCapture(event.pointerId);
  });

  previewText.addEventListener("pointermove", (event) => {
    if (!isDraggingText || event.pointerId !== textPointerId) {
      return;
    }

    const nextX = clampPositionValue(textStartPositionX + (event.clientX - textDragStartX), positionXSlider);
    const nextY = clampPositionValue(textStartPositionY + (event.clientY - textDragStartY), positionYSlider);

    applyPreviewState({
      ...currentState,
      positionX: nextX,
      positionY: nextY,
    });
  });

  const stopTextDrag = (event) => {
    if (!isDraggingText || event.pointerId !== textPointerId) {
      return;
    }

    isDraggingText = false;
    previewText.classList.remove("is-dragging");
    if (previewText.hasPointerCapture(event.pointerId)) {
      previewText.releasePointerCapture(event.pointerId);
    }
    textPointerId = null;
  };

  previewText.addEventListener("pointerup", stopTextDrag);
  previewText.addEventListener("pointercancel", stopTextDrag);

  languageButtons.forEach((button) => {
    button.addEventListener("click", () => {
      const nextLanguage = button.dataset.lang === "en" ? "en" : "zh";
      currentLanguage = nextLanguage;
      window.localStorage.setItem("signgen-language", currentLanguage);
      applyTranslations();
    });
  });

  document.addEventListener("keydown", (event) => {
    if (event.key === "Escape" && supportModal && !supportModal.classList.contains("hidden")) {
      closeSupportModal();
    }
  });

  if (albumCarousel) {
    albumNavButtons.forEach((button) => {
      button.addEventListener("click", () => {
        const direction = button.dataset.carouselNav === "prev" ? -1 : 1;
        const scrollAmount = Math.max(albumCarousel.clientWidth * 0.8, 220) * direction;
        albumCarousel.scrollBy({ left: scrollAmount, behavior: "smooth" });
      });
    });

    albumCarousel.addEventListener("pointerdown", (event) => {
      if (event.pointerType === "mouse" && event.button !== 0) {
        return;
      }
      isDraggingAlbum = true;
      pressedAlbumCard = event.target.closest("[data-album-card]");
      albumPointerId = event.pointerId;
      dragStartX = event.clientX;
      dragStartScrollLeft = albumCarousel.scrollLeft;
      dragDistance = 0;
      albumCarousel.classList.add("is-dragging");
      albumCarousel.setPointerCapture(event.pointerId);
    });

    albumCarousel.addEventListener("pointermove", (event) => {
      if (!isDraggingAlbum || event.pointerId !== albumPointerId) {
        return;
      }
      const deltaX = event.clientX - dragStartX;
      dragDistance = Math.max(dragDistance, Math.abs(deltaX));
      albumCarousel.scrollLeft = dragStartScrollLeft - deltaX;
    });

    const stopAlbumDrag = (event) => {
      if (!isDraggingAlbum || event.pointerId !== albumPointerId) {
        return;
      }

      if (dragDistance <= 8 && pressedAlbumCard) {
        setActiveAlbumCard(pressedAlbumCard);
      }

      isDraggingAlbum = false;
      albumCarousel.classList.remove("is-dragging");
      if (albumCarousel.hasPointerCapture(event.pointerId)) {
        albumCarousel.releasePointerCapture(event.pointerId);
      }
      albumPointerId = null;
      pressedAlbumCard = null;
    };

    albumCarousel.addEventListener("pointerup", stopAlbumDrag);
    albumCarousel.addEventListener("pointercancel", stopAlbumDrag);
    albumCarousel.addEventListener("pointerleave", stopAlbumDrag);
  }

  albumCards.forEach((card) => {
    card.addEventListener("keydown", (event) => {
      if (event.key === "Enter" || event.key === " ") {
        event.preventDefault();
        setActiveAlbumCard(card);
      }
    });
  });

  generateButton.addEventListener("click", async () => {
    if (isGenerating) {
      return;
    }

    isGenerating = true;
    renderGenerateButton();

    try {
      await downloadPreviewImage();
    } catch (error) {
      window.alert(getCopy().downloadError);
    } finally {
      isGenerating = false;
      renderGenerateButton();
    }
  });

  applyTranslations();
  resetState();
  updateAlbumSectionWidth();
  window.addEventListener("resize", updateAlbumSectionWidth);
});
