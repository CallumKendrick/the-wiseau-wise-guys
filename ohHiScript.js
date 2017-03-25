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
}

function displayConfig() {

}
