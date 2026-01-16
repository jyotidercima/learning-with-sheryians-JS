// ques1
let a = document.querySelector('#heading');
a.textContent = "Welcome to JavaScript tutorial";

// ques 2
let lis = document.querySelectorAll("li");
lis.forEach(val => {
    console.log(val.textContent);
});
// let out2 = lis.map(FileList => {
//     console.log(FileList.textContent);
// });

for (let i = 0; i < lis.length; i++) {
    console.log(lis[i].textContent);
}

//ques3
let para = document.querySelector('#ques3');
para.innerHTML = "<b>Updated</b> by Javascript";

// ques4
let img = document.querySelector('img');
console.log(img.src);
console.log(img.getAttribute('src'));


img.setAttribute('src', "https://images.unsplash.com/photo-1756877450915-bc2a717f29dd?q=80&w=987&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D");

// 5
let divselect = document.querySelector('.new5');
divselect.title = "this is div containing lorem text";
// OR
divselect.setAttribute = "this title is added through setAttribute!";

// 6
let button = document.querySelector('button');
button.removeAttribute("disabled");

// 7
let ul = document.querySelector('.ques7');
let li = document.createElement('li');
li.textContent = "New Task";
ul.appendChild(li);

// 8
let img2 = document.createElement('img');
let div8 = document.querySelector('.ques8div');
img2.setAttribute('src', "https://imgs.search.brave.com/xY8ksS3Ai6-aEMTwKRioZFbCjs6R6vY3-36v42As0-E/rs:fit:500:0:1:0/g:ce/aHR0cHM6Ly9wbGFj/ZWhvbGQubmV0L2J1/aWxkaW5nLnN2Zw");

img2.classList.add('placeholder');
div8.prepend(img2);

// 9
let ul3 = document.querySelector('.ques9');
let li4 = document.querySelector('li') //will select first element only

// but how to select li of one pertucular ul???
// like this
let li2 = document.querySelector('.ques9 li');
ul3.remove(li2);

// Ques 10

let ten = document.querySelectorAll("ul li:nth-Child(2n)");
console.log(ten);

ten.forEach(function (elmt) {
    elmt.classList.add("highlight");
})

// Ques 11
//  Ques12

let pelement1 = document.querySelectorAll('p');
pelement1.forEach(val => {
    val.style.fontSize = "60px";
})

// 13
let input = document.querySelector('input');

input.addEventListener('input', (val) => {
    if (val.data !== null) {
        console.log(val.data);
    }
})