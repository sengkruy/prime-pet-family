(function () {
  "use strict";
  var menuToggle = document.querySelector(".menu-toggle");
  var navigation = document.getElementById("primary-nav");
  var year = document.getElementById("year");
  if (year) year.textContent = new Date().getFullYear();

  var guideVisuals = {
    "baby-kitten": { focus: "62% center", checks: ["Keep kittens warm", "Support frequent nursing", "Record weight daily"], pack: "assets/prime-cat-1kg-web.png", alt: "Prime Cat one kilogram bag" },
    "mother-cat": { focus: "60% center", checks: ["Quiet nesting space", "Food and water nearby", "Watch appetite and discharge"], pack: "assets/prime-cat-freeze-1-5kg-web.png", alt: "Prime Cat freeze-dried food bag" },
    "feeding-family": { focus: "66% center", checks: ["Milk before weaning", "Separate measured bowls", "Change food gradually"], pack: "assets/prime-cat-range-web.png", alt: "Prime Cat family-size range" },
    "canned-food": { focus: "70% center", checks: ["Adds dietary moisture", "Check complete or topper", "Refrigerate after opening"], pack: "assets/prime-cat-cans-web.png", alt: "Prime Cat canned-food collection" },
    "new-puppy": { focus: "68% center", checks: ["Create a calm safe zone", "Keep a simple schedule", "Reward gentle learning"], pack: "assets/prime-dog-range-web.png", alt: "Prime Dog freeze-dried range" },
    "hydration": { focus: "66% center", checks: ["Offer several stations", "Wash bowls every day", "Notice drinking changes"], pack: "assets/prime-cat-cans-web.png", alt: "Prime Cat canned-food collection" },
    "body-condition": { focus: "72% center", checks: ["Feel the ribs gently", "Look for a waist", "Photograph monthly"], pack: "assets/prime-dog-range-web.png", alt: "Prime Dog freeze-dried range" },
    "food-transition": { focus: "70% center", checks: ["Begin at 25% new", "Increase in small steps", "Slow down if needed"], pack: "assets/prime-cat-1kg-web.png", alt: "Prime Cat one kilogram bag" },
    "read-label": { focus: "50% center", checks: ["Confirm species and stage", "Find adequacy statement", "Save lot and date details"], pack: "assets/prime-cat-packaging-details-web.jpg", alt: "Prime Cat package information panel" }
  };

  document.querySelectorAll(".knowledge-article").forEach(function (article) {
    var visual = guideVisuals[article.id];
    if (!visual) return;
    var media = article.querySelector(".article-image");
    var lead = article.querySelector(".article-lead");
    var connection = article.querySelector(".prime-connection");
    if (media) media.style.setProperty("--article-focus", visual.focus);
    if (lead) {
      var checklist = document.createElement("div");
      checklist.className = "visual-checklist";
      checklist.setAttribute("aria-label", "Quick checklist");
      visual.checks.forEach(function (label, index) {
        var item = document.createElement("div");
        item.innerHTML = '<span aria-hidden="true">' + (index + 1) + '</span><strong>' + label + '</strong>';
        checklist.appendChild(item);
      });
      lead.insertAdjacentElement("afterend", checklist);
    }
    if (connection) {
      var image = document.createElement("img");
      image.className = "connection-pack";
      image.src = visual.pack;
      image.alt = visual.alt;
      image.loading = "lazy";
      connection.classList.add("has-product-image");
      connection.insertBefore(image, connection.firstChild);
    }
  });

  if (!menuToggle || !navigation) return;
  menuToggle.addEventListener("click", function () {
    var open = menuToggle.getAttribute("aria-expanded") === "true";
    menuToggle.setAttribute("aria-expanded", String(!open));
    navigation.classList.toggle("open", !open);
  });
  navigation.querySelectorAll("a").forEach(function (link) {
    link.addEventListener("click", function () {
      menuToggle.setAttribute("aria-expanded", "false");
      navigation.classList.remove("open");
    });
  });
}());
