(function () {
  "use strict";

  var posts = (window.PRIME_BLOG_POSTS || []).slice().sort(function (a, b) {
    return b.date.localeCompare(a.date);
  });

  function escapeHtml(value) {
    return String(value).replace(/[&<>'"]/g, function (character) {
      return { "&": "&amp;", "<": "&lt;", ">": "&gt;", "'": "&#39;", "\"": "&quot;" }[character];
    });
  }

  function formatDate(value) {
    return new Intl.DateTimeFormat("en", { year: "numeric", month: "long", day: "numeric" }).format(new Date(value + "T12:00:00"));
  }

  function postUrl(post) {
    return "blog-post.html?post=" + encodeURIComponent(post.slug);
  }

  function readingTime(post) {
    var words = [post.title, post.excerpt, post.intro, post.takeaway, post.product.text]
      .concat(post.sections.reduce(function (items, section) {
        return items.concat([section.heading, section.text], section.bullets || []);
      }, []))
      .join(" ").trim().split(/\s+/).length;
    var minutes = Math.max(2, Math.ceil(words / 180));
    return minutes + " min";
  }

  function card(post, featured) {
    return '<article class="blog-card' + (featured ? " blog-card-featured" : "") + '" data-category="' + escapeHtml(post.category) + '">' +
      '<a class="blog-card-image" href="' + postUrl(post) + '"><img src="' + escapeHtml(post.image) + '" alt="' + escapeHtml(post.imageAlt) + '" loading="lazy"></a>' +
      '<div class="blog-card-body">' +
        '<div class="blog-card-meta"><span>' + escapeHtml(post.category) + '</span><time datetime="' + post.date + '">' + formatDate(post.date) + '</time><span>' + readingTime(post) + '</span></div>' +
        '<h2><a href="' + postUrl(post) + '">' + escapeHtml(post.title) + '</a></h2>' +
        '<p>' + escapeHtml(post.excerpt) + '</p>' +
        '<a class="text-link text-link-blue" href="' + postUrl(post) + '">Read article <span aria-hidden="true">&rarr;</span></a>' +
      '</div>' +
    '</article>';
  }

  function renderArchive() {
    var grid = document.getElementById("blog-grid");
    var featured = document.getElementById("blog-featured");
    if (!grid || !featured || !posts.length) return;

    featured.innerHTML = card(posts[0], true);
    grid.innerHTML = posts.slice(1).map(function (post) { return card(post, false); }).join("");

    var search = document.getElementById("blog-search");
    var filterButtons = document.querySelectorAll("[data-blog-filter]");
    var resultCount = document.getElementById("blog-result-count");
    var activeCategory = "All";

    function applyFilters() {
      var query = search ? search.value.trim().toLowerCase() : "";
      var visible = 0;
      document.querySelectorAll(".blog-card").forEach(function (element) {
        var text = element.textContent.toLowerCase();
        var cardCategory = element.getAttribute("data-category") || "";
        var categoryMatch = activeCategory === "All" || cardCategory === activeCategory || cardCategory.indexOf(activeCategory + " ") === 0;
        var show = categoryMatch && (!query || text.indexOf(query) !== -1);
        element.hidden = !show;
        if (show) visible += 1;
      });
      if (resultCount) resultCount.textContent = visible + (visible === 1 ? " article" : " articles");
    }

    filterButtons.forEach(function (button) {
      button.addEventListener("click", function () {
        activeCategory = button.getAttribute("data-blog-filter");
        filterButtons.forEach(function (item) { item.setAttribute("aria-pressed", item === button ? "true" : "false"); });
        applyFilters();
      });
    });
    if (search) search.addEventListener("input", applyFilters);
    applyFilters();
  }

  function renderLoadMessage(root, heading, message, actionHtml) {
    root.innerHTML =
      '<div class="blog-load-message">' +
        '<a class="blog-back" href="blog.html">&larr; All articles</a>' +
        '<h1>' + escapeHtml(heading) + '</h1>' +
        '<p>' + escapeHtml(message) + '</p>' +
        (actionHtml || "") +
      '</div>';
  }

  function renderPost() {
    var root = document.getElementById("blog-post-app");
    if (!root) return;
    if (!posts.length) {
      renderLoadMessage(
        root,
        "Article could not load",
        "The blog data did not load. This usually clears after a hard refresh. If the problem continues, open the blog archive and choose the article again.",
        '<a class="button button-blue" href="blog.html">Open the blog archive</a>'
      );
      return;
    }
    var slug = new URLSearchParams(window.location.search).get("post");
    var post = slug ? posts.find(function (item) { return item.slug === slug; }) : posts[0];
    if (!post) {
      renderLoadMessage(
        root,
        "Article not found",
        "That article link may be outdated or mistyped. Browse the full blog archive to find the guide you need.",
        '<a class="button button-blue" href="blog.html">Browse all articles</a>'
      );
      return;
    }
    var index = posts.indexOf(post);
    var previous = posts[index + 1];
    var next = posts[index - 1];

    document.title = post.title + " | Prime Pet Family";
    var description = document.querySelector('meta[name="description"]');
    if (description) description.setAttribute("content", post.excerpt);
    var canonical = document.querySelector('link[rel="canonical"]');
    if (canonical) canonical.setAttribute("href", "https://primepetfamily.com/" + postUrl(post));

    root.innerHTML =
      '<article class="blog-article">' +
        '<header class="blog-article-header">' +
          '<a class="blog-back" href="blog.html">&larr; All articles</a>' +
          '<div class="blog-article-meta"><span>' + escapeHtml(post.category) + '</span><time datetime="' + post.date + '">' + formatDate(post.date) + '</time><span>' + readingTime(post) + '</span></div>' +
          '<h1>' + escapeHtml(post.title) + '</h1>' +
          '<p>' + escapeHtml(post.excerpt) + '</p>' +
        '</header>' +
        '<figure class="blog-article-hero"><img src="' + escapeHtml(post.image) + '" alt="' + escapeHtml(post.imageAlt) + '"><figcaption>Prime Pet Family editorial guide</figcaption></figure>' +
        '<div class="blog-article-layout">' +
          '<aside class="blog-article-aside"><strong>In this article</strong><ol>' + post.sections.map(function (section, sectionIndex) { return '<li><a href="#section-' + sectionIndex + '">' + escapeHtml(section.heading) + '</a></li>'; }).join("") + '</ol><div class="blog-care-note"><strong>Care note</strong><p>General education only. It does not replace diagnosis, treatment, or an individual feeding plan from a veterinarian.</p></div></aside>' +
          '<div class="blog-article-content"><p class="blog-article-lead">' + escapeHtml(post.intro) + '</p>' +
            post.sections.map(function (section, sectionIndex) {
              return '<section id="section-' + sectionIndex + '"><h2>' + escapeHtml(section.heading) + '</h2><p>' + escapeHtml(section.text) + '</p>' +
                (section.bullets ? '<ul>' + section.bullets.map(function (item) { return '<li>' + escapeHtml(item) + '</li>'; }).join("") + '</ul>' : "") + '</section>';
            }).join("") +
            '<div class="blog-takeaway"><strong>Important takeaway</strong><p>' + escapeHtml(post.takeaway) + '</p></div>' +
            '<div class="blog-prime-connection"><div><span>Where PRIME fits</span><p>' + escapeHtml(post.product.text) + '</p></div><a class="button button-gold" href="' + escapeHtml(post.product.href) + '">' + escapeHtml(post.product.label) + '</a></div>' +
            '<p class="blog-source"><strong>Further reading:</strong> <a href="' + escapeHtml(post.source) + '" target="_blank" rel="noreferrer">' + escapeHtml(post.sourceLabel) + '</a></p>' +
          '</div>' +
        '</div>' +
        '<nav class="blog-post-nav" aria-label="Other blog posts">' +
          (previous ? '<a href="' + postUrl(previous) + '"><span>Previous article</span><strong>' + escapeHtml(previous.title) + '</strong></a>' : '<span></span>') +
          (next ? '<a href="' + postUrl(next) + '"><span>Next article</span><strong>' + escapeHtml(next.title) + '</strong></a>' : '<a href="blog.html"><span>Continue reading</span><strong>Browse all articles</strong></a>') +
        '</nav>' +
      '</article>';

    var schema = document.createElement("script");
    schema.type = "application/ld+json";
    schema.textContent = JSON.stringify({
      "@context": "https://schema.org",
      "@type": "BlogPosting",
      headline: post.title,
      description: post.excerpt,
      image: "https://primepetfamily.com/" + post.image,
      datePublished: post.date,
      dateModified: post.date,
      author: { "@type": "Organization", name: "Prime Pet Family" },
      publisher: { "@type": "Organization", name: "Prime Pet Family", logo: { "@type": "ImageObject", url: "https://primepetfamily.com/assets/prime-logo.jpg" } },
      mainEntityOfPage: "https://primepetfamily.com/" + postUrl(post)
    });
    document.head.appendChild(schema);
  }

  try {
    renderArchive();
    renderPost();
  } catch (error) {
    var root = document.getElementById("blog-post-app");
    if (root) {
      renderLoadMessage(
        root,
        "Something went wrong",
        "The article page hit a loading error. Please refresh the page or return to the blog archive.",
        '<a class="button button-blue" href="blog.html">Browse all articles</a>'
      );
    }
    if (typeof console !== "undefined" && console.error) console.error(error);
  }
})();
