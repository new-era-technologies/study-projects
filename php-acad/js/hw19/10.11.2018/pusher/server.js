'use strict';


let express = require('express');
let bodyParser = require('body-parser');
let Pusher = require('pusher');

const pusher = new Pusher({
    appId: '704076',
    key: '626614cc39cabfa8b300',
    secret: 'cb37abc91ecfe473301c',
    cluster: 'eu',
    encrypted: true
});

let app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
    extended: false
}));

app.post('/pusher/auth', function(req, res) {
    let socketId = req.body.socket_id;
    let channel = req.body.channel_name;
    let auth = pusher.authenticate(socketId, channel);
    res.send(auth);
});

app.post('/message', function(req, res) {
    let newMessage = {
        name: req.body.name,
        message: req.body.message
    };
    pusher.trigger( 'private-channel', 'client-messages', newMessage);
    res.sendStatus(200);
});

app.get('/',function(req, res){
    res.sendFile('./index.html', {root: __dirname });
});

app.use(express.static(__dirname + '/'));

let port = process.env.PORT || 5000;
app.listen(port);