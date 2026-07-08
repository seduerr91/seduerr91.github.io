(function () {
  var archives = document.querySelectorAll("[data-archive]");

  archives.forEach(function (archive) {
    var searchInput = archive.querySelector("[data-archive-search]");
    var filterButtons = archive.querySelectorAll("[data-archive-filter]");
    var cards = Array.prototype.slice.call(
      archive.querySelectorAll("[data-archive-card]")
    );
    var yearSections = archive.querySelectorAll("[data-archive-year]");
    var resultCount = archive.querySelector("[data-archive-count]");
    var filterParam = archive.getAttribute("data-filter-param") || "filter";
    var activeFilter = "all";

    function updateUrl() {
      if (!window.history || !window.history.replaceState) {
        return;
      }

      var url = new URL(window.location.href);
      if (activeFilter === "all") {
        url.searchParams.delete(filterParam);
      } else {
        url.searchParams.set(filterParam, activeFilter);
      }
      window.history.replaceState({}, "", url);
    }

    function applyFilters() {
      var query = searchInput ? searchInput.value.trim().toLowerCase() : "";
      var visibleCount = 0;

      cards.forEach(function (card) {
        var topics = (card.getAttribute("data-topics") || "").split(/\s+/);
        var searchable = (card.getAttribute("data-search") || "").toLowerCase();
        var matchesTopic =
          activeFilter === "all" || topics.indexOf(activeFilter) !== -1;
        var matchesSearch = !query || searchable.indexOf(query) !== -1;
        var isVisible = matchesTopic && matchesSearch;

        card.hidden = !isVisible;
        if (isVisible) {
          visibleCount += 1;
        }
      });

      yearSections.forEach(function (section) {
        section.hidden =
          section.querySelectorAll("[data-archive-card]:not([hidden])").length ===
          0;
      });

      if (resultCount) {
        resultCount.textContent =
          visibleCount + (visibleCount === 1 ? " article" : " articles");
      }
    }

    function selectFilter(value, shouldUpdateUrl) {
      activeFilter = value || "all";
      var activeButton = null;
      filterButtons.forEach(function (button) {
        var isActive =
          button.getAttribute("data-archive-filter") === activeFilter;
        button.classList.toggle("is-active", isActive);
        button.setAttribute("aria-pressed", isActive ? "true" : "false");
        if (isActive) {
          activeButton = button;
        }
      });
      applyFilters();
      if (shouldUpdateUrl) {
        updateUrl();
      }
      if (
        activeButton &&
        window.matchMedia("(max-width: 767.98px)").matches
      ) {
        activeButton.scrollIntoView({
          behavior: shouldUpdateUrl ? "smooth" : "auto",
          block: "nearest",
          inline: "nearest",
        });
      }
    }

    filterButtons.forEach(function (button) {
      button.addEventListener("click", function () {
        selectFilter(button.getAttribute("data-archive-filter"), true);
      });
    });

    if (searchInput) {
      searchInput.addEventListener("input", applyFilters);
    }

    var requestedFilter = new URL(window.location.href).searchParams.get(
      filterParam
    );
    var hasRequestedFilter = Array.prototype.some.call(
      filterButtons,
      function (button) {
        return button.getAttribute("data-archive-filter") === requestedFilter;
      }
    );

    selectFilter(hasRequestedFilter ? requestedFilter : "all", false);
  });
})();
