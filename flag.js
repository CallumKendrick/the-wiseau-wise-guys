var flag = function(data)
{
    var blockedWords = data.blockedWords;
    var text = blockedWords.join(" ");
    $("body").text(text)
    
}

var change = function()
{
    $("message_body").each(flag)
    $(this)
    
}

var getWords = function()
{
    chrome.storage.sync.get("blockedWords", flag);
}
$(getWords)