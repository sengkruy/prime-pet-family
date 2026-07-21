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

  if (year) year.textContent = new Date().getFullYear();

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
