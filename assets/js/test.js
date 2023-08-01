var books = [{
        P1: "COVISHIELD&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; Price:  &#8377;123 &nbsp;&nbsp; &nbsp;&nbsp;&nbsp; Manufacturer:Cipla",
        P2: " COVAXIN &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;  Price:  &#8377;56  &nbsp;&nbsp; &nbsp;&nbsp; &nbsp; Manufacturer:Ranbaxy",
        P3: "Medicine3 &nbsp;&nbsp;&nbsp;&nbsp;&nbsp; Price:  &#8377;305 &nbsp;&nbsp;&nbsp;&nbsp;&nbsp; Manufacturer: Appolo",
        P4: "Medicine4 &nbsp;&nbsp;&nbsp;&nbsp;&nbsp; Price:  &#8377;123 &nbsp;&nbsp;&nbsp;&nbsp;&nbsp; Manufacturer:Cadillila",
        P5: "Medicine5 &nbsp;&nbsp;&nbsp;&nbsp;&nbsp; Price:  &#8377;96  &nbsp;&nbsp;&nbsp; &nbsp; &nbsp; Manufacturer:Abbot",
    },
    {
        P1: "Pain1&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;  Price:   &#8377;123 &nbsp;&nbsp;&nbsp;&nbsp;&nbsp; Manufacturer:Cipla",
        P2: " Pain1&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; Price:   &#8377;56  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Manufacturer:Ranbaxy",
        P3: "Pain3 &nbsp;&nbsp;&nbsp;&nbsp;&nbsp; Price:   &#8377;305  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Manufacturer: Appolo",
        P4: "Pain4&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;  Price:   &#8377;123  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Manufacturer:Cadillila",
        P5: "Pain5&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;  Price:   &#8377;96 &nbsp;&nbsp;&nbsp;&nbsp;&nbsp; Manufacturer:Abbot",
    },
    {
        P1: "Cancer1&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;  Price:	&#8377;1223&nbsp;&nbsp;&nbsp;  &nbsp; &nbsp;  Manufacturer:Cipla",
        P2: " Cancer2 &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Price:	&#8377;560 &nbsp;&nbsp;&nbsp; &nbsp; &nbsp; Manufacturer:Ranbaxy",
        P3: "Cancer3&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;  Price:	&#8377;3050 &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Manufacturer: Appolo",
        P4: "Cancer4 &nbsp;&nbsp;&nbsp;&nbsp;&nbsp; Price:	&#8377;123&nbsp;&nbsp;&nbsp; &nbsp; &nbsp;  Manufacturer:Cadillila",
        P5: "CARCOGEN &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Price:	&#8377;9600&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; Manufacturer:Abbot",
    },
    {
        P1: "Anticals&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;    Price:	&#8377;123 &nbsp;&nbsp; &nbsp;&nbsp;&nbsp; Manufacturer:Cipla",
        P2: " Fever2 &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;    Price:	&#8377;56  &nbsp;&nbsp; &nbsp;&nbsp; &nbsp; Manufacturer:Ranbaxy",
        P3: "Ecotrin &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;    Price:	&#8377;305 &nbsp;&nbsp;&nbsp;&nbsp;&nbsp; Manufacturer: Appolo",
        P4: "Paracetamol &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Price:	&#8377;123 &nbsp;&nbsp;&nbsp;&nbsp;&nbsp; Manufacturer:Cadillila",
        P5: "Dolo &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;       Price:	&#8377;96  &nbsp;&nbsp;&nbsp; &nbsp; &nbsp; Manufacturer:Abbot",
    },
    {
        P1: "Medicine1&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; Price:	&#8377;123 &nbsp;&nbsp; &nbsp;&nbsp;&nbsp; Manufacturer:Cipla",
        P2: " Medicine2 &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Price:	&#8377;56  &nbsp;&nbsp; &nbsp;&nbsp; &nbsp; Manufacturer:Ranbaxy",
        P3: "Medicine3 &nbsp;&nbsp;&nbsp;&nbsp;&nbsp; Price:	&#8377;305 &nbsp;&nbsp;&nbsp;&nbsp;&nbsp; Manufacturer: Appolo",
        P4: "Medicine4 &nbsp;&nbsp;&nbsp;&nbsp;&nbsp; Price:	&#8377;123 &nbsp;&nbsp;&nbsp;&nbsp;&nbsp; Manufacturer:Cadillila",
        P5: "Medicine5 &nbsp;&nbsp;&nbsp;&nbsp;&nbsp; Price:	&#8377;96  &nbsp;&nbsp;&nbsp; &nbsp; &nbsp; Manufacturer:Abbot",
    },
    {
        P1: "Medicine1&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;  Price:	&#8377;123 &nbsp;&nbsp; &nbsp;&nbsp;&nbsp; Manufacturer:Cipla",
        P2: " Medicine2 &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Price:	&#8377;56  &nbsp;&nbsp; &nbsp;&nbsp; &nbsp; Manufacturer:Ranbaxy",
        P3: "Medicine3 &nbsp;&nbsp;&nbsp;&nbsp;&nbsp; Price:	&#8377;305 &nbsp;&nbsp;&nbsp;&nbsp;&nbsp; Manufacturer: Appolo",
        P4: "Medicine4 &nbsp;&nbsp;&nbsp;&nbsp;&nbsp; Price:	&#8377;123 &nbsp;&nbsp;&nbsp;&nbsp;&nbsp; Manufacturer:Cadillila",
        P5: "Medicine5 &nbsp;&nbsp;&nbsp;&nbsp;&nbsp; Price:	&#8377;96  &nbsp;&nbsp;&nbsp; &nbsp; &nbsp; Manufacturer:Abbot",
    },
];

var render = function(data) {
    var app = document.getElementById("app");
    var booksHTMLString =
        "<ul>" + data.map(function(book) {
            return (
                "<li>" +
                book.P1 +
                "<br/>" +
                book.P2 +
                "<br/>" +
                book.P3 +
                "<br/>" +
                book.P4 +
                "<br/>" +
                book.P5 +
                "<br/>" +
                "</li>"
            );
        })
        .join(""); +
    "</ul>";

    app.innerHTML = booksHTMLString;
};

// is handlesearch se event listen hoga submit buttom ka
var handleSearch = function(event) {
    event.preventDefault();

    // ye searchterm store krega input vale ko
    var searchTerm = event.target.elements["search"].value;

    // Tokenize the search terms and remove empty spaces
    var tokens = searchTerm
        .toLowerCase()
        .split(" ")
        .filter(function(token) {
            return token.trim() !== "";
        });

    if (tokens.length) {
        //  Create a regular expression of all the search terms
        var searchTermRegex = new RegExp(tokens.join("|"), "gim");
        var filteredList = books.filter(function(book) {
            // Create a string of all object values
            var bookString = "";
            for (var key in book) {
                if (book.hasOwnProperty(key) && book[key] !== "") {
                    bookString += book[key].toString().toLowerCase().trim() + " ";
                }
            }
            // Return book objects where a match with the search regex if found
            return bookString.match(searchTermRegex);
        });
        // Render the search results
        render(filteredList);
    }
};

document.addEventListener("submit", handleSearch);
let ll = document.getElementById('app')
document.getElementById('res').addEventListener("click", hidee)


document.getElementById('ser').addEventListener("click", showw);

/*$(document).ready(function() {
    $('.lo').click(function() {
        $('#app').show();
    });
});*/

function showw() {
    let cc = document.getElementById('app')
    cc.style.display = "block"

}

function hidee() {
    let ll = document.getElementById('app')
    ll.style.display = "none"
}