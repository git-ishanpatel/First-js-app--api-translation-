var InputTxt = document.querySelector('#input-text');
var BtnTranslate = document.querySelector('.primary-btn');
var Output = document.querySelector('.output');
var serverUrl = "https://api.funtranslations.com/translate/dothraki.json"

function getTranslationUrl(input){
    return serverUrl + "?" + "text=" + input
}
 
function clickHandler() {
    var inputText = InputTxt.value

    fetch(getTranslationUrl(inputText))
        .then(response => response.json())
        .then(json => {
            var translatedText = json.contents.translated;
            Output.innerText = translatedText;

});
};
BtnTranslate.addEventListener("click", clickHandler)
