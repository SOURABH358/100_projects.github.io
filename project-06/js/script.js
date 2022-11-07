$(document).ready(function(){
    $.get('https://api.adviceslip.com/advice').then(response=>JSON.parse(response))
    .then(data=>{
        $('#advice').text(data.slip.advice);
        $('.advice-id').text('#'+data.slip.id);
    });
    if(innerWidth>=600){
        $('.divider img').attr('src','./images/pattern-divider-desktop.svg')
    }
    else{
        $('.divider').attr('src','./images/pattern-divider-mobile.svg')
    }
})