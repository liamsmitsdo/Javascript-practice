var url = 'https://ron-swanson-quotes.herokuapp.com/v2/quotes';
const quote = document.querySelector('#quote')

//xhr method
const xhrBtn = document.querySelector('#xhr')
const xhr = new XMLHttpRequest()

xhrBtn.addEventListener('click', function(){
    xhr.onreadystatechange = function(){
        if(xhr.readyState == 4 && xhr.status == 200) {
            var quote = JSON.parse(xhr.responseText)
            quote.innerText = quote
        }
    }
    
    xhr.open('GET',url)
    xhr.send()
})

//fetch method
const fetchBtn = document.querySelector('#fetch')

fetchBtn.addEventListener('click', function(){
    fetch(url)
    .then(function(res) {
    return res.json().then(function(data){
        quote.innerText = data[0]
    })
})
})

//jquery method
$('#jquery').click(function(){
    $.getJSON(url)
    .done(function(data){
        quote.innerText = data[0]
    })
})

//axios
const axiosBtn = document.querySelector('#axios')
axiosBtn.addEventListener('click', function(){
    axios.get(url)
    .then(function(data){
    quote.innerText = data.data[0]
})
})
