//class keyword
class Parent {
    constructor(username,age) {
        this.username = username
        this.age = age
    }
    //instance methods
    greet() {
        return `Hello ${this.username}, welcome to the class bud!`
    }
    //class methods
    static isParent(obj){
        return obj.constructor === Parent
    }
}

const liam = new Parent('Liam', 24)
// console.log(liam.greet())

//inheritance
class Child extends Parent {
    constructor(username, age) {
        super(username, age)
    }
}

const joshie = new Child('Joshua', 10)
// console.log(joshie.greet())
