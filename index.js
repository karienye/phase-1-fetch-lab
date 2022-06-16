function fetchBooks() {
  // To pass the tests, don't forget to return your fetch!
  return fetch("https://anapioficeandfire.com/api/books")
  
 
  .then((resp) => resp.json())
  .then(renderBooks)
}
 /* .then(function (response) { 
  return response.json();
  })
  .then (function(renderBooks){
    return renderBooks.json();
  })
}
/*function fetchBooks(){
  return fetch ('https://...').then(
 res => res.json()
) .then(renderBooks)

} */
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





/*fetch("http://api.open-notify.org/astros.json")
  .then(function (response) {
    console.log(response);
    return response.json();
  })
  .then(function (data) {
    console.log(data);
  });*/