var quotes = [
    "I am fed up with this world!",
    "You are tearing me apart, lisa!",
    "What drugs, Denny?!",
    "I cannot tell you, it's confidential. Anyway, how is your sex life?",
    "Don't touch me motherchuffer!",
    "Oh hi, Doggy",
    "Oh hi, Mark",
    "Everybody betray me. I don't have a friend in the world",
    "AAAAAAGHHRR, Why, Lisa, Why?! WHY?!",
    "Hey everybody! I have an announcement to make! We're expecting!",
    "Anything for my princess!",
    "Oh, Hi Johnny. I didn't know it was you",
    "[throws water bottle]",
    "You think girls like to cheat like guys do?",
    "I'm so happy I have you as my best friend. And I love Lisa so much",
    "You betrayed me! You're not good. You- you're just a chicken. Chip-chip-chip-chip-cheep-cheep",
    "Do you want me to order a pizza",
    "Everything goes wrong all at once. Nobody wants to help me. And I'm dying."
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
