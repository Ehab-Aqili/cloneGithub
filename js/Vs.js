let firstPlyer  = document.querySelector(".search__first");
let secondPlyer  = document.querySelector(".search__second");
let clientID = 'aef2531ef068865deccd'
let clientSecret = '81ea3795f8dc4011b1ca78b306fb62dd85c486ca'
let searchInput = "Ehab-Aqili"
var playerOneRepos ;
var playerTwoRepos ;
let btn = document.querySelector(".final__result") 
// const URL = `https://api.github.com/search/users?q=${searchInput}&client_id=${clientID}&client_secret=${clientSecret}`


firstPlyer.addEventListener("keyup", (event)=> {
    let firstPlyerValue = firstPlyer.value
    const URL = `https://api.github.com/search/users?q=${firstPlyerValue}&client_id=${clientID}&client_secret=${clientSecret}`
    if (event.keyCode == 13) {
        event.preventDefault();  
    fetch(URL)
    .then((response) => response.json())
    .then((data) => {
      let profileInfoOne = data.items[0].url;
      fetch(profileInfoOne)
    .then((response) => response.json())
    .then((data) => {
    let infoUserOne = document.querySelector(".profile__container__user1")
    playerOneRepos = data.public_repos;
    infoUserOne.innerHTML = `
    <img src="${data.avatar_url}" alt="" id="profile__img">
            <h1 id="user1__name">${data.login}</h1>
            <div class="total__repo__user1">
                <h1>Total repositories</h1>
                <p>${playerOneRepos}</p>
            </div>
    `
    })
    })
}
})

secondPlyer.addEventListener("keyup", (event)=> {
    let secondPlyerValue = secondPlyer.value
    const URL2 = `https://api.github.com/search/users?q=${secondPlyerValue}&client_id=${clientID}&client_secret=${clientSecret}`
    if (event.keyCode == 13) {
        event.preventDefault(); 
    fetch(URL2)
    .then((response) => response.json())
    .then((data) => {
      let profileInfo = data.items[0].url;
      fetch(profileInfo)
    .then((response) => response.json())
    .then((data) => {
    playerTwoRepos = data.public_repos; 
    let infoUserTow = document.querySelector(".profile__container__user2")
    infoUserTow.innerHTML = `
    <img src="${data.avatar_url}" alt="" id="profile__img">
            <h1 id="user2__name">${data.login}</h1>
            <div class="total__repo__user2">
                <h1>Total repositories</h1>
                <p>${playerTwoRepos}</p>
            </div>
    `
   
    })
    })
    }
})

btn.addEventListener("click", ()=>{
    let result = document.querySelector(".result");
    if(playerOneRepos > playerTwoRepos){
        result.textContent = "Player One Wins"
    } else if (playerOneRepos < playerTwoRepos){
        result.textContent = "Player Tow Wins"
    } else if(playerOneRepos = playerTwoRepos){
        result.textContent = "Try Again Draw"
    } else if (firstPlyer.value == "" || secondPlyer.value == ""){
        alert("please enter username")
       
    }
    // console.log(playerOneRepos);
    // console.log(playerTwoRepos);
})