(function () {
  const search = document.querySelector("[data-books-search]");
  const cards = Array.from(document.querySelectorAll("[data-book-card]"));
  const count = document.querySelector("[data-books-count]");
  const empty = document.querySelector("[data-books-empty]");
  const more = document.querySelector("[data-books-more]");
  const genreButtons = Array.from(document.querySelectorAll("[data-books-genre]"));
  const pageSize = 24;
  let visibleLimit = pageSize;
  let activeGenre = "";

  if (!search || cards.length === 0) return;

  function normalize(value) {
    return value
      .toLocaleLowerCase()
      .normalize("NFD")
      .replace(/[\u0300-\u036f]/g, "")
      .trim();
  }

  function filterBooks() {
    const query = normalize(search.value);
    let visible = 0;
    let matches = 0;

    cards.forEach(function (card) {
      const matchesSearch = normalize(card.dataset.search || "").includes(query);
      const matchesGenre = !activeGenre || card.dataset.genre === activeGenre;
      const isMatch = matchesSearch && matchesGenre;
      const isWithinLimit = query || matches < visibleLimit;

      card.hidden = !isMatch || !isWithinLimit;
      if (isMatch) matches += 1;
      if (!card.hidden) visible += 1;
    });

    count.textContent = query
      ? `${matches} ${matches === 1 ? "book" : "books"} found`
      : `Showing ${visible} of ${matches} books`;
    empty.hidden = matches !== 0;
    more.hidden = Boolean(query) || visible >= matches;
  }

  search.addEventListener("input", filterBooks);

  genreButtons.forEach(function (button) {
    button.addEventListener("click", function () {
      activeGenre = button.dataset.booksGenre || "";
      visibleLimit = pageSize;

      genreButtons.forEach(function (genreButton) {
        const isActive = genreButton === button;
        genreButton.classList.toggle("is-active", isActive);
        genreButton.setAttribute("aria-pressed", String(isActive));
      });

      filterBooks();
    });
  });

  more.addEventListener("click", function () {
    visibleLimit += pageSize;
    filterBooks();
  });

  filterBooks();
})();
