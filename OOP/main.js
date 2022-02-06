//Javascript does not have built in support for OOP
//this section might be outdated
//constructor functions
function House(bedrooms,bathrooms,numSqft) {
    this.bedrooms = bedrooms
    this.bathrooms = bathrooms
    this.numSqft = numSqft
}

const firstHouse = new House(2,2,1000)

function Dog(name, age) {
    this.name = name
    this.age = age
    this.bark = function bark(){
        console.log(`${name} just barked!`)
    }
}

const milano = new Dog('milano', 5)

//multiple constructor functions
//this can help reduce duplication
function Car(make, model, year) {
    this.make = make
    this.model = model
    this.year = year
    this.numWheels = 4
}

function Motorcycle(make,model,year) {
    Car.call(this, make, model, year)  //we use call here so that we dont have to duplicate code
    this.numWheels = 2
}

function Motorcycle() {
    Car.call(this, arguments)  //we can use the arguments keyword instead
    this.numWheels = 2
}


//prototypes
//when a new instance of a constructor is called using the new keyword, the __proto__ property gets added to that instance
//methods can be added to the prototype property and accessed on every instance
function Person(name) {
    this.name = name
    this.sayHi = function(){ //this function will get defined each time, not good
        return 'Hi '+ this.name
    }
}

//refactor
function Person(name) {
    this.name = name
}

Person.prototype.sayHi = function() { //this uses the proto property to store the method, which doesnt need to remake the function each time
    return 'Hi '+ this.name
}

//inheritance