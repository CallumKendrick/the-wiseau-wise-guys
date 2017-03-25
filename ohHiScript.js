$(function() {
    displayConfig();
    $("#save").click(saveConfig);
});

function saveConfig() {
    var wordsToBlock = [];
    var wordsString = $("#filter-words").val();
    wordsString = wordsString.replace(/\W/g, " ");
    wordsString = wordsString.toLowerCase();
    wordsToBlock = wordsString.split(/\s+/);

    chrome.storage.sync.set({
        blockedWords: wordsToBlock
    }, function() {
        console.log("it is done");
    });
}

function displayConfig() {
    var wordsToBlock = chrome.storage.sync.get("blockedWords", function(store) {
        $("#filter-words").val(store.blockedWords.join("\n"));
    });
}
