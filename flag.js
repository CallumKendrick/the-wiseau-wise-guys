var quotes = [
    "I am fed up with this world",
    "You are tearing me apart, lisa",
    "What drugs, Denny?!",
    "I cannot tell you, it's confidential. Anyway, how is your sex life?"
]
var currentQuote = 0;

var getQuote = function() {
    if(currentQuote == quotes.length-1) {
        currentQuote = 0;
    }
    else {
        ++currentQuote;
    }

    return quotes[currentQuote];
}

var flag = function(data)
{
   console.log("changed")
    var blockedWords = data.blockedWords;
    console.log(data);
    $(".message_body").each(function()
    {
        for(var i = 0; i < blockedWords.length; i++)
        {
            console.log($(this));
            var wordToCheckFor = blockedWords[i];
            var wordIsInMessage = $(this).text().toLowerCase().indexOf(wordToCheckFor) != -1
            console.log($(this).text().toLowerCase());

            console.log(wordIsInMessage);

            if(wordIsInMessage)
            {
                $(this).text(getQuote);
                $(this).css("color", "#168e16");
            }
        }
    })
}

var getWords = function()
{
    chrome.storage.sync.get("blockedWords", flag);
}


//$(getWords)
$(function()
{
  console.log("oh hi mark")
    //$("#msgs_div").bind("DOMSubtreeModified", getWords);
    $("#msgs_div").bind("DOMSubtreeModified", getWords);
})
