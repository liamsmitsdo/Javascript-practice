//2016
//exponentiation operator
const num = 2**4
console.log(num) //16

//includes
const array = [1,2,3,4]
array.includes(3) //true

//2017
//padStart and padEnd
"awesome".padStart(10, '!') //"!!!awesome"
"awesome".padEnd(10,'!') //"awesome!!!"

//async functions
async function first(){
    return 'We did it'
}

first().then(data=>console.log(data))

//using await
async function getUser(user) {
    try {
        let response = await $.getJSON(`https://api.github.com/users/${user}`)
        console.log(response.name)
    } catch (error) {
        console.log(error)
    }
}

//refactoring to make responses faster
async function getMovieData(first, second) {
    let movieList = await Promise.all([
        $.getJSON(`https://omdbapi.com?t=${first}&apikey=thewdb`),
        $.getJSON(`https://omdbapi.com?t=${second}&apikey=thewdb`)
    ])
    console.log(movieList[0].Year)
    console.log(movieList[1].Year)
}