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
                console.log("hai")
                $(this).html("I am fed up with this world");
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
