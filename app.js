var min = prompt("taken time in minutes");
var sec = 60;
var msec = 100;

var minhead = document.getElementById("min");
var sechead = document.getElementById("sec");
var msechead = document.getElementById("msec");
min = min - 1;

minhead.innerHTML = min;
var btndis = document.getElementById('disabled')
var interval;


function timer() {
    msec--;
    msechead.innerHTML = msec;
    if (msec == 0) {
        sec--;
        sechead.innerHTML = sec;
        msec = 100;

    }else if (sec == 0) {
        min--;
        minhead.innerHTML = min;
        sec = 60;

    } else if (min <= 0) {
        reset();

    }

}


function start() {
    interval = setInterval(timer, 10);
    btndis.disabled = true;
}

function pause() {
    clearInterval(interval);
    btndis.disabled = false;
}

function reset() {
    min = 00;
    sec = 00;
    msec = 00;
    minhead.innerHTML = min;
    sechead.innerHTML = sec;
    msechead.innerHTML = msec;
    clearInterval(interval);
    btndis.disabled = false;
}