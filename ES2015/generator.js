//generator functions
//you create a function with an asterisk

function* pauseAndReturnValues(num) {
    for(let i=0; i < num; i++) {
        yield i;
    }
}

const gen = pauseAndReturnValues(5); //this gives us a generator
//we then need to call the next method, to run a single instance of the function
//it returns an object
gen.next() // {value: 0, done: false}
gen.next() // {value: 1, done: false}


//object.assign
const o = {name: "Liam"}
const o2 = o

o2.name = 'Sarah'
o.name //Sarah

const o3 = Object.assign({},o)
o3.name = 'Liam'
o.name //Sarah 

//Array.from
const divs = document.querySelectorAll('div')
const convertedArray = Array.from(divs)