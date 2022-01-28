$('#btn').click(function(){
    $.get('https://aws.random.cat/meow')
    .done((data)=>{
        $('#photo').attr('src', data.file)
    })
    .fail( e => console.log(e))
})