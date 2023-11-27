
var randomQuote = ["quote1", "quote2", "quote3", "quote4", "quote5", "quote6", "quote7", "quote8", "quote9", "quote10"];
var randomAuthor = ["author1", "author2", "author3", "author4", "author5", "author6", "author7", "author8", "author9", "author10",];


//show a random quote when opened/refreshed
$(document).ready(function () {
    var n = Math.floor(Math.random() * randomQuote.length);

    $("#text p").html('"' + randomQuote[n] + '"');
    $("#author p").html('- ' + randomAuthor[n]);
});

//show a random quote when clicked "New Quote"
$("#new-quote").click(function () {
    var n = Math.floor(Math.random() * randomQuote.length);

    $("#text p").html('"' + randomQuote[n] + '"');
    $("#author p").html('- ' + randomAuthor[n]);
});
