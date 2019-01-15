var timerId;
var msec = 0;
var sec = 0;
var min = 0;
var hours = 0;
var txtMsec = '000';
var txtSec = '00';
var txtMin = '00';
var txtHours = '00';
var txt = txtHours + ':' + txtMin + ':' + txtSec + '.' + txtMsec;

var form = document.getElementsByTagName ('form');
var span = document.getElementById ('set_timer');
	span.innerHTML = txt;
var start = document.getElementById ('btn_start');
	start.addEventListener ('click', startUp);
var pause = document.getElementById ('btn_pause');
	pause.addEventListener ('click', pauseUp);
var split = document.getElementById ('btn_split');
	split.removeEventListener ('click', splitUp);
var clear = document.getElementById ('btn_clear');
	clear.addEventListener ('click', clearUp);
var list = document.getElementsByTagName ('ul');
var elementSplit = document.getElementById ('split_element');
var pSplit = document.getElementsByClassName ('split_p');
	pSplit.innerHTML = txt;

function startUp () {
	start.style.display = 'none';
	pause.style.display = 'inline-block';
	msec++;
	if (msec === 1000) {
		sec++;
		msec = 0;
	} else if (sec === 60) {
		min++;
		sec = 0;
		msec = 0;
	} else if (min === 60) {
		min = 0;
		sec = 0;
		msec = 0;
		hours++;
	}
	if (msec < 10) {
		txtMsec = '00' + msec;
	} else if (msec >= 10 && msec < 100) {
		txtMsec = '0' + msec;
	} else if (msec >=100) {
		txtMsec = msec;
	}
	if (sec < 10) {
		txtSec = '0' + sec;
	} else if (sec >= 10) {
		txtSec = sec;
	}
	if (min < 10) {
		txtMin = '0' + min;
	} else if (min >= 10) {
		txtMin = min;
	}
	if (hours < 10) {
		txtHours = '0' + hours;
	} else if (hours >= 10) {
		txtHours = hours;
	}
	txt = txtHours + ':' + txtMin + ':' + txtSec + '.' + txtMsec;
	span = document.getElementById ('set_timer');
	span.innerHTML = txt;
	timerId = setTimeout (startUp, 1);
	split.addEventListener ('click', splitUp);
}
	
function clearUp() {
	start.style.display = 'inline-block';
	pause.style.display = 'none';
	clearTimeout (timerId);
	msec = 0;
	sec = 0;
	min = 0;
	hours = 0;
	txtMsec = '000';
	txtSec = '00';
	txtMin = '00';
	txtHours = '00';
	txt = txtHours + ':' + txtMin + ':' + txtSec + '.' + txtMsec;
	span = document.getElementById ('set_timer');
	span.innerHTML = txt;
	var elementSplit = document.getElementById ('split_element');
	elementSplit.style.display = 'block';
	elementSplit.innerHTML = '';
	split.removeEventListener ('click', splitUp);
}

function pauseUp () {
	start.style.display = 'inline-block';
	pause.style.display = 'none';
	clearInterval (timerId);
var pSplit = document.createElement ('p');
	pSplit.style.display = 'block';
	pSplit.innerHTML = txt;
	txt = txtHours + ':' + txtMin + ':' + txtSec + '.' + txtMsec;
	var elementSplit = document.getElementById ('split_element');
	elementSplit.appendChild(pSplit);
	split.removeEventListener ('click', splitUp);
}

function splitUp () {
var pSplit = document.createElement ('p');
	pSplit.style.display = 'block';
	pSplit.innerHTML = txt;
	txt = txtHours + ':' + txtMin + ':' + txtSec + '.' + txtMsec;
	var elementSplit = document.getElementById ('split_element');
	elementSplit.appendChild(pSplit);
}