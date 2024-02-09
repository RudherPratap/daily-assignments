function bookObj(id, title, author, isBorrowed = false) {
  return {
    id,
    title,
    author,
    isBorrowed
  };
}
const library = [];

function addBook(id, title, author) {
  const newBook = bookObj(id, title, author);
  library.push(newBook);
}

function borrowBook(id) {
  const books = library.find(books => books.id === id);
  if (books) {
    if (books.isBorrowed) {
      console.log(`${books.title} by ${book.author} is already borrowed.`);
    } else {
      books.isBorrowed = true;
      console.log(`${books.title} by ${books.author} has been borrowed.`);
    }
  } else {
    console.log(`Book with ${id} is not found.`);
  }
}

function returnBook(id) {
  const books = library.find(books => books.id === id)
  if (books) {
    books.isBorrowed = false;
    console.log(`${books.title} by ${books.author} has been returned.`);
  } else {
    console.log(`${books.id} is not found`);
  }
}

function listAvailableBooks() {
  console.log("Available books: ");
  library.forEach(books => {
    if (!books.isBorrowed) {
      console.log(`${books.title} by ${books.author}`);
    }
  });
}

function searchBook(title) {
  return library.find(books => books.title === title || null)
}

addBook(1, "The Great Gatsby", "F.Scott Fitzgerald");
addBook(2, "To Kill a Mockingbird", "Harper Lee");
addBook(3, "Jane Eyre", "Charlotte Bronte");
borrowBook(2);
listAvailableBooks();
returnBook(2);
borrowBook(1);
listAvailableBooks();
returnBook(1);
listAvailableBooks();
let bookSearched = searchBook("Jane Eyre");
console.log(bookSearched);