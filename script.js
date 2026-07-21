(function () {
  "use strict";

  var menuToggle = document.querySelector(".menu-toggle");
  var navigation = document.getElementById("primary-nav");
  var filterButtons = document.querySelectorAll(".filter-button");
  var productCards = document.querySelectorAll(".product-card");
  var emptyState = document.getElementById("filter-empty");
  var dialog = document.getElementById("inquiry-dialog");
  var productInput = document.getElementById("product-interest");
  var enquiryForm = document.getElementById("inquiry-form");
  var closeDialogButton = document.querySelector(".dialog-close");
  var toast = document.getElementById("toast");
  var year = document.getElementById("year");
  var lastTrigger = null;
  var prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

  if (year) year.textContent = new Date().getFullYear();

  function assignReveal(selector, effect, step) {
    document.querySelectorAll(selector).forEach(function (element, index) {
      element.setAttribute("data-reveal", effect || "up");
      if (step) element.style.setProperty("--reveal-delay", (index * step) + "ms");
    });
  }

  function initScrollReveal() {
    var items = document.querySelectorAll("[data-reveal]");
    if (!items.length) return;
    if (prefersReducedMotion || !("IntersectionObserver" in window)) {
      items.forEach(function (item) { item.classList.add("is-visible"); });
      return;
    }
    var observer = new IntersectionObserver(function (entries) {
      entries.forEach(function (entry) {
        if (!entry.isIntersecting) return;
        entry.target.classList.add("is-visible");
        observer.unobserve(entry.target);
      });
    }, { threshold: 0.14, rootMargin: "0px 0px -10% 0px" });
    items.forEach(function (item) { observer.observe(item); });
  }

  function initParallax() {
    var items = document.querySelectorAll("[data-parallax]");
    if (!items.length || prefersReducedMotion) return;
    var ticking = false;

    function update() {
      ticking = false;
      var viewportHeight = window.innerHeight || 1;
      items.forEach(function (item) {
        var rect = item.getBoundingClientRect();
        if (rect.bottom < 0 || rect.top > viewportHeight) return;
        var center = rect.top + (rect.height / 2);
        var distance = (center - viewportHeight / 2) / viewportHeight;
        item.style.setProperty("--parallax-y", (distance * -18).toFixed(2) + "px");
      });
    }

    function queue() {
      if (ticking) return;
      ticking = true;
      window.requestAnimationFrame(update);
    }

    update();
    window.addEventListener("scroll", queue, { passive: true });
    window.addEventListener("resize", queue);
  }

  assignReveal(".hero-content", "soft");
  assignReveal(".hero-proof > div", "up", 90);
  assignReveal(".trust-bar > div", "up", 90);
  assignReveal(".trust-visual", "left");
  assignReveal(".trust-card", "up", 70);
  assignReveal(".trust-proof-panel", "right");
  assignReveal(".filter-bar", "soft");
  assignReveal(".product-card", "up", 80);
  assignReveal(".format-card", "up", 80);
  assignReveal(".feature-visual", "left");
  assignReveal(".feature-copy > *", "soft", 70);
  assignReveal(".ingredient-gallery-card", "up", 80);
  assignReveal(".spotlight-copy > *", "soft", 70);
  assignReveal(".spotlight-visual", "right");
  assignReveal(".transition-step", "up", 80);
  assignReveal(".standards-card", "up", 80);
  assignReveal(".standards-panel", "right");
  assignReveal(".knowledge-preview-card", "up", 80);
  assignReveal(".story-image", "left");
  assignReveal(".story-copy > *", "soft", 70);
  assignReveal(".quality-row span", "up", 50);
  assignReveal(".business-card", "up", 80);
  assignReveal(".business-assurance article", "up", 70);
  assignReveal(".faq-list details", "soft", 55);
  assignReveal(".final-cta > *", "up", 80);
  assignReveal(".site-footer > div:not(.copyright)", "soft", 60);

  document.querySelectorAll(".trust-visual img, .feature-visual img, .ingredient-gallery-card > img, .spotlight-visual .dog-range-image, .story-image img, .knowledge-preview-card > img").forEach(function (image) {
    image.setAttribute("data-parallax", "");
  });

  initScrollReveal();
  initParallax();

  function closeMenu() {
    menuToggle.setAttribute("aria-expanded", "false");
    navigation.classList.remove("open");
  }

  menuToggle.addEventListener("click", function () {
    var isOpen = menuToggle.getAttribute("aria-expanded") === "true";
    menuToggle.setAttribute("aria-expanded", String(!isOpen));
    navigation.classList.toggle("open", !isOpen);
  });

  navigation.querySelectorAll("a").forEach(function (link) {
    link.addEventListener("click", closeMenu);
  });

  document.addEventListener("click", function (event) {
    if (!navigation.contains(event.target) && !menuToggle.contains(event.target)) {
      closeMenu();
    }
  });

  filterButtons.forEach(function (button) {
    button.addEventListener("click", function () {
      var selectedFilter = button.dataset.filter;
      var visibleCount = 0;

      filterButtons.forEach(function (item) {
        var isActive = item === button;
        item.classList.toggle("active", isActive);
        item.setAttribute("aria-pressed", String(isActive));
      });

      productCards.forEach(function (card) {
        var categories = card.dataset.categories.split(" ");
        var shouldShow = selectedFilter === "all" || categories.indexOf(selectedFilter) !== -1;
        card.hidden = !shouldShow;
        if (shouldShow) visibleCount += 1;
      });

      emptyState.hidden = visibleCount !== 0;
    });
  });

  function openInquiry(trigger) {
    lastTrigger = trigger;
    productInput.value = trigger.dataset.product || "General product enquiry";
    closeMenu();
    dialog.showModal();
    document.body.classList.add("dialog-open");
    window.setTimeout(function () {
      document.getElementById("pet-type").focus();
    }, 30);
  }

  function closeInquiry() {
    if (dialog.open) dialog.close();
    document.body.classList.remove("dialog-open");
    if (lastTrigger) lastTrigger.focus();
  }

  document.querySelectorAll(".js-open-inquiry").forEach(function (button) {
    button.addEventListener("click", function () {
      openInquiry(button);
    });
  });

  closeDialogButton.addEventListener("click", closeInquiry);

  dialog.addEventListener("click", function (event) {
    var bounds = dialog.getBoundingClientRect();
    var isInside = event.clientX >= bounds.left && event.clientX <= bounds.right && event.clientY >= bounds.top && event.clientY <= bounds.bottom;
    if (!isInside) closeInquiry();
  });

  dialog.addEventListener("close", function () {
    document.body.classList.remove("dialog-open");
  });

  enquiryForm.addEventListener("submit", function (event) {
    event.preventDefault();
    if (!enquiryForm.reportValidity()) return;

    var formData = new FormData(enquiryForm);
    var subject = "Prime Pet Family enquiry - " + formData.get("product");
    var body = [
      "Hello Prime Pet Family,",
      "",
      "I would like to ask about: " + formData.get("product"),
      "Pet: " + formData.get("pet"),
      "Life stage: " + formData.get("stage"),
      "Location: " + formData.get("location"),
      "",
      "Message: " + (formData.get("message") || "Please share availability and retailer information."),
      "",
      "Thank you."
    ].join("\n");

    toast.classList.add("show");
    window.setTimeout(function () {
      toast.classList.remove("show");
    }, 2600);
    window.location.href = "mailto:info@primepetfamily.com?subject=" + encodeURIComponent(subject) + "&body=" + encodeURIComponent(body);
  });

  document.querySelectorAll(".faq-list details").forEach(function (detail) {
    detail.addEventListener("toggle", function () {
      if (!detail.open) return;
      document.querySelectorAll(".faq-list details").forEach(function (other) {
        if (other !== detail) other.open = false;
      });
    });
  });

  document.addEventListener("keydown", function (event) {
    if (event.key === "Escape") closeMenu();
  });
}());
