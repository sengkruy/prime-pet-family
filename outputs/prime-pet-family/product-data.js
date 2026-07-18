(function () {
  "use strict";

  var products = {
    "cat-classic": {
      pet: "Prime Cat · Classic dry food",
      title: "Ocean Fish & Chicken",
      summary: "Two-colour kibble designed as complete, balanced daily nutrition for kittens and adult cats from the age stated on pack.",
      productImage: "assets/prime-cat-1kg-web.png",
      productAlt: "Prime Cat Ocean Fish and Chicken dry food bag",
      lifestyle: "assets/detail-cat-dry.jpg",
      lifestyleAlt: "Orange tabby cat beside a bowl of dry food in a bright home",
      lifestyleFocus: "68% center",
      ingredientImage: "assets/ingredients-classic.jpg",
      ingredientAlt: "Ocean fish, chicken, rice, wheat, sweet potato and marine oil arranged on a light surface",
      gallery: [
        ["assets/prime-cat-1kg-web.png", "Prime Cat one kilogram bag", "1 kg pack"],
        ["assets/prime-cat-10kg-web.png", "Prime Cat ten kilogram bag", "10 kg pack"],
        ["assets/cat-food-bowl-web.png", "Prime two-colour cat kibble in a cat-shaped bowl", "Kibble view"]
      ],
      sellingPoints: [["balanced", "Complete daily recipe"], ["kibble", "Two-colour kibble"], ["life", "From 2 months on pack"]],
      benefitIcons: ["heart", "coat", "shield", "bowl"],
      theme: "blue",
      badges: ["Kittens & adults", "Ocean fish + chicken", "Complete & balanced"],
      sizes: "Available pack shown: 1 kg",
      advantages: [
        ["01", "Everyday balance", "A practical daily recipe made for consistent feeding and familiar mealtimes."],
        ["02", "Two-colour kibble", "Two shapes and colours bring variety to the bowl and reflect the pack's dual-function positioning."],
        ["03", "Broad life-stage fit", "The pack is formulated for kittens and adult cats, with guidance beginning from two months."],
        ["04", "Easy to portion", "Dry kibble is simple to measure, store and serve according to the feeding table on pack."]
      ],
      ingredients: [
        ["Ocean fish", "A marine animal-protein ingredient and the recipe's lead flavour."],
        ["Chicken ingredients", "Chicken, chicken meal, chicken fat and chicken liver meal are listed on the pack."],
        ["Rice, wheat & sweet potato", "Carbohydrate sources included in the classic recipe."],
        ["Fish oil & krill meal", "Marine ingredients associated with essential fatty acids."],
        ["Vitamins & minerals", "The pack lists added vitamins, minerals, taurine and choline."],
        ["Prebiotic support", "Fructooligosaccharides are included in the added composition shown on pack."]
      ],
      benefits: [
        ["Heart & vision", "Taurine and selected nutrients support normal feline heart and eye function."],
        ["Skin & coat", "Animal fats and marine oils provide fatty acids that help maintain skin and coat."],
        ["Immune support", "The recipe includes vitamins, minerals and antioxidants as positioned on pack."],
        ["Daily nutrition", "Protein, fat, fibre, vitamins and minerals are brought together for everyday feeding."]
      ],
      feeding: [
        "Use the feeding table on your current bag as the starting point.",
        "Measure the daily amount and adjust with your veterinarian for age, activity and body condition.",
        "Transition gradually over about seven days instead of changing food suddenly.",
        "Keep clean, fresh water available at all times."
      ],
      faqs: [
        ["Can kittens eat this recipe?", "The pack states suitability from two months old. Younger or unweaned kittens need age-specific care and should not be fed this product unless a veterinarian advises it."],
        ["Can I mix it with canned food?", "Yes, many families combine formats. Count both foods toward the daily calories and keep the total portion appropriate."],
        ["How should I store the bag?", "Reseal tightly and keep it in a cool, dry place away from direct sunlight and moisture."]
      ]
    },
    "cat-family": {
      pet: "Prime Cat · Family-size dry food",
      title: "Everyday Family Range",
      summary: "The Ocean Fish & Chicken recipe in flexible pack sizes for one cat, multi-cat homes and regular high-volume feeding.",
      productImage: "assets/prime-cat-range-web.png",
      productAlt: "Prime Cat dry food bags in multiple family sizes",
      lifestyle: "assets/product-family-scene.jpg",
      lifestyleAlt: "Three cats eating calmly from separate bowls in a bright family home",
      lifestyleFocus: "70% center",
      ingredientImage: "assets/ingredients-classic.jpg",
      ingredientAlt: "Ocean fish, chicken, rice, wheat, sweet potato and marine oil arranged on a light surface",
      gallery: [
        ["assets/prime-cat-range-web.png", "Prime Cat bags in one, ten and twenty kilogram sizes", "Full family range"],
        ["assets/prime-cat-1kg-web.png", "Prime Cat one kilogram bag", "1 kg pack"],
        ["assets/prime-cat-10kg-web.png", "Prime Cat ten kilogram bag", "10 kg pack"]
      ],
      sellingPoints: [["sizes", "1 / 10 / 20 kg"], ["family", "Made for multi-cat homes"], ["balanced", "One familiar recipe"]],
      benefitIcons: ["bowl", "heart", "coat", "shield"],
      theme: "sky",
      badges: ["Multi-size range", "Kittens & adults", "Ocean fish + chicken"],
      sizes: "Pack range shown: 1 / 10 / 20 kg",
      advantages: [
        ["01", "Right-size buying", "Choose a pack that better matches the number of cats and how quickly your household uses food."],
        ["02", "One familiar recipe", "Keep the same flavour profile when moving between pack sizes."],
        ["03", "Multi-cat practical", "Larger formats reduce frequent repurchasing for homes feeding several cats."],
        ["04", "Daily convenience", "Measure, serve and reseal with no preparation required."]
      ],
      ingredients: [
        ["Ocean fish", "The recipe's marine protein flavour."],
        ["Chicken ingredients", "Chicken and chicken-derived ingredients provide animal-source protein and fat."],
        ["Rice, wheat & sweet potato", "Carbohydrate sources listed in the classic formula."],
        ["Fish oil & krill meal", "Marine ingredients associated with essential fatty acids."],
        ["Taurine", "An essential nutrient for cats included in the added composition."],
        ["Vitamin-mineral blend", "Added micronutrients help complete the daily recipe."]
      ],
      benefits: [
        ["Complete daily bowl", "The range is positioned as complete, balanced cat nutrition."],
        ["Eyes & heart", "Taurine and selected nutrients support normal feline function."],
        ["Skin & coat", "Fatty-acid sources help maintain a healthy-looking coat."],
        ["Immune system", "Vitamins, minerals and antioxidants are included as supportive nutrients."]
      ],
      feeding: [
        "Follow the feeding guide printed on the specific pack size you purchase.",
        "Use a scale or consistent cup so portions do not grow accidentally.",
        "In multi-cat homes, separate bowls help reveal who is eating too much or too little.",
        "Reseal carefully; large bags should still be used within the freshness guidance on pack."
      ],
      faqs: [
        ["Is the formula different between sizes?", "The pictured range presents the same Ocean Fish & Chicken recipe in several sizes. Confirm the final label when purchasing."],
        ["Which size is best?", "Choose a bag your household can finish while it remains fresh. A smaller pack can be smarter for one cat; larger packs suit faster-use homes."],
        ["Can cats share one bowl?", "Separate measured bowls make it easier to monitor appetite and portions, especially when cats differ in age or body condition."]
      ]
    },
    "cat-freeze": {
      pet: "Prime Cat · Freeze-dried series",
      title: "Salmon & Chicken",
      summary: "Crunchy kibble with a freeze-dried boost, designed for kittens and adult cats across all breeds.",
      productImage: "assets/prime-cat-freeze-5kg-web.png",
      productAlt: "Prime Cat Salmon and Chicken Freeze-Dried Boost bag",
      lifestyle: "assets/product-cat-freeze-scene.jpg",
      lifestyleAlt: "Long-haired cat beside a bowl of kibble with visible freeze-dried pieces",
      lifestyleFocus: "74% center",
      ingredientImage: "assets/ingredients-cat-freeze.jpg",
      ingredientAlt: "Salmon, chicken, egg yolk, freeze-dried pieces, fruits and salmon oil arranged on a cream surface",
      gallery: [
        ["assets/prime-cat-freeze-5kg-web.png", "Prime Cat five kilogram Salmon and Chicken freeze-dried bag", "5 kg pack"],
        ["assets/prime-cat-freeze-1-5kg-web.png", "Prime Cat one point five kilogram Salmon and Chicken freeze-dried bag", "1.5 kg pack"],
        ["assets/freeze-dried-kibble-web.jpg", "Mixed kibble with pale freeze-dried pieces", "Kibble + boost"]
      ],
      sellingPoints: [["freeze", "Freeze-dried boost"], ["digest", "6B CFU/kg stated on pack"], ["oil", "Rich in salmon oil"]],
      benefitIcons: ["heart", "coat", "digest", "spark"],
      theme: "cream",
      badges: ["Freeze-dried boost", "Salmon + chicken", "All breeds"],
      sizes: "Pack range shown: 1.5 / 5 kg",
      advantages: [
        ["01", "Freeze-dried variety", "Visible freeze-dried pieces add texture and aroma to the everyday kibble."],
        ["02", "Animal-protein blend", "Salmon and chicken lead a recipe designed around feline preferences."],
        ["03", "All-life-stage positioning", "The pack identifies the food for kittens and adult cats across breeds."],
        ["04", "Digestive-care focus", "The formula includes probiotics and supportive ingredients as stated on pack."]
      ],
      ingredients: [
        ["Salmon & chicken", "The two headline animal-protein flavours."],
        ["Freeze-dried chicken", "Adds a distinct aroma and texture to the kibble."],
        ["Egg yolk", "Included among the visible freeze-dried supportive ingredients."],
        ["Fruits & vegetables", "Plant ingredients shown as part of the recipe story."],
        ["Salmon oil", "A marine source of fatty acids."],
        ["Probiotics", "The pack states digestive-care support with 6 billion CFU/kg."]
      ],
      benefits: [
        ["Eyes & heart", "The package highlights supportive nutrients for normal eye and heart health."],
        ["Shiny skin & coat", "Salmon oil supplies fatty acids associated with skin and coat maintenance."],
        ["Digestive care", "Probiotics are included to support the digestive-care positioning of the formula."],
        ["Mealtime appeal", "A mix of kibble and freeze-dried pieces offers varied aroma and texture."]
      ],
      feeding: [
        "Start from the daily quantity on your current pack and divide it into suitable meals.",
        "Introduce over about seven days, especially for cats with sensitive stomachs.",
        "Count treats and toppers so the total daily calories remain appropriate.",
        "Always provide fresh water alongside dry food."
      ],
      faqs: [
        ["What is a freeze-dried boost?", "It refers to visible pieces that have had moisture removed at low temperature, mixed through the kibble for texture and flavour."],
        ["Does every piece look identical?", "Natural ingredient pieces can vary in shape and colour. Check the pack if anything looks or smells unusual."],
        ["Is this suitable for kittens?", "The pictured pack states kitten and adult suitability. Follow its minimum-age and feeding guidance."]
      ]
    },
    "dog-freeze": {
      pet: "Prime Dog · Freeze-dried series",
      title: "Beef & Chicken",
      summary: "A puppy-and-adult dog recipe with beef, chicken, vegetables and an appetizing freeze-dried boost.",
      productImage: "assets/prime-dog-range-web.png",
      productAlt: "Prime Dog Beef and Chicken Freeze-Dried Series bags",
      lifestyle: "assets/detail-dog-freeze.jpg",
      lifestyleAlt: "Golden retriever beside a bowl of kibble on a mountain-view patio",
      lifestyleFocus: "70% center",
      ingredientImage: "assets/ingredients-dog-freeze.jpg",
      ingredientAlt: "Beef, chicken, liver, egg yolk, vegetables and fish oil arranged on a pale surface",
      gallery: [
        ["assets/prime-dog-range-web.png", "Prime Dog freeze-dried bags in two point five and ten kilogram sizes", "Full dog range"],
        ["assets/freeze-dried-kibble-web.jpg", "Prime Dog kibble and freeze-dried pieces in a wooden bowl", "Kibble + boost"],
        ["assets/detail-dog-freeze.jpg", "Golden retriever beside its food bowl", "Everyday serving"]
      ],
      sellingPoints: [["meat", "61% real meat on pack"], ["digest", "6B CFU/kg probiotics"], ["oil", "Omega 3 + 6 fish oil"]],
      benefitIcons: ["digest", "joint", "coat", "energy"],
      theme: "dog",
      badges: ["Puppy & adult", "Beef + chicken", "For picky dogs"],
      sizes: "Pack range shown: 2.5 / 10 kg",
      advantages: [
        ["01", "High-meat positioning", "The package states 61% real meat for this formula."],
        ["02", "Freeze-dried flavour", "Freeze-dried pieces help make the bowl more interesting for selective eaters."],
        ["03", "Puppy-to-adult fit", "The pack is positioned for puppies and adults, with life-stage feeding directions."],
        ["04", "Digestive support", "Live probiotics and easy-to-digest positioning are highlighted on the bag."]
      ],
      ingredients: [
        ["Beef & chicken", "The principal animal-protein flavours shown on pack."],
        ["Vegetables", "Included as part of the Beef & Chicken with Vegetables recipe."],
        ["Freeze-dried chicken", "Adds aroma, texture and palatability."],
        ["Egg yolk & liver", "Supportive freeze-dried ingredients pictured on the package."],
        ["Fish oil", "A source of omega-3 and omega-6 fatty acids."],
        ["Live probiotics", "The pack states 6 billion CFU/kg to support gut-health positioning."]
      ],
      benefits: [
        ["Stomach care", "The formula is presented as gentle on the stomach and easy to digest."],
        ["Joint support", "Supportive nutrients are included in the package's protect-joints positioning."],
        ["Healthy skin & coat", "Fish oil supplies fatty acids associated with skin and coat maintenance."],
        ["Active nutrition", "Animal protein, fat and micronutrients support everyday energy needs."]
      ],
      feeding: [
        "Follow the dog-weight and life-stage table on the current bag.",
        "Growing puppies have different energy needs; ask your veterinarian to confirm portions and growth rate.",
        "Transition gradually rather than changing the full bowl in one day.",
        "Provide clean water and monitor body condition monthly."
      ],
      faqs: [
        ["Can puppies and adults eat the same recipe?", "The package states puppy and adult suitability, but portion sizes differ. Follow the age and weight guide on pack."],
        ["Is this only for picky dogs?", "No. The freeze-dried aroma is positioned to appeal to picky dogs, but the formula can suit other healthy dogs when appropriate for their life stage."],
        ["How do I judge the right portion?", "Use the pack as a starting point, then adjust with your veterinarian according to size, activity, neuter status and body condition."]
      ]
    },
    "cat-canned": {
      pet: "Prime Cat · Premium canned food",
      title: "Canned Collection",
      summary: "Moist, real-meat recipes in four flavours for kittens, adults and seniors—served as directed or used as a tempting topper.",
      productImage: "assets/prime-cat-cans-web.png",
      productAlt: "Prime Cat premium canned food in Chicken, Salmon, Tuna and Seafood flavours",
      lifestyle: "assets/detail-cat-wet.jpg",
      lifestyleAlt: "Silver tabby cat beside a dish of moist food in a bright kitchen",
      lifestyleFocus: "70% center",
      ingredientImage: "assets/ingredients-canned.jpg",
      ingredientAlt: "Chicken, salmon, tuna and mixed seafood arranged in four flavour groups",
      gallery: [
        ["assets/prime-cat-cans-web.png", "Prime Cat Chicken, Salmon, Tuna and Seafood canned foods", "Four-flavour collection"],
        ["assets/prime-can-chicken.jpg", "Prime Cat Chicken canned food", "Chicken"],
        ["assets/prime-can-salmon.jpg", "Prime Cat Salmon canned food", "Salmon"],
        ["assets/prime-can-tuna.jpg", "Prime Cat Tuna canned food", "Tuna"],
        ["assets/prime-can-seafood.jpg", "Prime Cat Seafood canned food", "Seafood"]
      ],
      sellingPoints: [["water", "Moisture-rich format"], ["flavours", "Four flavour choices"], ["topper", "Meal or tempting topper"]],
      benefitIcons: ["water", "spark", "coat", "muscle"],
      theme: "canned",
      badges: ["Chicken · Salmon · Tuna · Seafood", "Moist format", "All life stages"],
      sizes: "Four flavour options shown",
      advantages: [
        ["01", "Moisture in the meal", "Canned food naturally contributes more dietary water than dry kibble."],
        ["02", "Four flavour choices", "Chicken, Salmon, Tuna and Seafood make rotation easier for flavour-seeking cats."],
        ["03", "Topper flexibility", "The label states it can also be used as a topper for dry food."],
        ["04", "Real-meat positioning", "Each can highlights real meat ingredients and grain-free positioning."]
      ],
      ingredients: [
        ["Chicken flavour", "A poultry-led recipe shown in the green can."],
        ["Salmon flavour", "A salmon-led recipe shown in the coral can."],
        ["Tuna flavour", "A tuna-led recipe shown in the blue can."],
        ["Seafood flavour", "A mixed-seafood recipe shown in the teal can."],
        ["Moisture-rich base", "The canned format contributes water as part of the food."],
        ["Flavour-specific formula", "Exact ingredients vary—read the chosen can before feeding."]
      ],
      benefits: [
        ["Hydration support", "Wet food can help increase total water intake, particularly for cats that drink little."],
        ["Mealtime appeal", "Moist texture and aroma can appeal to selective cats."],
        ["Skin & coat", "The label highlights healthy skin-and-coat support."],
        ["Lean muscle", "Animal-protein ingredients support the product's lean-muscle positioning."]
      ],
      feeding: [
        "Check whether your chosen can is labelled complete-and-balanced or complementary before deciding how much of the diet it should provide.",
        "Use the can's feeding directions and count any dry food offered in the same day.",
        "Refrigerate unused opened food promptly in a covered container and follow the storage guidance on label.",
        "Serve at a comfortable temperature and discard food left out too long."
      ],
      faqs: [
        ["Why choose canned food?", "Its high moisture content can contribute to daily water intake, and many cats enjoy the aroma and soft texture."],
        ["Can it be mixed with Prime dry food?", "Yes, the label presents the cans as suitable toppers. Reduce the dry portion so total calories stay appropriate."],
        ["Which flavour should I start with?", "Choose a protein your cat already tolerates, introduce it gradually and review the exact ingredient list on that flavour's can."]
      ]
    }
  };

  var app = document.getElementById("product-detail-app");
  var menuToggle = document.querySelector(".menu-toggle");
  var navigation = document.getElementById("primary-nav");
  var year = document.getElementById("year");

  function escapeHtml(value) {
    return String(value).replace(/[&<>'"]/g, function (character) {
      return {"&":"&amp;","<":"&lt;",">":"&gt;","'":"&#39;","\"":"&quot;"}[character];
    });
  }

  function renderList(items, className, renderer) {
    return '<div class="' + className + '">' + items.map(renderer).join("") + "</div>";
  }

  function symbolFor(name) {
    var symbols = {
      balanced: "✓", kibble: "◌", life: "♥", sizes: "↔", family: "♡",
      freeze: "❄", digest: "↻", oil: "◇", meat: "◆", water: "♢",
      flavours: "●", topper: "+", heart: "♥", coat: "✦", shield: "✓",
      bowl: "◒", spark: "✦", joint: "↺", energy: "⚡", muscle: "◆"
    };
    return symbols[name] || "✦";
  }

  function productLink(id, product) {
    return '<a class="related-product" href="product.html?id=' + encodeURIComponent(id) + '"><span>' + escapeHtml(product.pet) + '</span><strong>' + escapeHtml(product.title) + '</strong><em>View product →</em></a>';
  }

  function renderProduct(id, product) {
    var subject = encodeURIComponent("Prime Pet Family enquiry — " + product.title);
    var body = encodeURIComponent("Hello Prime Pet Family,\n\nI would like to ask about " + product.title + ".\n\nMy pet and location:\n\nThank you.");
    var related = Object.keys(products).filter(function (key) { return key !== id; }).slice(0, 3).map(function (key) { return productLink(key, products[key]); }).join("");
    var gallery = product.gallery.map(function (item) {
      return '<figure class="gallery-card"><div><img src="' + item[0] + '" alt="' + escapeHtml(item[1]) + '" loading="lazy"></div><figcaption>' + escapeHtml(item[2]) + '</figcaption></figure>';
    }).join("");
    var sellingPoints = product.sellingPoints.map(function (item) {
      return '<div class="selling-point"><span aria-hidden="true">' + symbolFor(item[0]) + '</span><strong>' + escapeHtml(item[1]) + '</strong></div>';
    }).join("");

    document.title = product.title + " | Prime Pet Family";
    app.innerHTML = [
      '<section class="detail-hero detail-theme-' + product.theme + '">',
        '<div class="detail-product-visual"><div class="detail-ring"></div><img src="' + product.productImage + '" alt="' + escapeHtml(product.productAlt) + '"></div>',
        '<div class="detail-hero-copy">',
          '<nav class="breadcrumbs" aria-label="Breadcrumb"><a href="index.html">Home</a><span>›</span><a href="index.html#products">Our food</a><span>›</span><span>' + escapeHtml(product.title) + '</span></nav>',
          '<p class="eyebrow">' + escapeHtml(product.pet) + '</p>',
          '<h1>' + escapeHtml(product.title) + '</h1>',
          '<p class="detail-summary">' + escapeHtml(product.summary) + '</p>',
          '<div class="detail-badges">' + product.badges.map(function (badge) { return '<span>' + escapeHtml(badge) + '</span>'; }).join("") + '</div>',
          '<p class="pack-note">' + escapeHtml(product.sizes) + '</p>',
          '<div class="detail-actions"><a class="button button-blue" href="mailto:info@primepetfamily.com?subject=' + subject + '&body=' + body + '">Ask about this product</a><a class="text-link" href="#inside">See what is inside <span aria-hidden="true">↓</span></a></div>',
        '</div>',
      '</section>',

      '<section class="detail-section product-gallery-section" aria-labelledby="gallery-title"><div class="detail-heading detail-heading-row"><div><p class="eyebrow">See the real range</p><h2 id="gallery-title">Pack, size and bowl views.</h2></div><p>Original supplied product artwork is shown without AI alteration.</p></div><div class="product-gallery">' + gallery + '</div></section>',

      '<section class="selling-strip" aria-label="Key product selling points">' + sellingPoints + '</section>',

      '<section class="detail-section" aria-labelledby="advantages-title"><div class="detail-heading"><p class="eyebrow">Why families choose it</p><h2 id="advantages-title">Advantages at a glance.</h2></div>',
        renderList(product.advantages, "advantage-grid", function (item) { return '<article><span>' + item[0] + '</span><h3>' + escapeHtml(item[1]) + '</h3><p>' + escapeHtml(item[2]) + '</p></article>'; }),
      '</section>',

      '<section class="detail-section ingredients-section" id="inside" aria-labelledby="inside-title"><div class="detail-heading detail-heading-row"><div><p class="eyebrow">Inside the recipe</p><h2 id="inside-title">Ingredients with a purpose.</h2></div><p>Key ingredients are summarized from the supplied packaging. Always read the current pack for the complete ingredient list and guaranteed analysis.</p></div>',
        '<div class="ingredient-layout"><figure class="ingredient-photo"><img src="' + product.ingredientImage + '" alt="' + escapeHtml(product.ingredientAlt) + '" loading="lazy"><figcaption>Ingredient story inspired by the current pack. Image is illustrative.</figcaption></figure>',
        renderList(product.ingredients, "ingredient-grid", function (item) { return '<article><span class="ingredient-dot"></span><div><h3>' + escapeHtml(item[0]) + '</h3><p>' + escapeHtml(item[1]) + '</p></div></article>'; }),
        '</div>',
      '</section>',

      '<figure class="detail-lifestyle detail-scene-' + product.theme + '" style="--scene-focus:' + escapeHtml(product.lifestyleFocus) + '"><img class="scene-background" src="' + product.lifestyle + '" alt="' + escapeHtml(product.lifestyleAlt) + '" loading="lazy"><img class="scene-pack" src="' + product.productImage + '" alt="" loading="lazy"><figcaption><p class="eyebrow">Made for everyday life</p><blockquote>' + escapeHtml(product.title) + '</blockquote><small>Original pack artwork layered over a lifestyle scene created for Prime Pet Family.</small></figcaption></figure>',

      '<section class="detail-section benefits-section" aria-labelledby="benefits-title"><div class="detail-heading"><p class="eyebrow">Health-support benefits</p><h2 id="benefits-title">Support from bowl to bright eyes.</h2><p>These are nutritional support areas—not promises to prevent or treat disease.</p></div>',
        renderList(product.benefits, "benefit-detail-grid", function (item, index) { return '<article><div class="benefit-mark" aria-hidden="true">' + symbolFor(product.benefitIcons[index]) + '</div><h3>' + escapeHtml(item[0]) + '</h3><p>' + escapeHtml(item[1]) + '</p></article>'; }),
      '</section>',

      '<section class="detail-section feeding-detail" aria-labelledby="feeding-detail-title"><div><p class="eyebrow">Serve with care</p><h2 id="feeding-detail-title">A better bowl starts with the right amount.</h2><p>Package tables are starting points. Your veterinarian can tailor feeding to your pet’s age, body condition, activity and health.</p></div><ol>' + product.feeding.map(function (item) { return '<li>' + escapeHtml(item) + '</li>'; }).join("") + '</ol></section>',

      '<section class="detail-section detail-faq" aria-labelledby="detail-faq-title"><div class="detail-heading"><p class="eyebrow">Before you serve</p><h2 id="detail-faq-title">Common questions.</h2></div><div class="faq-list">' + product.faqs.map(function (item) { return '<details><summary>' + escapeHtml(item[0]) + '<span>+</span></summary><p>' + escapeHtml(item[1]) + '</p></details>'; }).join("") + '</div></section>',

      '<section class="detail-section related-section" aria-labelledby="related-title"><div class="detail-heading detail-heading-row"><div><p class="eyebrow">Keep exploring</p><h2 id="related-title">More from the Prime family.</h2></div><a class="text-link" href="index.html#products">See all food <span>→</span></a></div><div class="related-grid">' + related + '</div></section>',

      '<section class="product-disclaimer"><strong>Important:</strong> Product formulas, pack claims and feeding directions can change. Use the current package as the final source, and consult a veterinarian for medical or therapeutic nutrition needs.</section>'
    ].join("");
  }

  var requestedId = new URLSearchParams(window.location.search).get("id") || "cat-classic";
  var selectedProduct = products[requestedId] || products["cat-classic"];
  renderProduct(products[requestedId] ? requestedId : "cat-classic", selectedProduct);

  if (year) year.textContent = new Date().getFullYear();
  if (menuToggle && navigation) {
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
  }

  document.querySelectorAll(".detail-faq details").forEach(function (detail) {
    detail.addEventListener("toggle", function () {
      if (!detail.open) return;
      document.querySelectorAll(".detail-faq details").forEach(function (other) {
        if (other !== detail) other.open = false;
      });
    });
  });
}());
