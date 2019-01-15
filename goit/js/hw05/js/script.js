var wrapper = document.createElement ('div');
	wrapper.classList.add ('wrapper');
	wrapper.style.maxWidth = '960px';
	wrapper.style.height = 'auto';
	wrapper.style.marginLeft = 'auto';
	wrapper.style.marginRight = 'auto';
	wrapper.style.paddingBottom = '1000000px';
	wrapper.style.marginBottom = '-1000000px';
	wrapper.style.overflow = 'hidden';
	wrapper.style.backgroundColor = "orange";
	wrapper.style.boxShadow = '0 0 10px 10px black';
var body = document.getElementsByClassName ('body');
	document.body.bgColor = 'green';
	document.body.style.margin = '0';
	document.body.style.padding = '0';
	document.body.style.overflow = 'hidden';
	document.body.appendChild (wrapper);

var timerId;
var msec = 0;
var sec = 0;
var min = 0;
var hours = 0;
var txtMsec = '000';
var txtSec = '00';
var txtMin = '00';
var txtHours = '00';
var txt = txtHours + ':' + txtMin + ':' + txtSec;
var txtMilisec = txtMsec;

var form = document.createElement ('form');
	form.setAttribute ('method', 'post');
	form.setAttribute ('action', '#');
	form.style.paddingTop = '100px';
	document.getElementsByClassName ('wrapper');
	wrapper.appendChild (form);
var span = document.getElementById ('set_timer');
	span.style.color = "black";
	span.style.marginLeft = '200px';
	span.style.fontSize = '150px';
	span.innerHTML = txt;
	document.getElementsByClassName ('form');
	form.insertBefore (span, form.children[0]);
var p = document.getElementById ('set_milisec');
	p.style.color = "black";
	p.style.marginTop = '-10px';
	p.style.marginLeft = '655px';
	p.style.fontSize = '50px';
	p.innerHTML = txtMilisec;
	document.getElementsByClassName ('form');
	form.appendChild (p);
var start = document.getElementById ('btn_start');
	start.style.width = '180px';
	start.style.display = 'inline-block';
	start.style.margin = '100px 0 100px 160px';
	start.style.padding = '10px 30px';
	start.style.fontFamily = 'Tahoma';
	start.style.fontSize = '40px';
	start.style.backgroundColor = "green";
	start.style.border = '3px solid green';
	start.style.boxShadow = '0 0 5px 5px black';
	start.style.borderRadius = '15px';
	start.style.cursor = 'pointer';
	start.addEventListener ('click', startUp);
	document.getElementsByClassName ('form');
	form.appendChild (start);
var pause = document.getElementById ('btn_pause');
	pause.style.display = 'none';
	pause.style.width = '180px';
	pause.style.margin = '100px 0 100px 160px';
	pause.style.padding = '10px 30px';
	pause.style.fontFamily = 'Tahoma';
	pause.style.fontSize = '40px';
	pause.style.backgroundColor = "green";
	pause.style.border = '3px solid green';
	pause.style.boxShadow = '0 0 5px 5px black';
	pause.style.borderRadius = '15px';
	pause.style.cursor = 'pointer';
	pause.addEventListener ('click', pauseUp);
	document.getElementsByClassName ('form');
	form.appendChild (pause);
var clear = document.getElementById ('btn_clear');
	clear.style.width = '180px';
	clear.style.display = 'inline-block';
	clear.style.margin = '100px 0 100px 300px';
	clear.style.padding = '10px 30px';
	clear.style.fontFamily = 'Tahoma';
	clear.style.fontSize = '40px';
	clear.style.backgroundColor = "green";
	clear.style.border = '3px solid green';
	clear.style.boxShadow = '0 0 5px 5px black';
	clear.style.borderRadius = '15px';
	clear.style.cursor = 'pointer';
	clear.addEventListener ('click', clearUp);
	document.getElementsByClassName ('form');
	form.appendChild (clear);

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
	txt = txtHours + ':' + txtMin + ':' + txtSec;
	span = document.getElementById ('set_timer');
	span.innerHTML = txt;
	txtMilisec = txtMsec;
	p = document.getElementById ('set_milisec');
	p.innerHTML = txtMilisec;
	timerId = setTimeout (startUp, 1);
}
	
function clearUp() {
	start.style.display = 'inline-block';
	pause.style.display = 'none';
	clearTimeout (timerId);
	console.log ('stop');
	var msec = 0;
	sec = 0;
	min = 0;
	hours = 0;
	txtMsec = '000';
	txtSec = '00';
	txtMin = '00';
	txtHours = '00';
	txt = txtHours + ':' + txtMin + ':' + txtSec;
	span = document.getElementById ('set_timer');
	span.innerHTML = txt;
	txtMilisec = txtMsec;
	p = document.getElementById ('set_milisec');
	p.innerHTML = txtMilisec;
}

function pauseUp () {
	start.style.display = 'inline-block';
	pause.style.display = 'none';
	clearInterval (timerId);
}