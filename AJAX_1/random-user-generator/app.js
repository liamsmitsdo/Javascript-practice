//https://randomuser.me/api/

//DOM handling
const btn = document.querySelector('#btn')
const img = document.querySelector('#avatar')
const name = document.querySelector('#fullname')
const username = document.querySelector('#username')
const email = document.querySelector('#email')
const city = document.querySelector('#city')


const url = 'https://randomuser.me/api/'
//event listener
btn.addEventListener('click', ()=>{
    fetch(url)
    .then(handleErrors)
    .then(parseJSON)
    .then(updateProfile)
    .catch((err)=>{
        console.log(err)
    })
})

//functions
function handleErrors (res) {
    if(!res.ok) {
        throw Error(res.status)
    }
    return res
}

function parseJSON (res) {
    return res.json().then((data)=>{
        return data.results[0]
    })
}

function updateProfile (data) {
    let fullName = data.name.first + ' ' + data.name.last
    name.innerText = fullName
    img.src = data.picture.medium
    username.innerText = data.login.username
    email.innerText = data.email
    city.innerText = data.location.city
}