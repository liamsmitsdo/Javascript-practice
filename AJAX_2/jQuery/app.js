$('#btn').click(function(){
    $.ajax({
        method: 'GET',
        url: 'http://api.github.com/zen'
    })
    .done((data)=>{
        $('p').text(data)
    })
    .fail((e)=>{
        alert(`failed because of ${e.statusText}`)
    })
})

//shorthand ajax functions
$('#get').click(function(){
    $.get('https://api.github.com/users/liamsmitsdo')
    .done(function(data){
        console.log(data)
    })
    .fail(e=>{console.log(e)})
})

$('#post').click(function(){
    let data = {name: 'text', city: 'text2'}
    $.post('www.fakeurl.com', data)
    .done(data => console.log('hi'))
    .fail(e=>console.log(e.statusText))
})

$('#getJson').click(function(){
    $.getJSON('https://api.github.com/users/liamsmitsdo')
    .done(data => console.log(data))
    .fail(e=>console.log(e.statusText))
})