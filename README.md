# random-text
gives a random quote with appropriate author to the quote
```
//show a random quote when opened/refreshed
$(document).ready(function () {
    var n = Math.floor(Math.random() * randomQuote.length);

    $("#text p").html('"' + randomQuote[n] + '"');
    $("#author p").html('- ' + randomAuthor[n]);
});
```
