function fetchBooks() {
  // To pass the tests, don't forget to return your fetch!
  fetch("https://anapioficeandfire.com/api/books")
  .then(function (fetchBooks) { 
  console.log(fetchBooks);
  return fetchBooks.json();
  })
  .then (function(renderBooks){
    console.log(renderBooks);
  })
}
/*fetch("http://api.open-notify.org/astros.json")
  .then(function (response) {
    console.log(response);
    return response.json();
  })
  .then(function (data) {
    console.log(data);
  });*/

function renderBooks(books) {
  const main = document.querySelector('main');
  books.forEach(book => {
    const h2 = document.createElement('h2');
    h2.innerHTML = book.name;
    main.appendChild(h2);
  });
}

document.addEventListener('DOMContentLoaded', function() {
  fetchBooks();
});
