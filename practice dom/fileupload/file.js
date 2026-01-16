let btn = document.querySelector('#btn');
let fileinp = document.querySelector('#fileinp');

btn.addEventListener('click', () => {
    fileinp.click();
})
fileinp.addEventListener('change', (e) => {
    // console.log(e.target.files[0].name);
    // btn.textContent = e.target.files[0].name;
    // Optional chaining for this ?.files[0].name

    const file = e.target.files[0];
    if (file) {
        btn.textContent = file.name;
    }
})