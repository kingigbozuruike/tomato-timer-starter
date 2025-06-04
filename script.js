const updateTimerDisplay = (min, sec) => {
    const padded_min = String(min).padStart(2, '0')
    const padded_sec = String(sec).padStart(2, '0')
    const timerDisplay = document.getElementById('time-left');
    timerDisplay.textContent = `${padded_min}:${padded_sec}`;
};
const startTimer = (duration) => {
    let timer = duration
    const timerInterval = setInterval(() => {
        if (timer < 0) {
            clearInterval(timerInterval);
            return;
        }
        const min = Math.floor(timer / 60);
        const sec = timer % 60;
        updateTimerDisplay(min, sec);
        timer--;
    }, 1000);
}
startTimer(2000);
