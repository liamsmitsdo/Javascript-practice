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