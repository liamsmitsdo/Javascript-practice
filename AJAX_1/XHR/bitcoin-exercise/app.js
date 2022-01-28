//https://api.coindesk.com/v1/bpi/currentprice.json .bpi .USD
let btn = document.querySelector('#btn')
let span = document.querySelector('#price')

btn.addEventListener('click', ()=>{
    let XHR = new XMLHttpRequest()
    XHR.onreadystatechange = () =>{
        if(XHR.readyState == 4 && XHR.status == 200) {
            let data = JSON.parse(XHR.responseText).bpi.USD
            span.textContent = `${data.rate} USD`
        }
    }
    XHR.open('GET','https://api.coindesk.com/v1/bpi/currentprice.json')
    XHR.send()
})