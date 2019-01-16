'use strict';


const myInit = {
    method: 'GET',
    headers: {
        'X-CoinAPI-Key': 'E15B040D-326D-4D55-BEFD-C1EFE2783B37',
        'Accept': 'application/json'
    }
};
const getCoinApi = async () => {
    try {
        await fetch('https://rest.coinapi.io/v1/exchangerate/BTC', myInit)
            .then((response) => response.json())
            .then((response) => text(response));
    } catch (error) {
        alert(error);
    }
};
let text = (array) => {
    let table = document.getElementById('table');
    for (let i = 0; i < array.rates.length; i++) {
        let trTable = document.createElement('tr');
        table.appendChild(trTable);
        let tdTableAsset = document.createElement('td');
        tdTableAsset.innerHTML = array.rates[i].asset_id_quote;
        trTable.appendChild(tdTableAsset);
        let tdTableRate = document.createElement('td');
        tdTableRate.innerHTML = array.rates[i].rate;
        trTable.appendChild(tdTableRate);
        let tdTableTime = document.createElement('td');
        tdTableTime.innerHTML = array.rates[i].time;
        trTable.appendChild(tdTableTime);
    }
};

getCoinApi();