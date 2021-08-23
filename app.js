window.onload = () => {
    let tens = 0;
    let seconds = 0;
    let secondincrease = document.getElementById('seconds');
    let tenincrease = document.getElementById('tens');

    let start = document.getElementById('btn1');
    let stop = document.getElementById('btn2');
    let reset = document.getElementById('btn3');

    let interval;
    start.onclick = () => {
        this.clearInterval(interval);
        interval = setInterval(startwatch, 10);
    }
   
    function startwatch() {
        tens++;
        tenincrease.innerHTML = tens;
        tens < 9 ? tenincrease.innerHTML = "0" + tens : tenincrease.innerHTML = tens;
        if (tens > 99) {
            seconds++;
            secondincrease.innerHTML = "0" + seconds;
            tens = 0;
            tenincrease.innerHTML = "0" + 0;
        }
        if (seconds > 9) {
            secondincrease.innerHTML = seconds;
        }
    }
    stop.onclick =() => {
        clearInterval(interval);
    }
    reset.onclick =() => {
        this.clearInterval(interval);
        tens=0;
        seconds=0;
        secondincrease.innerHTML= "00";
        tenincrease.innerHTML= "00";
    }
}