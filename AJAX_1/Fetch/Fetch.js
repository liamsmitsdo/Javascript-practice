const url = 'blahblah'

//fetch basic layout
fetch(url)
.then((data)=>{
    console.log(data)
})
.catch((e)=>{
    console.log(e)
})

//can return json data
fetch(url)
.then((res)=>{
    return res.json().then((data)=>console.log(data))
})

//fetch options
fetch(url, {
    method: "POST",
    body: JSON.stringify({
        name: 'string',
        login: 'stringaswell'
    })
})
.then((res)=>{
    return res.json().then(data=>console.log(data))
})

//handling errors
fetch(url)
.then((res)=>{
    if(!res.ok){
        throw Error('custom error')
    }
    console.log('everything is fine')
})
.catch((e)=>{
    console.log(e)
})