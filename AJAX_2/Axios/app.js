const url = 'https://api.github.com/zen'

axios.get(url)
.then((res) =>{
    console.log(res.data)
})
.catch(handleErrors)

//error handling
function handleErrors (error) {
    if(error.response) {
        console.log('Problem with response '+ error.response.status)
    } else if (err.request) {
        console.log('Problem with request')
    } else {
        console.log('Error '+err.message)
    }
}