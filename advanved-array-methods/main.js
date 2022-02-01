//forEach
//always return undefined
const array = [1,2,3]
array.forEach(function(value, index, array) {
    console.log(value)
})

//map
//always need to return within the callback
const array2 = [2,4,6]
array2.map(function(value, index, array) {
    return value / 1
})

//filter
//result of callback will always be a boolean
//try not to use if statements
const array3 = [1,2,3,4,5]
array3.filter(function(value,index,array) {
    return value%2===0 //only the values that are true will be in the new array
})

//some
//if the callback returns true on at least one value, the entire method returns true
const array4 = ['hello', 'world']
array4.some(function(value,index,array) {
    return value == 'hello'
})

//every
//if any value returns false, the entire method will return false
const array5 = [-1,-2,-3]
array5.every(function(value, index, array) {
    return value > 0
})