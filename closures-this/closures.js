//Closures
// A closure is a function that makes use of variables defined in outer functions that have previously returned
//example closure
function outer(a) {
    return function inner(b) { //this inner function is the closure
        return a + b
    }
}
outer(5)(5) //10

//we can use closures to create Private Variables
function counter() {
    const count = 0
    return function(){
        count++
        return count
    }
}

const counter1 = counter()
counter1()//1
counter2()//2

const counter2 = counter()
counter2()//1
counter2()//2

counter1()//3 this is not affected by counter2

count //reference error - becuase it is private