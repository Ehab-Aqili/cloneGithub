let clientID = 'aef2531ef068865deccd'
let clientSecret = '81ea3795f8dc4011b1ca78b306fb62dd85c486ca'
let searchInput = "Ehab-Aqili"
const URL = `https://api.github.com/search/users?q=${searchInput}&client_id=${clientID}&client_secret=${clientSecret}`

fetch(`https://api.github.com/search/users?q=${searchInput}&client_id=${clientID}&client_secret=${clientSecret}`)
    .then((response) => response.json())
    .then((repos) => {
        console.log(repos.items[0].url)
    })
    
    // repos.items[0].login