'use strict';


var textInput = document.getElementById('text_input');
var keyInput = document.getElementById('key_input');
var btnCheck = document.getElementById('btn_check');
var initText = document.getElementById('init_text');
var encryptText = document.getElementById('encrypt_text');
var unencryptText = document.getElementById('unencrypt_text');
var alphabet = 'abcdefghijklmnopqrstuvwxyz';
var message, phrase, i, j, k, encryptMessage, unencryptMessage;


textInput.addEventListener('keydown', function (event) {
    if ((!/[a-z]/.test(event.key)) || (event.ctrlKey && (event.keyCode === 86 ))) {
        event.returnValue = false;
    }
});
keyInput.addEventListener('keydown', function (event) {
    if ((!/[a-z]/.test(event.key)) || (event.ctrlKey && (event.keyCode === 86 ))) {
        event.returnValue = false;
    }
});

function fullKey() {
    message = textInput.value;
    phrase = keyInput.value;
    i = 0;
    while (message.length > phrase.length) {
        var phraseChar = phrase.charAt(i);
        i++;
        phrase += phraseChar;
    }
}

function encrypt() {
    var messageSplit = message.split('');
    var phraseSplit = phrase.split('');
    var encryptArray = [];
    for (j = 0; j < message.length; j++) {
        var encryptIndex = (alphabet.indexOf(messageSplit[j]) + alphabet.indexOf(phraseSplit[j]) % alphabet.length);
        if (encryptIndex >= alphabet.length) {
            encryptIndex = (alphabet.indexOf(messageSplit[j]) + alphabet.indexOf(phraseSplit[j]) % alphabet.length) - alphabet.length;
        }
        encryptArray.push(alphabet[encryptIndex]);
    }
    encryptMessage = encryptArray.join('');
}

function decrypt() {
    var encryptMessageSplit = encryptMessage.split('');
    var phrSplit = phrase.split('');
    var unencryptArray = [];
    for (k = 0; k < encryptMessage.length; k++) {
        var unencryptIndex = (alphabet.indexOf(encryptMessageSplit[k]) - alphabet.indexOf(phrSplit[k]) % alphabet.length) + alphabet.length;
        if (unencryptIndex >= alphabet.length) {
            unencryptIndex = (alphabet.indexOf(encryptMessageSplit[k]) - alphabet.indexOf(phrSplit[k]) % alphabet.length);
        }
        unencryptArray.push(alphabet[unencryptIndex]);
    }
    unencryptMessage = unencryptArray.join('');
}

btnCheck.addEventListener('click', function () {
    fullKey();
    encrypt();
    decrypt();
    initText.innerHTML = textInput.value;
    encryptText.innerHTML = encryptMessage;
    unencryptText.innerHTML = unencryptMessage;
});