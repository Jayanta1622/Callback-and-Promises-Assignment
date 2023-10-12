
function sortBooks(books,callback) {
    let newList = books.map((book)=>{
        return book.title;
    })
    callback(newList)
}

function logFunction(List) {
    List.sort()
    List.forEach(element => {
        console.log(element);
    });
}

const books = [
    {
      title: "The Great Gatsby",
      author: "F. Scott Fitzgerald",
      year: 1925,
    },
    {
      title: "To Kill a Mockingbird",
      author: "Harper Lee",
      year: 1960,
    },
    {
      title: "1984",
      author: "George Orwell",
      year: 1949,
    },
    {
      title: "Pride and Prejudice",
      author: "Jane Austen",
      year: 1813,
    },
    {
      title: "The Catcher in the Rye",
      author: "J.D. Salinger",
      year: 1951,
    },
  ];

  sortBooks(books,logFunction)