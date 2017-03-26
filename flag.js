var flag = function(data)
{
   console.log("changed")
    var blockedWords = data.blockedWords;
    $(".message_body").each(function()
    {
        for(var i = 0; i < blockedWords.length; i++)
        {
            console.log($(this));
            var wordToCheckFor = blockedWords[i];
            var wordIsInMessage = $(this).text().toLowerCase().indexOf(wordToCheckFor) != 0
            console.log($(this).text().toLowerCase());
            
            console.log(wordIsInMessage);
            
            if(wordIsInMessage)
            {
                console.log("hai")
                //$(this).text("I am sick of this world");
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
    $("#messages_container").
})