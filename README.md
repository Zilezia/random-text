# random-text
gives a random quote with appropriate author to the quote

the js <br >
gets text when opened/refreshed
```
$(document).ready(function () {
    var n = Math.floor(Math.random() * randomQuote.length);

    $("#text p").html('"' + randomQuote[n] + '"');
    $("#author p").html('- ' + randomAuthor[n]);
});
```

gets text when pressed button
```
$("#new-quote").click(function () {
    var n = Math.floor(Math.random() * randomQuote.length);

    $("#text p").html('"' + randomQuote[n] + '"');
    $("#author p").html('- ' + randomAuthor[n]);
});
```
