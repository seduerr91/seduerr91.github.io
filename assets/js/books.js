(function () {
  const search = document.querySelector("[data-books-search]");
  const cards = Array.from(document.querySelectorAll("[data-book-card]"));
  const count = document.querySelector("[data-books-count]");
  const empty = document.querySelector("[data-books-empty]");
  const more = document.querySelector("[data-books-more]");
  const pageSize = 24;
  let visibleLimit = pageSize;

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
      const isMatch = normalize(card.dataset.search || "").includes(query);
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

  more.addEventListener("click", function () {
    visibleLimit += pageSize;
    filterBooks();
  });

  filterBooks();
})();
