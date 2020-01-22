/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
var books = [
    {
        "Author": "Orson Scott Card",
        "Title": "Ender's Game",
        "Printed": true,
        "Publisher": "Some Publisher",
        "Price": 12.00,
        "Forsale": true,

    },
    {
        "Author": "J.R.R. Tolkien",
        "Title": "The Lord Of The Rings",
        "Printed": true,
        "Publisher": "Some Publisher",
        "Price": 15.75,
        "Forsale": false,
        "Awards": [
            "Pulizer",
            "Best Seller NY Times",
            "Best SciFi"
        ]
    },
    {
        "Author": "Douglas Adams",
        "Title": "The Hitchhiker's Guide to the Galaxy",
        "Printed": true,
        "Publisher": "Some Publisher",
        "Price": 5.95,
        "Forsale": true,
        "Awards": [
            "Pulizer",
            "Best Seller NY Times",
            "Best SciFi"
        ]
    },
    {
        "Author": "Jules Verne",
        "Title": "20,000 Leagues Under the Sea",
        "Printed": true,
        "Publisher": "Some Publisher",
        "Price": 12.00,
        "Forsale": false,

    },
    {
        "Author": "Samuel R. Delaney",
        "Title": "Dhalgren",
        "Printed": true,
        "Publisher": "Some Publisher",
        "Price": 12.00,
        "Forsale": true,
        "Awards": [
            "Pulizer",
            "Best Seller NY Times",
            "Best SciFi"
        ]
    },
    {
        "Author": "HG Wells",
        "Title": "War of the Worlds",
        "Printed": true,
        "Publisher": "Some Publisher",
        "Price": 12.00,
        "Forsale": false,
        "Awards": [
            "Pulizer",
            "Best Seller NY Times",
            "Best SciFi"
        ]
    },
    {
        "Author": "Isaac Asimov",
        "Title": "Foundation",
        "Printed": true,
        "Publisher": "Some Publisher",
        "Price": 12.00,
        "Forsale": true,
        "Awards": [
            "Pulizer",
            "Best Seller NY Times",
            "Best SciFi"
        ]
    },
    {
        "Author": "Robert Heinlein",
        "Title": "Stranger in a Strange Land",
        "Printed": true,
        "Publisher": "Some Publisher",
        "Price": 12.00,
        "Forsale": true,

    }

];

let formatted = ""

books.map(function (book, i) {
    formatted += `<li style="font-weight: bold">${book.Title}</li>`
    formatted += `<li style="margin-left: 15px;list-style-type: square">${book.Author}</li>`
    if (book.Publisher) {
        formatted+=`<li style="margin-left: 15px;list-style-type: square">${book.Publisher}</li>`
    }
    if (book.Forsale) {
        formatted += `<li style="margin-left: 15px;list-style-type: square">$${book.Price}</li>`
    }
    if (Array.isArray(book.Awards)) {
        let awards = ""
        formatted += `<li style="margin-left:15px;list-style-type: square">Awards:</>`
        book.Awards.map(function (award) {
            awards += `<li style="margin-left: 25px;list-style-type: circle">${award}</li>`
        })
        formatted += awards
    }
})

document.getElementById('booklist').innerHTML = formatted