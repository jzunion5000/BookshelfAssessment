function Bookshelf(books = []) {
  this.books = books;

  this.addBook = function (book) {
    this.books.push(book);
  };

  this.removeBook = function (book) {
    // Find a book with the same title
    const idx = this.books.map((b) => b.title).indexOf(book.title);
    if (idx !== -1) {
      this.books.splice(idx, 1);
      return book;
    } else {
      return null;
    }
  };

  /* CHANGE RENDER! THIS IS A TEMPLATE */
  this.render = function (index) {
    const ul = document.createElement("ul");
    ul.id = `books{index}`
    const bookRender = this.books.map((c, i) => c.render())
    ul.replaceChildren(...bookRender);
    return ul;
  };
}

// const button = document.querySelector(".button")
// button.addEventListener("click", () => {
//   let author = document.querySelector(".text-author").value;
//   let title = document.querySelector(".text-title").value;
//   let topic = document.querySelector(".text-topic").value;
//   console.log(this.books);

//   const results = this.books.filter(word => word.includes(title).value)
//   return results;
// })