let btn = document.querySelector('#btn')
let img = document.querySelector('#photo')

//listen for clicks
btn.addEventListener('click', ()=>{
    //make request
    let XHR = new XMLHttpRequest()

    XHR.onreadystatechange = () =>{
        if(XHR.readyState == 4 && XHR.status == 200) {
            let url = JSON.parse(XHR.responseText).message
            img.src = url
        }
    }

    XHR.open('GET', 'https://dog.ceo/api/breeds/image/random')
    XHR.send()
})