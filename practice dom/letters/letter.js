let heading = document.querySelector('h2');

window.addEventListener('keydown', (e) => {
    // console.log(e);
    // console.log(e.key);
    if (e.key === " ") {
        heading.textContent = "SPC";
    } else {
        heading.textContent = e.key;
    }

    // e.key === null ? heading.textContent = "space" : heading.textContent = e.key;


});