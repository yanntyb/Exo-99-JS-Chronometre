let divsecond = document.getElementById("seconds")

// Make it count up on a timer, calling this function
let seconds = document.getElementById("seconds");
let countUp = function() {
    let timer = setTimeout(function(){
        seconds.innerHTML++;
        typeof countUp == 'function' ? countUp() : null;
    },1000)

};

countUp()

// How can you make it stop counting?
let stopCountUp = function() {
    countUp = null;
};
let stopButton = document.getElementById("stop-button");
stopButton.addEventListener("click", stopCountUp);

