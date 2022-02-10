//class keyword
class Student {
    constructor(username,age) {
        this.username = username
        this.age = age
    }
    //instance methods
    greet() {
        return `Hello ${this.name}, welcome to the class bud`
    }
    //class methods
    static isStudent(obj){
        return obj.constructor === Student
    }
}

const liam = new Student('Liam', 24)