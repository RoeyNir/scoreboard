let totalSeconds = 10 * 1; 
let timerEl = document.getElementById("timer");

function updateTimerDisplay() {
    let minutes = Math.floor(totalSeconds / 60);
    let seconds = totalSeconds % 60;
    timerEl.innerText = `${minutes}:${seconds < 10 ? "0" : ""}${seconds}`;
}

let win = document.getElementById("winner")

function winner(){
    let h = parseInt(document.getElementById("count-el-h").innerText)
    let g = parseInt(document.getElementById("count-el-g").innerText)

    if (h > g) {
        win.innerText = "Home Team Won!";
    } else if (g > h) {
        win.innerText = "Guest Team Won!";
    } else {
        win.innerText = "It's a Tie!";
    }
}

function startCountdown() {
    let countdown = setInterval(() => {
        if (totalSeconds > 0) {
            totalSeconds--;
            updateTimerDisplay();
        } else {
            clearInterval(countdown);
            timerEl.innerText = "Time's up!";
            winner()
        }
    }, 1000);
}

updateTimerDisplay(); 
startCountdown();
