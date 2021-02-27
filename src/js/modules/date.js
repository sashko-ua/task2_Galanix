function date() {
    const timerSelector = document.querySelector('.date');
    setInterval(() => {
        const date = (new Date()).toLocaleDateString();
        const time = (new Date()).toLocaleTimeString();
        timerSelector.innerHTML = `${date} ${time}`;
    }, 1000);
}
export default date;