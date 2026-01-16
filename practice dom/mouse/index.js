let abcd = document.querySelector("#abcd");

abcd.addEventListener('mouseover', () => {
    abcd.style.backgroundColor = 'red';
});

abcd.addEventListener('mouseout', () => {
    abcd.style.backgroundColor = 'blue';
});


window.addEventListener("mousemove", function (e) {
    console.log(e.clientX, e.clientY);
    abcd.style.top = e.clientY + 'px';
    abcd.style.left = e.clientX + 'px';
})
