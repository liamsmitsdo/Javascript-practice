//my Solution

// function countDown(seconds) {
//     let intervalId = setInterval(function(){
//         for (let i = seconds; i !== 0; i--) {
//             console.log(`Timer: ${i}`)
//         }
//             clearInterval(intervalId)
//             console.log('Ring Ring Ring!!!')
//     },1000)
// }

//Exercise solution
function countDown(seconds){
    let intervalId = setInterval(function(){
        seconds--
        if(seconds>0){
            console.log('Timer:',seconds)
        } else {
            clearInterval(intervalId)
            console.log('Ring Ring Ring!!!')
        }
    }, 1000)
}

countDown(5)