let count = 0;
let sec = 10;
let progress = document.querySelector('.progress-bar');
let percentText = document.querySelector('#percentText');

let interval = setInterval(function () {
    if (count < 100) {
        count++;
        progress.style.width = `${count}%`;
        percentText.textContent = `${count}%`;
    }
    else {
        document.querySelector('h2').textContent = "Download Successfuly";
        clearInterval(interval);
    }
}, (sec * 1000) / 100);