//Javascript does not have built in support for OOP

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

