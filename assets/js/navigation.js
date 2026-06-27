(function () {
  function closeDropdowns(except) {
    document.querySelectorAll(".navbar .dropdown.show").forEach(function (dropdown) {
      if (dropdown === except) {
        return;
      }

      dropdown.classList.remove("show");
      var toggle = dropdown.querySelector(".dropdown-toggle");
      var menu = dropdown.querySelector(".dropdown-menu");
      if (toggle) {
        toggle.setAttribute("aria-expanded", "false");
      }
      if (menu) {
        menu.classList.remove("show");
      }
    });
  }

  document.addEventListener("DOMContentLoaded", function () {
    var navbarToggle = document.querySelector(".navbar-toggler");
    var navbarCollapse = document.getElementById("navbarNavAltMarkup");

    if (navbarToggle && navbarCollapse) {
      navbarToggle.addEventListener("click", function () {
        var isOpen = navbarCollapse.classList.toggle("show");
        navbarToggle.setAttribute("aria-expanded", String(isOpen));
        if (!isOpen) {
          closeDropdowns();
        }
      });
    }

    document.querySelectorAll(".navbar .dropdown-toggle").forEach(function (toggle) {
      toggle.addEventListener("click", function (event) {
        event.preventDefault();
        var dropdown = toggle.closest(".dropdown");
        var menu = dropdown && dropdown.querySelector(".dropdown-menu");
        if (!dropdown || !menu) {
          return;
        }

        var willOpen = !dropdown.classList.contains("show");
        closeDropdowns(dropdown);
        dropdown.classList.toggle("show", willOpen);
        menu.classList.toggle("show", willOpen);
        toggle.setAttribute("aria-expanded", String(willOpen));
      });
    });

    document.addEventListener("click", function (event) {
      if (!event.target.closest(".navbar .dropdown")) {
        closeDropdowns();
      }
    });

    document.addEventListener("keydown", function (event) {
      if (event.key === "Escape") {
        closeDropdowns();
      }
    });
  });
})();
