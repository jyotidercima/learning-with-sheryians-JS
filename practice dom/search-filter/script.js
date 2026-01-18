const users = [
  {
    name: "amisha rathore",
    pic: "https://i.pinimg.com/736x/cd/9b/1c/cd9b1cf5b96e8300751f952488d6c002.jpg",
    bio: "silent chaos in a loud world 🌑🖤 | not for everyone",
  },
  {
    name: "amita mehta",
    pic: "https://i.pinimg.com/736x/1f/2f/85/1f2f856bf3a020ed8ee9ecb3306ae074.jpg",
    bio: "main character energy 🎬 | coffee > everything ☕✨",
  },
  {
    name: "isha oberoi",
    pic: "https://i.pinimg.com/736x/23/48/7e/23487ef1268cfe017047a0640318c0d0.jpg",
    bio: "walking through dreams in doc martens 💭🖤 | late night thinker",
  },
  {
    name: "ojin Oklawa",
    pic: "https://i.pinimg.com/736x/01/be/94/01be94b0b5bf03a50b5d6c4bfec78063.jpg",
    bio: "too glam to give a damn 💅 | filter free soul",
  },
  {
    name: "diya bansal",
    pic: "https://i.pinimg.com/736x/74/b0/67/74b067e6c5ece09d99f68c42c5f6754e.jpg",
    bio: "a little chaos, a lot of art 🎨✨ | just vibes",
  },
  {
    name: "tanay rawat",
    pic: "https://i.pinimg.com/736x/9b/78/b9/9b78b95425278ee37e88869b8c5fb2c6.jpg",
    bio: "don’t text, just vibe 🪩 | soft heart, sharp mind",
  },
  {
    name: "mohit chhabra",
    pic: "https://i.pinimg.com/736x/22/8b/cf/228bcf5a0800f813cd1744d4ccbf01ea.jpg",
    bio: "aesthetic overload 📸🕊️ | living in lowercase",
  },


  {
    name: "Aarav Sharma",
    bio: "Frontend developer passionate about clean UI and accessibility.",
    pic: "https://tse1.mm.bing.net/th/id/OIP.v7sZszQu7r_mbYU5wuxNhAHaJQ?pid=ImgDet&w=474&h=592&rs=1&o=7&rm=3"
  },
  {
    name: "Neha Verma",
    bio: "Aspiring full-stack developer learning MERN stack.",
    pic: "https://tse3.mm.bing.net/th/id/OIP.CaXEL_ILh2wKFwV9tpygeQHaLF?pid=ImgDet&w=184&h=276&c=7&dpr=1.3&o=7&rm=3"
  },
  {
    name: "Rohit Singh",
    bio: "JavaScript enthusiast who loves solving real-world problems.",
    pic: "https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?cs=srgb&dl=pexels-pixabay-220453.jpg&fm=jpg1.3&o=7&rm=3"
  },
  {
    name: "Priya Patel",
    bio: "UI/UX focused developer with a love for design systems.",
    pic: "https://www.profilebakery.com/wp-content/uploads/2023/04/AI-Profile-Picture.jpg"
  },
  {
    name: "Kunal Mehta",
    bio: "Backend learner exploring Node.js and databases.",
    pic: "https://tse4.mm.bing.net/th/id/OIP.eJ2Ly-7nJr_ur1BECmL3bQHaLH?rs=1&pid=ImgDetMain&o=7&rm=3"
  },
  {
    name: "Sneha Iyer",
    bio: "Computer science student building projects to learn by doing.",
    pic: "https://tse2.mm.bing.net/th/id/OIP.mToUGXUcxg8pBuBXuKpwAgAAAA?pid=ImgDet&w=184&h=184&c=7&dpr=1.3&o=7&rm=3"
  },
  {
    name: "Aditya Rao",
    bio: "Open source contributor and problem-solving enthusiast.",
    pic: "https://tse2.mm.bing.net/th/id/OIP.X-49NTl_w-9Exd83dkRVaAHaJ1?w=738&h=980&rs=1&pid=ImgDetMain&o=7&rm=3"
  },
  {
    name: "Pooja Nair",
    bio: "Web developer interested in animations and micro-interactions.",
    pic: "https://tse4.mm.bing.net/th/id/OIP.f551-kLrh2WvA9fGIXV6tQHaHa?pid=ImgDet&w=184&h=184&c=7&dpr=1.3&o=7&rm=3"
  },
  {
    name: "Vikram Joshi",
    bio: "Learning React step by step and documenting the journey.",
    pic: "https://tse3.mm.bing.net/th/id/OIP.JxiCeQqJgBeWX1I8riRWiQHaJQ?pid=ImgDet&w=184&h=230&c=7&dpr=1.3&o=7&rm=3"
  },
  {
    name: "Ananya Gupta",
    bio: "Tech learner focusing on JavaScript fundamentals.",
    pic: "https://tse1.mm.bing.net/th/id/OIP.pYTLDLteYKoAoc3o_S20vAHaL2?pid=ImgDet&w=474&h=758&rs=1&o=7&rm=3/ananyagupta"
  },
  {
    name: "Siddharth Kulkarni",
    bio: "Exploring frontend performance and best practices.",
    pic: "https://tse3.mm.bing.net/th/id/OIP.xbimbbCbjuf5t8-9VAPHPAHaLH?pid=ImgDet&w=184&h=276&c=7&dpr=1.3&o=7&rm=3"
  }

];


function showUser(arr) {
  if (arr.length == 0) {
    document.querySelector('.cards').innerHTML = "No User found!";
  }
  else {
    arr.forEach(user => {
      let card = document.createElement('div');
      card.classList.add('card');

      let img = document.createElement('img');
      img.setAttribute("src", user.pic);
      img.classList.add('bg-img');

      let blurredLayer = document.createElement('div');
      blurredLayer.style.backgroundImage = `url(${user.pic})`;
      blurredLayer.classList.add('blurred-layer');

      let content = document.createElement('div');
      content.classList.add('content');

      let title = document.createElement('h3');
      let para = document.createElement('para');
      title.textContent = user.name;
      para.textContent = user.bio;

      content.appendChild(title);
      content.appendChild(para);

      card.appendChild(img);
      card.appendChild(blurredLayer);
      card.appendChild(content);

      document.querySelector('.cards').appendChild(card);

      console.log(user)

    });
  }
};

showUser(users);


let cardsContainer = document.querySelector('.cards');

let inp = document.querySelector('.inp');
inp.addEventListener('input', () => {
  cardsContainer.innerHTML = " ";
  let newUsers = users.filter((user) => {
    return user.name.toLowerCase().startsWith(inp.value.toLowerCase());
  });
  showUser(newUsers);
  // console.log(newUsers);
})