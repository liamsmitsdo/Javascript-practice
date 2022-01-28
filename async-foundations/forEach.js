var arr = [1,2,3,4,5]

//double function
function double(arr) {
    for(let i =0; i< arr.length;i++) {
        console.log(arr[i]*2)
    }
}

double(arr)

//forEach

function forEach(arr, callback) {
    for (let i=0; i<arr.length;i++) {
        callback(arr[i], i, arr)
    }
}

forEach(arr, function(num, index, array) {
    if (array.length !== index) {
        console.log(num*2)
    } 
})
