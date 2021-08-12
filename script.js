const getBookSectionRow = document.querySelector(".book-section-row");

window.onload = () => {
    loadBooks()
};

let books = []

let shoppingCart = []
function loadBooks() {
    fetch("https://striveschool-api.herokuapp.com/books")
    .then (response => response.json())
    .then ( _books => {                                         // targeting each book that comes from the API with _books
        books = _books;                                          // assigning them to the global variable above let books = []
        displayBooks();                                          // then calling displayBooks funtion to show it in the DOM
    })
    .catch((err) => console.error(err.message));
}

function displayBooks() {
    books.forEach( (book) => {
        getBookSectionRow.innerHTML += `<div class="col-12 col-sm-6 col-md-4 col-lg-2 mb-3" id="${book.asin}">
                 <div class="card mx-1">
                 <img class="card-img-top" src="${book.img}" alt="Card image cap">
                 <div class="card-body">
                    <h5>${book.title}</h5>
                    <p class="card-text mb-0"><strong>Category: </strong> ${book.category}</p>
                    <p class="card-text"><strong>Price: </strong> ${book.price}€</p>
                    <i class="fas fa-cart-plus" onclick="addToCart(${book.asin})"></i>
                    <i class="fas fa-circle-notch"></i> <button type="button" id="buttons" class="btn btn-primary" onclick="addToCartButton()">Add To Cart</button>           </div>
                  </div>
                 </div>`
    })
}



// let books = []; // storing books as a global variable
// let getButtons = document.querySelector("#buttons"); //target buttons 


// let getCards = document.querySelector(".cards"); // target cards

// // getButtons.addEventListener('click', () => getCards.style.backgroundColor = '#337ab7');

// window.onload = () => {
//     fetch ("https://striveschool-api.herokuapp.com/books") // fetching API
//         .then(response => response.json()) // then converting it to JSON format
//         .then(receivedBooks => {          
//             books = receivedBooks              //  assigning receivedBooks to books so we can apply for each to it later?
//             console.log(receivedBooks)
//             displayBooks(receivedBooks)         // displayBooks function called on window load to call below function and display each item
//         })
//         .catch(error =>{                 // catching any errors that happen
//             console.log(error)          // console logging error
//         })
// }

// function displayBooks(books) {
//     let getBookSection = document.querySelector(".book-section .row")  // target book-section
    
//     books.forEach(book => {
//         getBookSection.innerHTML +=
//         `<div class="col-12 col-sm-6 col-md-4 col-lg-2 mb-3" id="${book.asin}">
//         <div class="card mx-1">
//         <img class="card-img-top" src="${book.img}" alt="Card image cap">
//         <div class="card-body">
//             <h5>${book.title}</h5>
//             <p class="card-text mb-0"><strong>Category: </strong> ${book.category}</p>
//             <p class="card-text"><strong>Price: </strong> ${book.price}€</p>
//             <i class="fas fa-cart-plus" onclick="addToCart(${book.asin})"></i>
//             <i class="fas fa-circle-notch"></i> <button type="button" id="buttons" class="btn btn-primary" onclick="addToCartButton()">Add To Cart</button>           </div>
//     </div>
//     </div>`
//     })
// }

// function addToCartButton() {
//     let applyStyle = document.getElementById("buttons").addEventListener("click", addToCartButton());
//     document.getElementById("buttons").classList.add("selectedBtn");

  
// }