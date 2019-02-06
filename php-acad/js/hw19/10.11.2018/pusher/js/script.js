'use strict';


const loginBox = document.getElementById('login-box');
const chatBox = document.getElementById('chat-box');
const submitLogin = document.getElementById('submit-login');
const submitChat = document.getElementById('submit-chat');
let textLogin = document.getElementById('text-login');
let textChat = document.getElementById('text-chat');
let chatForm = document.getElementById('chat-box-form');
let messagesList = document.getElementById('messages-list');
let messagesTemplate = document.getElementById('messages-template');


const socket = new Pusher('626614cc39cabfa8b300', {
    cluster: 'eu',
    enabledTransports: ['ws'],
    authEndpoint: 'http://localhost:5000/pusher/auth',
    forceTLS: true
});

// Pusher.logToConsole = true;

// socket.connection.bind('connected', () => {
//     console.log('Pusher connected');
// });
//
// socket.connection.bind('disconnected', () => {
//     console.log('Pusher disconnected');
// });

socket.connection.bind( 'error', function( err ) {
    if( err.error.data.code === 4004 ) {
        log('>>> detected limit error');
    }
});

const privateChannel = socket.subscribe('private-channel');

// privateChannel.bind('pusher:subscription_succeeded', () => {
//     console.log('success to subscribe to ' + privateChannel.name);
// });


privateChannel.bind('client-messages', onMessageAdded);

function onMessageAdded(data) {
    let newMessageInner = messagesTemplate.innerHTML.replace('{{name}}', data.name);
        newMessageInner = newMessageInner.replace('{{message}}', data.message);
    let newMessageOuter = document.createElement('div');
        data.name !== textLogin.value ?
            newMessageOuter.classList.add('message-outer')
            : newMessageOuter.classList.add('message-inner');
        newMessageOuter.innerHTML = newMessageInner;
        messagesList.appendChild(newMessageOuter);
    scrollMessage();
}

function scrollMessage() {
    if (messagesList.offsetHeight < messagesList.scrollHeight) {
        messagesList.scrollTop = messagesList.scrollHeight
    }
}

function setUser() {
    // localStorage.clear()
    let userName = textLogin.value;
    localStorage.setItem('user-name', JSON.stringify(userName));
}

let getUser = localStorage.getItem('user-name');
let user = JSON.parse(getUser);
if (user) {
    textLogin.value = user;
}

submitLogin.addEventListener('click', (e) => {
    e.preventDefault();
    textLogin.value === '' ?
        alert('Name required') :
        (loginBox.style.display = 'none') && (chatBox.style.display = 'block');
    setUser();
});

submitChat.addEventListener('click' || e.keyCode === 13, (e) => {
    e.preventDefault();
    let newMessage = {
        "name": textLogin.value,
        "message": textChat.value
    };
    let xhr = new XMLHttpRequest();
    xhr.open("POST", 'http://localhost:5000/message', true);
    xhr.setRequestHeader("Content-Type", "application/json;charset=UTF-8");
    xhr.onreadystatechange = function () {
        if (xhr.readyState !== 4 || xhr.status !== 200) return;
        // console.log("Success: " + xhr.responseText);
        chatForm.reset();
    };
    xhr.send(JSON.stringify(newMessage));
});


function myErrHandler(message, url, line) {
    alert ('Error: ' + message + ' at ' + url + ' on line ' + line);
    return true;
}
window.onerror = myErrHandler;