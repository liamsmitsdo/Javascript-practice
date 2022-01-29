const url = 'https://api.github.com/zen'

axios.get(url)
.then((res) =>{
    console.log(res.data)
})
.catch((err) =>{
    console.log(err)
})