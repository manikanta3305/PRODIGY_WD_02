let timer;
let isRunning = false;
let startTime;
let lapCount = 1;

function startStop() {
    if (isRunning) {
        clearInterval(timer);
        document.getElementById("startStop").textContent = "Start";
    } else {
        startTime = Date.now() - (lapCount > 1 ? lapCount - 1 : 0) * 1000;
        timer = setInterval(updateDisplay, 10);
        document.getElementById("startStop").textContent = "Stop";
    }
    isRunning = !isRunning;
}

function reset() {
    clearInterval(timer);
    isRunning = false;
    document.getElementById("display").textContent = "00:00:00";
    document.getElementById("startStop").textContent = "Start";
    document.getElementById("laps").innerHTML = "";
    lapCount = 1;
}

function updateDisplay() {
    const currentTime = Date.now();
    const elapsedTime = new Date(currentTime - startTime);
    const formattedTime = elapsedTime.toISOString().substr(11, 8);
    document.getElementById("display").textContent = formattedTime;
}

function recordLap() {
    if (isRunning) {
        const lapTime = document.getElementById("display").textContent;
        const lapItem = document.createElement("li");
        lapItem.textContent = `Lap ${lapCount}: ${lapTime}`;
        document.getElementById("laps").appendChild(lapItem);
        lapCount++;
    }
}
