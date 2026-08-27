(function () {
  const search = document.querySelector("[data-books-search]");
  const cards = Array.from(document.querySelectorAll("[data-book-card]"));
  const count = document.querySelector("[data-books-count]");
  const empty = document.querySelector("[data-books-empty]");

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

    cards.forEach(function (card) {
      const matches = normalize(card.dataset.search || "").includes(query);
      card.hidden = !matches;
      if (matches) visible += 1;
    });

    count.textContent = query
      ? `${visible} ${visible === 1 ? "book" : "books"} found`
      : `Showing ${visible} books`;
    empty.hidden = visible !== 0;
  }

  search.addEventListener("input", filterBooks);
})();
