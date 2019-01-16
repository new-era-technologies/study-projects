'use strict';


var dataUrlPage = 'https://api.exchangeratesapi.io/';

var apiRequestLoop = function(input) {
    var promiseArray = [];
    for (var i = 0; i <= input; i++) {
        var dataUrlLoop = dataUrlPage + moment().subtract(i, 'days').format("YYYY-MM-DD");
        promiseArray.push(fetch(dataUrlLoop).then(function(response) {
            return response.json();
        }));
    }
    return Promise.all(promiseArray);
};
apiRequestLoop(13).then(function(response) {
    return addGraph(response);
});


function addGraph(array) {

    // Creating List for exchange rates

    var div = document.createElement('div');
    div.style.width = '1050px';
    div.style.background = 'grey';
    var section = document.getElementById('section');
    section.appendChild(div);
    var list = document.createElement('ul');
    list.style.display = 'flex';
    list.style.listStyleType = 'none';
    list.style.fontSize = '10px';
    div.appendChild(list);
    var item = document.createElement('li');
    item.style.margin = '10px';
    list.appendChild(item);
    var pNull = document.createElement('p');
    item.appendChild(pNull);
    pNull.innerHTML = '/';

    for (var i = 0; i < array.length; i++) {
        var item1 = document.createElement('li');
        item1.style.margin = '10px';
        list.appendChild(item1);
        var pDate = document.createElement('p');
        pDate.style.fontWeight = 'bold';
        item1.appendChild(pDate);
        pDate.innerHTML = array[i].date;
        for (var k in array[i].rates) {
            var pRate = document.createElement('p');
            item1.appendChild(pRate);
            pRate.innerHTML = array[i].rates[k];
        }
    }

    for (var keyCurrency in array[0].rates) {
        var pCurrency = document.createElement('p');
        pCurrency.style.fontWeight = 'bold';
        item.appendChild(pCurrency);
        pCurrency.innerHTML = keyCurrency;
    }


    // Using Google Line Chart

    google.charts.load('current', {'packages':['corechart']});
    google.charts.setOnLoadCallback(drawChart);

    function drawChart() {
        var totalArray = [];
        var firstArrayInTotalArray = ['year'];
        for (var key in array[0].rates) {
            firstArrayInTotalArray.push(key);
        }
        totalArray.push(firstArrayInTotalArray);
        array.forEach(function(element) {
            var dataArray = [];
            dataArray.push(element.date);
            for (var dataKey in element.rates) {
                dataArray.push(element.rates[dataKey]);
            }
            return totalArray.push(dataArray);
        });
        var data = google.visualization.arrayToDataTable(totalArray);
        var options = {
            title: 'Foreign exchange rates for last two weeks. Rates are quoted against the Euro',
            curveType: 'function',
            legend: { position: 'bottom' }
        };
        var chart = new google.visualization.LineChart(document.getElementById('curve_chart'));
        chart.draw(data, options);
    }

}