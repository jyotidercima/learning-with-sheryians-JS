let textEntered = document.querySelector("input");
let spanCharCount = document.querySelector('.charCount');
let spanLeftChar = document.querySelector('.leftChar');

textEntered.addEventListener('input', () => {
    // console.log(textEntered.value.length);
    let count = textEntered.value.length;

    spanCharCount.textContent = count;

    spanLeftChar.textContent = 20 - count;

    (count > 20)
        ? spanLeftChar.style.color = "red"
        : spanLeftChar.style.color = "black";


});