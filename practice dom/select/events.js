let sel = document.querySelector('select');
let head3 = document.querySelector('#heading')
sel.addEventListener('change', (e) => {
    // console.log(e);
    // console.log(e.target.value);
    head3.textContent = e.target.value + " Selected";
    head3.textContent = `${e.target.value}   Fruit Selected`;
    console.log('done');
});