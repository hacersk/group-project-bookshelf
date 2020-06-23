/**
 * To complete this group project, you will need to write code to make this app
 * do the following:
 *
 * 1. Load books data when the "Load" button is clicked
 * 2. Filter the books data to find books that are **not** marked as read
 * 3. Show the list of unread books in the "Unread Books" table. The book's
 *    title, author and publish date should be shown.
 * 4. Show the current number of unread books in the Unread Books Count
 * 5. Also filter the books data to find books that are marked as read
 * 6. Show the list of read books in the "Read Books" table and show the number
 *    of read books in the Read Books Count
 * 7. Clicking on a book in the "Read Books" table should "star" it. Starred
 *    books should appear with a yellow background. This can be applied by
 *    adding the `starred` class to the table row (`<tr>`) for each starred book
 */

/**
 * This is the account details that you will use with this exercise.
 *
 * Do not edit this code.
 */
let account = {
  accountEmail: "example@codeyourfuture.io",
  unreadBooks: [],
  readBooks: []
};

/**
 * Add an event listener that will call the fetchBooks function when the
 * loadButton is clicked.
 *
 * Try using the addEventListener method.
 *
 * You may edit this code.
 */
let loadButton = document.querySelector("#loadButton");

function getBooks() {
  loadButton.addEventListener("click", fetchBooks());
}

function fetchBooks() {
  const books = loadBooks();
  processBooks(books);
}

function processBooks(allBooks) {
  let unreadBooks = allBooks.filter(book => {
    if (book.isRead == false) {
      return book;
    }
  });

  let numbers = document.getElementById("unreadCount");
  numbers.innerHTML = unreadBooks.length;
}
getBooks();
/**
 * Write a function called processBooks that takes 1 parameter named
 * allBooks that is an array of objects. Each book object in the allBooks array
 * has an isRead property.
 *
 * This function should filter the allBooks array into a new array called
 * unreadBooks. The unreadBooks array should only contains books where the
 * isRead property is false.
 *
 * Then assign the account.unreadBooks variable to the unreadBooks array you
 * just created.
 *
 * Finally call the render function and pass the account object to it.
 */

// Write your processBooks function here

/**
 * Complete the render function that updates the DOM with the account details.
 *
 * In the index.html file you will see that some example HTML has been written
 * for you. Using DOM methods like createElement and appendChild you should
 * insert the account.unreadBooks data into the DOM.
 *
 * A DOM update for the account email address has already been provided for you
 * as an example.
 */
function render(account) {
  let accountEmailNode = document.createTextNode(account.accountEmail);
  let accountUnreadBooks = document.createTextNode(account.unreadBooks);

  document.querySelector("#accountEmail").appendChild(accountEmailNode);
  document.querySelector("#accountEmail").appendChild(accountUnreadBooks);

  // Add your implementation here
}

/**
 * Write any additional functions that you need to complete the group project
 * below. You may also have to add to or change the existing processBooks and
 * render functions.
 *
 * For example, you might want to have functions that find unread/read books,
 * send fetch requests and more.
 */

function loadBooks() {
  return [
    {
      id: 1,
      title: "The Catcher in the Rye",
      author: "J. D. Salinger",
      publishDate: "1951-07-16",
      isRead: false
    },
    {
      id: 2,
      title: "To Kill a Mockingbird",
      author: "Harper Lee",
      publishDate: "1960-07-11",
      isRead: true
    },
    {
      id: 3,
      title: "The Grapes of Wrath",
      author: "John Steinbeck",
      publishDate: "1939-04-14",
      isRead: true
    },
    {
      id: 4,
      title: "The Great Gatsby",
      author: "F Scott Fitzgerald",
      publishDate: "1925-04-10",
      isRead: true
    },
    {
      id: 5,
      title: "Moby-Dick",
      author: "Herman Melville",
      publishDate: "1851-10-18",
      isRead: false
    },
    {
      id: 6,
      title: "Adventures of Huckleberry Finn",
      author: "Mark Twain",
      publishDate: "1884-12-10",
      isRead: false
    },
    {
      id: 7,
      title: "Alice's Adventures in Wonderland",
      author: "Lewis Carroll",
      publishDate: "1865-11-26",
      isRead: false
    },
    {
      id: 8,
      title: "Pride and Prejudice",
      author: "Jane Austen",
      publishDate: "1813-01-28",
      isRead: false
    },
    {
      id: 9,
      title: "To the Lighthouse",
      author: "Virginia Woolf",
      publishDate: "1927-05-05",
      isRead: false
    },
    {
      id: 10,
      title: "Nineteen Eighty-Four",
      author: "George Orwell",
      publishDate: "1949-06-08",
      isRead: false
    }
  ];
}
