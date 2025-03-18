let totalSeconds = 10 * 1; // 60 דקות = 3600 שניות
let timerEl = document.getElementById("timer");

function updateTimerDisplay() {
    let minutes = Math.floor(totalSeconds / 60);
    let seconds = totalSeconds % 60;
    timerEl.innerText = `${minutes}:${seconds < 10 ? "0" : ""}${seconds}`;
}

let win = document.getElementById("winner")

function winner(){
    let h = document.getElementById("count-el-h")
    let g = document.getElementById("count-el-g")

    if (h>g) {
        win.innerText = "Home Team Won!"
    } else {
        win.innerText = "Guest Team Won!"
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

updateTimerDisplay(); // כדי להציג את השעה ההתחלתית לפני תחילת הספירה
startCountdown();