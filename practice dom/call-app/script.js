// variables 

let addnote = document.querySelector("#add-note");
let closeform = document.querySelector(".closeForm");
let formContainer = document.querySelector(".form-container");
let form = document.querySelector('form');
// let inputs = document.querySelectorAll('input')
let imgInput = document.querySelector("[name='image-url']");
let usernameInput = document.querySelector("[name='fullname']");
let hometownInput = document.querySelector("[name='hometown']");
let purposeInput = document.querySelector("[name='purpose']");

let categoryRadios = document.querySelectorAll('[name="category"]');
let submitbtn = form.querySelector('.submit-btn');

const stack = document.querySelector('.stack')

const upbtn = document.querySelector('#upbtn');
const downbtn = document.querySelector('#downbtn');

// functions 

function saveToLocalStorage(obj) {
    if (localStorage.getItem("task") === null) {
        let oldtasks = [];
        oldtasks.push(obj);

        localStorage.setItem('task', JSON.stringify(oldtasks));

    } else {
        let oldtasks = localStorage.getItem('task');
        oldtasks = JSON.parse(oldtasks);
        oldtasks.push(obj);

        localStorage.setItem('task', JSON.stringify(oldtasks));
    }
}

function showcards() {
    stack.innerHTML = " ";

    let allTasks = JSON.parse(localStorage.getItem('task'));

    allTasks.forEach(task => {

        const card = document.createElement('div');
        card.classList.add("card");

        const image = document.createElement('img');
        image.classList.add("avatar");
        // image.setAttribute("src", task.imgurl);
        image.src = task.imgurl;

        const heading = document.createElement('h2');
        heading.classList.add("username");
        heading.textContent = task.fullname.charAt(0).toUpperCase() + task.fullname.slice(1);

        // hometown info
        const hometownInfo = document.createElement('div');
        hometownInfo.classList.add("hometown-info");

        const homeInfoLabel = document.createElement('label');
        homeInfoLabel.textContent = "Home town";
        const hometownInfospan = document.createElement('span');
        hometownInfospan.textContent = task.hometown;

        // Booking purpose
        const bookingsInfo = document.createElement('div');
        bookingsInfo.classList.add("booking-info");

        const bookingsLabel = document.createElement('label');
        bookingsLabel.textContent = "Purpose";
        const bookingsInfospan = document.createElement('span');
        bookingsInfospan.textContent = task.purpose;

        // buttons
        const btncontainer = document.createElement('div');
        btncontainer.classList.add('card-btn');

        const msgbtn = document.createElement('button');
        const callbtn = document.createElement('button');
        msgbtn.classList.add("msg-btn");
        callbtn.classList.add("call-btn");

        msgbtn.textContent = "Message";
        callbtn.textContent = "Call";

        // now appending elements to its respective div elements and then the main card element.

        btncontainer.appendChild(msgbtn);
        btncontainer.appendChild(callbtn);

        bookingsInfo.appendChild(bookingsLabel);
        bookingsInfo.appendChild(bookingsInfospan);

        hometownInfo.appendChild(homeInfoLabel);
        hometownInfo.appendChild(hometownInfospan);


        card.appendChild(image);
        card.appendChild(heading);
        card.appendChild(hometownInfo);
        card.appendChild(bookingsInfo);
        card.appendChild(btncontainer);

        stack.appendChild(card);
    });
};

// Eventlisteners 

// open form and close form
addnote.addEventListener('click', () => {
    formContainer.style.display = "initial";
    // console.log("working");
});

closeform.addEventListener('click', () => {
    formContainer.style.display = "none";

});

//form submit and validation
form.addEventListener('submit', (e) => {
    e.preventDefault();

    const imgurl = imgInput.value.trim();
    const fullname = usernameInput.value.trim();
    const hometown = hometownInput.value.trim();
    const purpose = purposeInput.value.trim();

    let selected = false;

    // category selected
    categoryRadios.forEach(cat => {
        if (cat.checked) {
            selected = cat.value;
            // console.log(selected);
        }
    });
    if (!selected) {
        alert("please select a category.");
        return;
    }


    // used regex(regular expression) to check if the input is a url for img or not.

    let regexUrl = /https?:\/\/[^\s"']+\.(?:jpg|jpeg|png|gif|bmp|webp|svg)(?:\?[^\s"']*)?/;
    let ansurl = regexUrl.test(imgInput.value);

    // console.log(ansurl);
    if (!ansurl) {
        alert("Please enter proper url")
        imgInput.style.border = "2px solid red";
        return;
    }
    else {
        imgInput.style.border = "none";
    }

    // other input checks

    if (fullname === " ") {
        alert("Please enter your full name");
        return;
    }
    if (hometown === " ") {
        alert("Please enter hometown");
        return;

    }
    if (purpose === " ") {
        alert("Please enter purpose");
        return;
    }

    // calling function to save recieved details in the local storage
    saveToLocalStorage({ imgurl, fullname, purpose, hometown, selected });
    console.log(localStorage.getItem('task'));

    form.reset();

    formContainer.style.display = "none";

    showcards();
});

upbtn.addEventListener('click', () => {
    let firstCard = stack.firstElementChild;
    if (firstCard) {
        stack.lastElementChild.after(firstCard);
    }
})
downbtn.addEventListener('click', () => {
    let lastCard = stack.lastElementChild;
    if (lastCard) {
        stack.firstElementChild.before(lastCard);
    }
})

showcards();