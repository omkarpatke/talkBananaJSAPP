var button = document.querySelector("#button");
var txtInput = document.querySelector("#txt-input");
var outputDiv = document.querySelector("#output");

var serverURL = "https://api.funtranslations.com/translate/minion.json"

function getTranslationURL(text) {
    return serverURL + "?" + "text=" + text
}

button.addEventListener("click", function clickEventHandler() {


    var inputText = txtInput.value;

    fetch(getTranslationURL(inputText))
        .then(responce => responce.json())
        .then(json => {
            var translatedText = json.contents.translated;
            outputDiv.innerText = translatedText;
        })
});