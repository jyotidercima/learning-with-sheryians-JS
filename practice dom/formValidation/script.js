let email = document.querySelector('#email');
let password = document.querySelector('#password');
let loginform = document.querySelector('#loginForm');

loginform.addEventListener('submit', (e) => {
    e.preventDefault();

    let emailError = document.querySelector('#emailError');
    let passwordError = document.querySelector('#passwordError');
    emailError.textContent = "";
    passwordError.textContent = "";

    const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    const passwordRegex = /^(?=.*[0-9])(?=.*[a-z])(?=.*[A-Z])(?=.*[@#$%^&+=])(?=\S+$).{8,20}$/;

    console.log(emailRegex)
    console.log(typeof (emailRegex))
    console.log(passwordRegex)


    let emailans = emailRegex.test(email.value);
    let passwordans = passwordRegex.test(password.value);

    console.log(emailans);
    console.log(typeof emailans);

    let resultMsg = true;

    if (!emailans) {
        emailError.textContent = "wrong email";
        emailError.style.display = 'initial';
        resultMsg = false;
    }
    if (!passwordans) {
        passwordError.textContent = "wrong password";
        passwordError.style.display = 'initial';
        resultMsg = false;
    }
    let msg = document.querySelector("#resultMessage");
    msg.style.display = 'initial';
    console.log("resultMsg: ", resultMsg)
    if (resultMsg) {
        msg.textContent = "Everything alright";
    } else {
        msg.textContent = "Something wrong";
    }

});


