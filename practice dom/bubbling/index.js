let ul = document.querySelector('#abcd');

ul.addEventListener('click', (e) => {
    // console.log(e.target);
    // e.target.style.textDecoration = "line-through";
    // e.target.classList.add('back-change');
    e.target.classList.toggle('back-change');
});