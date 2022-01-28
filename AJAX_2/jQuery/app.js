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


