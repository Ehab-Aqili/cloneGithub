let searchInput =document.querySelector("#search");
const cardsContainer = document.querySelector(
    ".repositories__container"
  );
let btn = document.querySelector(".btn"); 

searchInput.addEventListener("keyup", function(event) {
    if (event.keyCode == 13) {
        event.preventDefault();    
    let searchInputValue = searchInput.value
  fetch(`https://api.github.com/users/${searchInputValue}/repos`)
    .then((response) => response.json())
    .then((repos) => {
        cardsContainer.innerHTML = "";
      for (let i = 0; i <= 5; i++) {
        cardsContainer.innerHTML += `
                    <div class="repo__item"> <div>
                    <h5 class="repo__name">${repos[i].name}</h5>
                    <h5 class="if__public">Public</h5>
                    </div>
                    <h5 class="language">${repos[i].language}</h5>
                    </div>
                    `;
      }

    })
    .catch((error) => console.log(error));
    }
})

searchInput.onkeydown = function(event) {
    if (event.keyCode == 13) {
      event.preventDefault(); 
      let searchInputValue = searchInput.value
      fetch(`https://api.github.com/users/${searchInputValue}`)
        .then((response) => response.json())
        .then((profile) => {
            let imgContainer = document.querySelector(".profile__container")
            imgContainer. innerHTML =`
            <img src="${profile.avatar_url}" alt="" id="profile__img">
                <h1 id="user__name">${profile.login}</h1>
                <button id="edit__profile__btn">Edit Profile</button>
                <div id="follower__following"><a href=""><img src="img/add-user-svgrepo-com.svg" alt=""><span>${profile.followers} </span>  Followers</a> <a
                        href="">. <span>${profile.following} </span> Following </a> </div>
            `
        //   console.log(profile);
        })
        .catch((error) => console.log(error));
    }
  };

//   replace mode btn code start here....>
let modeBtn = document.querySelector(".light__btn");
let modeForBody = document.body;
// let modeForHeader = document.querySelector(".container");
// let modeForNavBar = document.querySelector(".nav__bar>*");
//  modeForHeader.classList.toggle("body__light");
//     modeForNavBar.classList.toggle("body__light");



modeBtn.addEventListener("click", ()=>{
    modeForBody.classList.toggle("light-mode");
   
})




