(function () {
  "use strict";
  var menuToggle = document.querySelector(".menu-toggle");
  var navigation = document.getElementById("primary-nav");
  var year = document.getElementById("year");
  if (year) year.textContent = new Date().getFullYear();

  var guideVisuals = {
    "baby-kitten": {
      focus: "62% center",
      checks: ["Keep kittens warm", "Support frequent nursing", "Record weight daily"],
      watch: ["Persistent crying", "Weak nursing or chilling", "No steady weight gain"],
      pack: "assets/prime-cat-1kg-web.png",
      alt: "Prime Cat one kilogram bag"
    },
    "mother-cat": {
      focus: "60% center",
      checks: ["Quiet nesting space", "Food and water nearby", "Watch appetite and discharge"],
      watch: ["Painful mammary glands", "Not eating or weakness", "Fever, tremors, or foul discharge"],
      pack: "assets/prime-cat-freeze-1-5kg-web.png",
      alt: "Prime Cat freeze-dried food bag"
    },
    "feeding-family": {
      focus: "66% center",
      checks: ["Milk before weaning", "Separate measured bowls", "Change food gradually"],
      watch: ["Kitten refusing solids", "Loose stools during change", "Mother losing condition fast"],
      pack: "assets/prime-cat-range-web.png",
      alt: "Prime Cat family-size range"
    },
    "canned-food": {
      focus: "70% center",
      checks: ["Adds dietary moisture", "Check complete or topper", "Refrigerate after opening"],
      watch: ["Food left out too long", "Sudden protein switch", "Ignoring label adequacy statement"],
      pack: "assets/prime-cat-cans-web.png",
      alt: "Prime Cat canned-food collection"
    },
    "new-puppy": {
      focus: "68% center",
      checks: ["Create a calm safe zone", "Keep a simple schedule", "Reward gentle learning"],
      watch: ["Overtired biting", "Missed potty breaks", "Too much new stimulation at once"],
      pack: "assets/prime-dog-range-web.png",
      alt: "Prime Dog freeze-dried range"
    },
    "hydration": {
      focus: "66% center",
      checks: ["Offer several stations", "Wash bowls every day", "Notice drinking changes"],
      watch: ["Sudden extra thirst", "Drinking much less", "Weakness, vomiting, or tacky gums"],
      pack: "assets/prime-cat-cans-web.png",
      alt: "Prime Cat canned-food collection"
    },
    "body-condition": {
      focus: "72% center",
      checks: ["Feel the ribs gently", "Look for a waist", "Photograph monthly"],
      watch: ["Waist disappearing", "Ribs too buried or too sharp", "Fast shape change between months"],
      pack: "assets/prime-dog-range-web.png",
      alt: "Prime Dog freeze-dried range"
    },
    "food-transition": {
      focus: "70% center",
      checks: ["Begin at 25% new", "Increase in small steps", "Slow down if needed"],
      watch: ["Repeated vomiting", "Marked diarrhea", "Cat refusing food entirely"],
      pack: "assets/prime-cat-1kg-web.png",
      alt: "Prime Cat one kilogram bag"
    },
    "read-label": {
      focus: "50% center",
      checks: ["Confirm species and stage", "Find adequacy statement", "Save lot and date details"],
      watch: ["Buying by front claim alone", "Missing storage directions", "Forgetting calories and feeding guide"],
      pack: "assets/prime-cat-packaging-details-web.jpg",
      alt: "Prime Cat package information panel"
    },
    "calico-cat": {
      focus: "50% center",
      checks: ["Remember: pattern, not breed", "Match food to life stage", "Brush by coat length"],
      watch: ["Assuming colour predicts personality", "Choosing food by appearance alone", "Ignoring ordinary weight and health checks"],
      pack: "assets/prime-cat-range-web.png",
      alt: "Prime Cat family-size range"
    },
    "dog-breed-basics": {
      focus: "50% center",
      checks: ["Check size and energy", "Think about grooming time", "Match the breed to your real lifestyle"],
      watch: ["Choosing only by appearance", "Underestimating exercise needs", "Assuming one breed fits every home"],
      pack: "assets/prime-dog-range-web.png",
      alt: "Prime Dog freeze-dried range"
    },
    "siamese-cat": {
      focus: "52% center",
      checks: ["Plan daily interaction", "Add climbing and puzzle play", "Keep portions measured"],
      watch: ["Boredom from too little stimulation", "Assuming vocal means naughty", "Overfeeding an active indoor cat"],
      pack: "assets/prime-cat-1kg-web.png",
      alt: "Prime Cat one kilogram bag"
    },
    "persian-cat": {
      focus: "50% center",
      checks: ["Brush gently and often", "Keep bowls and face area clean", "Track coat and body condition"],
      watch: ["Matting from skipped grooming", "Messy feeding areas", "Choosing food by appearance alone"],
      pack: "assets/prime-cat-cans-web.png",
      alt: "Prime Cat canned-food collection"
    },
    "golden-retriever": {
      focus: "56% center",
      checks: ["Pair exercise with training", "Brush the coat regularly", "Match portions to activity"],
      watch: ["Too many training treats", "Underestimating daily movement needs", "Excitement without manners work"],
      pack: "assets/prime-dog-range-web.png",
      alt: "Prime Dog freeze-dried range"
    },
    "pomeranian": {
      focus: "54% center",
      checks: ["Protect jumps and handling", "Brush the coat weekly", "Measure very small meals carefully"],
      watch: ["High places and rough play", "Letting barking become routine", "Portion drift in a toy breed"],
      pack: "assets/prime-dog-range-web.png",
      alt: "Prime Dog freeze-dried range"
    },
    "indoor-cat-exercise": {
      focus: "56% center",
      checks: ["Add vertical space", "Use puzzle feeding", "Rotate toys and play sessions"],
      watch: ["Boredom scratching", "Overgrooming from stress", "Free-feeding without movement"],
      pack: "assets/prime-cat-1kg-web.png",
      alt: "Prime Cat one kilogram bag"
    },
    "senior-cat-feeding": {
      focus: "58% center",
      checks: ["Track weight and muscle", "Use easy-to-reach bowls", "Support hydration thoughtfully"],
      watch: ["Quiet appetite loss", "Weight change under thick fur", "Ignoring trouble chewing or swallowing"],
      pack: "assets/prime-cat-cans-web.png",
      alt: "Prime Cat canned-food collection"
    },
    "picky-dog": {
      focus: "55% center",
      checks: ["Return to a meal schedule", "Limit treats and scraps", "Change food gradually"],
      watch: ["Sudden appetite drop", "Vomiting or lethargy", "Turning every meal into bargaining"],
      pack: "assets/prime-dog-range-web.png",
      alt: "Prime Dog freeze-dried range"
    }
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
      if (visual.watch && visual.watch.length) {
        var watch = document.createElement("div");
        watch.className = "article-watch";
        watch.innerHTML = "<strong>Watch for</strong><ul>" + visual.watch.map(function (item) {
          return "<li>" + item + "</li>";
        }).join("") + "</ul>";
        checklist.insertAdjacentElement("afterend", watch);
      }
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
