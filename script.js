let books = []; // storing books as a global variable

window.onload = () => {
    fetch ("https://striveschool-api.herokuapp.com/books") // fetching API
        .then(response => response.json()) // then converting it to JSON format
        .then(receivedBooks => {          
            books = receivedBooks              //  assigning receivedBooks to books so we can apply for each to it later?
            console.log(receivedBooks)
            displayBooks(recevedBooks)
        })
        .catch(error =>{                 // catching any errors that happen
            console.log(error)          // console logging error
        })
}

function displayBooks(books) {
    // target book-section
    let getBookSection = document.querySelector(".book-section .row")
    books.forEach(book => {
        getBookSection.innerHTML +=
        `<div class="col-12 col-sm-6 col-md-4 col-lg-2 mb-3" id="${book.asin}">
        <div class="card mx-1">
        <img class="card-img-top" src="${book.img}" alt="Card image cap">
        <div class="card-body">
            <h5>${book.title}</h5>
            <p class="card-text mb-0"><strong>Category: </strong> ${book.category}</p>
            <p class="card-text"><strong>Price: </strong> ${book.price}€</p>
            <i class="fas fa-cart-plus" onclick="addToCart(${book.asin})"></i>
            <i class="fas fa-circle-notch"></i>            </div>
    </div>
    </div>`
    })
}

