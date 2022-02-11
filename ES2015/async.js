//promises
function displayAtRandomTime() {
    return new Promise((resolve, reject) => {
        setTimeout(()=>{
            if(Math.random() > .5) {
                resolve('Yes')
            } else {
                reject('No')
            }
        }, 1000)
    })
}

// displayAtRandomTime()
// .then((val) =>{
//     console.log(val)
// })
// .catch((err) =>{
//     console.log(err)
// })


//practice
function getMostFollowers(...args) {
    let baseUrl = 'https://api.github.com/users/'
    let urls = args.map(username => $.getJSON(baseUrl + username))
    return Promise.all(urls).then((data) =>{
        let max = data.sort((a,b)=>a.followers < b.followers)[0]
        return `${max.name} has the most followers with ${max.followers}`
    })
}

function starWarsString(id) {
    let str =''
    return $.getJSON(`https://swapi.co/api/people/${id}/`)
    .then((data) =>{
        str += `${data.name} is featured in`
        let filmData = data.films[0]
        return $.getJSON(filmData)
    }).then((res) =>{
        str += `${res.title}, directed by ${res.director}`
        let planetData = res.planets[0]
        return $.getJSON(planetData)
    }).then((res) =>{
        str += `and it takes place on ${res.name}`
        return str
    }).then(finalString => finalString)
}
