const app = document.querySelector('#app');

const bookshelf = new Bookshelf();

const button = document.querySelector(".button")
button.addEventListener("click", () => {
  let author = document.querySelector(".text-author").value;
  let title = document.querySelector(".text-title").value;
  let topic = document.querySelector(".text-topic").value;
  
  function checkTitle(bookshelf){
    return bookshelf === title.value;

  }
  const titleSearch = bookshelf.books.filter(checkTitle);
  return titleSearch;
})



// Load in book data
for (const bookInfo of bookData) {
  const book = new Book(
    bookInfo.author,
    bookInfo.language,
    bookInfo.subject,
    bookInfo.title
  );
  bookshelf.addBook(book);
}

app.append(bookshelf.render());