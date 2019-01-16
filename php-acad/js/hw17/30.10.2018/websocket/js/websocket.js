'use strict';


window.WebSocket = window.WebSocket || window.MozWebSocket;
let connection = new WebSocket('wss://ws.coinapi.io/v1/');

connection.onopen = () => {
    console.log('WebSocket is connected');
};
connection.onerror = (error) => {
    alert('WebSocket Error: ' + error);
};
connection.addEventListener('open', () => {
    connection.send(JSON.stringify({
        "type": "hello",
        "apikey": "0801E993-5DB6-48D0-BE2C-A793045F2249",
        "heartbeat": false,
        "subscribe_data_type": ["trade"],
        "subscribe_filter_asset_id": ["BTC"]
    }));
});
connection.onmessage = (event) => {
    try {
        let message = event.data;
        let arrData = JSON.parse(message);
        return draw(arrData);
    } catch (error) {
        alert(error);
    }
};
connection.onclose = () => {
    console.log('Disconnected from WebSocket');
};
let stampId = document.getElementById('bitstamp_id');
let stampPrice = document.getElementById('bitstamp_price');
let stampTime = document.getElementById('bitstamp_time');
let mexId = document.getElementById('bitmex_id');
let mexPrice = document.getElementById('bitmex_price');
let mexTime = document.getElementById('bitmex_time');
let flyerId = document.getElementById('flyer_id');
let flyerPrice = document.getElementById('flyer_price');
let flyerTime = document.getElementById('flyer_time');
let draw = (arg) => {
    if (arg.symbol_id === 'BITSTAMP_SPOT_BTC_USD') {
        stampId.innerHTML = arg.symbol_id;
        stampPrice.innerHTML = arg.price;
        stampTime.innerHTML = arg.time_exchange;
    }
    if (arg.symbol_id === 'BITMEX_SPOT_BTC_USD') {
        mexId.innerHTML = arg.symbol_id;
        mexPrice.innerHTML = arg.price;
        mexTime.innerHTML = arg.time_exchange;
    }
    if (arg.symbol_id === 'BITFLYER_PERP_BTC_JPY') {
        flyerId.innerHTML = arg.symbol_id;
        flyerPrice.innerHTML = arg.price;
        flyerTime.innerHTML = arg.time_exchange;
    }

};