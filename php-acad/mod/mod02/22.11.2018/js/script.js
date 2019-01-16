'use strict';


window.onload = () => {
    hideTabContent(1);
};
let tabsControlItem = document.querySelectorAll('.tabs__control__item');
let tabsContentItem = document.querySelectorAll('.tabs__content__item');
let tabsControlLink = document.getElementsByClassName('tabs__control__item__link');
let preloader = document.getElementsByClassName('preloader');
let mainHist = document.getElementById('main_hist');
let mainLate = document.getElementById('main_late');

//tabs

for (let i = 0; i < tabsControlItem.length; i++) {
    tabsControlItem[i].addEventListener('click', (e) => {
        if (e.currentTarget) {
            showTabContent(i);
        }
    });
}
let hideTabContent = (x) => {
    for (let i = x; i < tabsContentItem.length; i++) {
        tabsControlItem[i].classList.remove('active');
        tabsControlLink[i].classList.remove('active');
        tabsContentItem[i].classList.add('hide');
        tabsContentItem[i].classList.remove('show');
    }
};
let showTabContent = (j) => {
    if (tabsContentItem[j].classList.contains('hide')) {
        hideTabContent(0);
        tabsControlItem[j].classList.add('active');
        tabsControlLink[j].classList.add('active');
        tabsContentItem[j].classList.remove('hide');
        tabsContentItem[j].classList.add('show');
    }
};

//вкладка калькулятор

let calcInpFirst = document.getElementById('calc_inp_first');
let calcInpSecond = document.getElementById('calc_inp_second');
let calcSelFirst = document.getElementById('calc_sel_first');
let calcSelSecond = document.getElementById('calc_sel_second');
let calcRadFirst = document.getElementById('calc_cur_rate');
let calcRadSecond = document.getElementById('calc_hist_rate');
let calcDate = document.getElementById('calc_date');

calcInpFirst.addEventListener('keydown', function (event) {
    if ((!/[0-9]/.test(event.key) && !(event.keyCode === 190) && !(event.keyCode === 9) && !(event.keyCode === 8) && !(event.ctrlKey && (event.keyCode === 86)))) {
        event.returnValue = false;
    }
});

calcSelFirst.addEventListener('change', () => {
    if (calcSelFirst.selectedIndex === 0) {
        calcSelSecond.selectedIndex = 0;
    } else if (calcSelFirst.selectedIndex === 1) {
        calcSelSecond.selectedIndex = 1;
    }
});
calcSelSecond.addEventListener('change', () => {
    if (calcSelSecond.selectedIndex === 0) {
        calcSelFirst.selectedIndex = 0;
    } else if (calcSelSecond.selectedIndex === 1) {
        calcSelFirst.selectedIndex = 1;
    }
});
calcRadFirst.addEventListener('change', () => {
    if (calcRadFirst.checked) {
        calcDate.style.display = 'none';
    } else {
        calcDate.style.display = 'block';
    }
});
calcRadSecond.addEventListener('change', () => {
    if (calcRadSecond.checked) {
        calcDate.style.display = 'block';
    } else {
        calcDate.style.display = 'none';
    }
});

let checkCalc = document.getElementById('check_calc');
checkCalc.addEventListener('click', () => {
    preloaderOn();
    if (calcRadFirst.checked) {
        if (calcSelFirst.selectedIndex === 0) {
            let name = 'calc_rates_eur' + calcInpFirst.value;
            if (localStorage.getItem(name)) {
                let info = JSON.parse(localStorage.getItem(name));
                textCalcEur(info);
            } else {
                try {
                    fetch(dataUrlLate)
                        .then((response) => response.json())
                        .then((response) => textCalcEur(response));
                } catch (error) {
                    alert(error);
                }
            }
        } else if (calcSelFirst.selectedIndex === 1) {
            let name = 'calc_rates_usd' + calcInpFirst.value;
            if (localStorage.getItem(name)) {
                let info = JSON.parse(localStorage.getItem(name));
                textCalcUsd(info);
            } else {
                try {
                    fetch(dataUrlLate + '?base=USD')
                        .then((response) => response.json())
                        .then((response) => textCalcUsd(response));
                } catch (error) {
                    alert(error);
                }
            }
        }
    } else {
        let day = document.getElementById('calc_hist_date_day').value;
        let month = document.getElementById('calc_hist_date_month').value;
        let year = document.getElementById('calc_hist_date_year').value;
        let date = year + '-' + month + '-' + day;
        if (calcSelFirst.selectedIndex === 0) {
            let name = 'calc_rates_eur' + calcInpFirst.value + document.getElementById('calc_hist_date_day').value + document.getElementById('calc_hist_date_month').value + document.getElementById('calc_hist_date_year').value;
            if (localStorage.getItem(name)) {
                console.log('as')
                let info = JSON.parse(localStorage.getItem(name));
                textCalcEurHist(info);
            } else {
                console.log('qw')
                try {
                    fetch(dataUrlHist + date)
                        .then((response) => {
                            if (response.status === 400) {
                                alert('You enter a non-existent date. Please enter correct date');
                            } else {
                                return response.json();
                            }
                        })
                        .then((response) => textCalcEurHist(response));
                } catch (error) {
                    alert(error);
                }
            }
        } else if (calcSelFirst.selectedIndex === 1) {
            let name = 'calc_rates_usd' + calcInpFirst.value + document.getElementById('calc_hist_date_day').value + document.getElementById('calc_hist_date_month').value + document.getElementById('calc_hist_date_year').value;
            if (localStorage.getItem(name)) {
                let info = JSON.parse(localStorage.getItem(name));
                textCalcUsdHist(info);
            } else {
                try {
                    fetch(dataUrlHist + date + '?base=USD')
                        .then((response) => {
                            if (response.status === 400) {
                                alert('You enter a non-existent date. Please enter correct date');
                            } else {
                                return response.json();
                            }
                        })
                        .then((response) => textCalcUsdHist(response));
                } catch (error) {
                    alert(error);
                }
            }
        }
    }
});

let textCalcEur = (array) => {
    let name = 'calc_rates_eur' + calcInpFirst.value;
    localStorage.setItem(name, JSON.stringify(array));
    preloaderOff();
    calcInpSecond.value = (calcInpFirst.value * array.rates.USD).toFixed(2);
};
let textCalcUsd = (array) => {
    let name = 'calc_rates_usd' + calcInpFirst.value;
    localStorage.setItem(name, JSON.stringify(array));
    preloaderOff();
    calcInpSecond.value = (calcInpFirst.value * array.rates.EUR).toFixed(2);
};
let textCalcEurHist = (array) => {
    let name = 'calc_rates_eur' + calcInpFirst.value + document.getElementById('calc_hist_date_day').value + document.getElementById('calc_hist_date_month').value + document.getElementById('calc_hist_date_year').value;
    localStorage.setItem(name, JSON.stringify(array));
    preloaderOff();
    calcInpSecond.value = (calcInpFirst.value * array.rates.USD).toFixed(2);
};
let textCalcUsdHist = (array) => {
    let name = 'calc_rates_usd' + calcInpFirst.value + document.getElementById('calc_hist_date_day').value + document.getElementById('calc_hist_date_month').value + document.getElementById('calc_hist_date_year').value;
    localStorage.setItem(name, JSON.stringify(array));
    preloaderOff();
    calcInpSecond.value = (calcInpFirst.value * array.rates.EUR).toFixed(2);
};

//вкладка historical rates

let dataUrlHist = 'https://api.exchangeratesapi.io/';
let check = document.getElementById('check_rates_hist');
check.addEventListener('click', () => {
    let day = document.getElementById('hist_date_day').value;
    let month = document.getElementById('hist_date_month').value;
    let year = document.getElementById('hist_date_year').value;
    let date = year + '-' + month + '-' + day;
    preloaderOn();
    if (mainHist.childNodes.length >= 4) {
        mainHist.removeChild(mainHist.childNodes[3] );
    }
    let name = 'hist_rates' + document.getElementById('hist_date_day').value + document.getElementById('hist_date_month').value + document.getElementById('hist_date_year').value;
    if (localStorage.getItem(name)) {
        let info = JSON.parse(localStorage.getItem(name));
        textHist(info);
    } else {
        try {
            fetch(dataUrlHist + date)
                .then((response) => {
                    if (response.status === 400) {
                        alert('You enter a non-existent date. Please enter correct date');
                    } else {
                        return response.json();
                    }
                })
                .then((response) => textHist(response));
        } catch (error) {
            alert(error);
        }
    }
});
let textHist = (array) => {
    let name = 'hist_rates' + document.getElementById('hist_date_day').value + document.getElementById('hist_date_month').value + document.getElementById('hist_date_year').value;
    localStorage.setItem(name, JSON.stringify(array));
    preloaderOff();
    textRates(array, mainHist);
};

//вкладка latest rates

let dataUrlLate = 'https://api.exchangeratesapi.io/latest';
let checkLatest = document.getElementById('check_rates_latest');
checkLatest.addEventListener('click', () => {
    preloaderOn();
    if (mainLate.childNodes.length >= 4) {
        mainLate.removeChild(mainLate.childNodes[3] );
    }
    if (localStorage.latest_rates) {
        let info = JSON.parse(localStorage.getItem('latest_rates'));
        textLate(info);
    } else {
        try {
            fetch(dataUrlLate)
                .then((response) => response.json())
                .then((response) => textLate(response));
        } catch (error) {
            alert(error);
        }
    }
});
let textLate = (array) => {
    localStorage.setItem('latest_rates', JSON.stringify(array));
    preloaderOff();
    textRates(array, mainLate);
};

let preloaderOn = () => {
    for (let i = 0; i < preloader.length; i++) {
        preloader[i].style.display = 'block';
    }
};
let preloaderOff = () => {
    for (let i = 0; i < preloader.length; i++) {
        preloader[i].style.display = 'none';
    }
};

let textRates = (array, x) => {
    let table = document.createElement('table');
    x.appendChild(table);
    for (let i = 0; i < Object.keys(array.rates).length; i++) {
        let tr = document.createElement('tr');
        table.appendChild(tr);
        let tdK = document.createElement('td');
        tdK.innerHTML = Object.keys(array.rates)[i];
        tr.appendChild(tdK);
        let tdV = document.createElement('td');
        tdV.style.color = 'red';
        tdV.innerHTML = Object.values(array.rates)[i];
        tr.appendChild(tdV);
    }
};