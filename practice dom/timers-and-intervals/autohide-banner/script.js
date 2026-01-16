// let interval = setTimeout(() => {
//     window.alert("Hello welcome to this alert message demo.")
//     clearTimeout(interval);
// }, 3000);
let alertbanner = document.querySelector('.alert-banner');

setTimeout(() => {
    alertbanner.classList.add("hide-banner");
}, 5000)