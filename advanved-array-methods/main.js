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
