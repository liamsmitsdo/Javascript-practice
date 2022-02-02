//the keyword This
//usually determined by how a function is called
//invoked when a function is run

//global context
console.log(this) 

//implicit/object binding
const person = {
    firstName: 'Liam',
    sayHi: function() {
        return 'Hi '+ this.firstName
    },
    determineContext: function() {
        return this === person
    }
}

//explicit binding
//we choose what we want the context of this to be

//call
//the dog object is what this will refer to
const person = {
    firstName: 'Liam',
    sayHi: function() {
        return 'Hi '+ this.firstName
    },
    determineContext: function() {
        return this === person
    },
    dog: {
        sayHello: function(){
            return 'Hello '+ this.firstName
        },
        determineContext: function(){
            return this === person
        }
    }
}
person.dog.sayHello.call(person) //we can use call to set the context of this to person
person.dog.determineContext.call(person)

//apply
function addNumbers(a,b,c,d) {
    return this.firstName + ' just calculated' + (a+b+c+d)
}

const liam = {
    firstName: 'Liam'
}

addNumbers.apply(liam, [1,2,3,4]) //liam just calculated 10

//bind
// parameters work like call, but bind returns a function with the context of 'this' bound already

function addNumbers(a,b,c,d) {
    return this.firstName + ' just calculated' + (a+b+c+d)
}

const liam = {
    firstName: 'Liam'
}

const liamCalc = addNumbers.bind(liam, 1,2,3,4) //function() {}
liamCalc() //liam just calculated 10

const liamCalc = addNumbers.bing(liam,1,2)
liamCalc(3,4) //liam just calculated 10