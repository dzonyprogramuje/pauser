// Query Selectors
let timerEl = document.querySelector("#timer");
let startEl = document.querySelector('#start');
let valueEl = document.querySelector('#value');

// Global variables
let time = 0;

// Functions

// Decrement and showing the time
const countDown = function(){
    let minutes = Math.floor(time / 60);
    let seconds = time % 60;

    if(seconds<10) seconds = "0" + seconds;
    if(minutes<10) minutes = "0" + minutes;
    timerEl.innerHTML = `${minutes}:${seconds}`;
    time--;
}

// Starting the interval after click
start.addEventListener('click', ()=>{
    start.classList.add("disabled");
    time = valueEl.value*60;
    let interval = setInterval(()=>{
        if(time < 1){
            clearInterval(interval);
            timerEl.innerHTML = "Ende";
            start.classList.remove("disabled");
        }
        countDown();
    }, 1000);
})