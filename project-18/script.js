const resQr = document.querySelector('.result__qr img')
const generateButton = document.querySelector('#generate__btn');
const inputText = document.querySelector('#generator__form input')
const resCont = document.querySelector('.result__qr');
generateButton.addEventListener('click',(e)=>{
    e.preventDefault();
    resQr.setAttribute('src', '');
    resCont.classList.remove('show_result_qr')
    let str = inputText.value;
    str=str.split(" ").join("");
    if(str){
        
        resQr.setAttribute('src', `http://api.qrserver.com/v1/create-qr-code/?size=100x100&data=${str}`);
            setTimeout(()=>{
                resCont.classList.add('show__result__qr');
            },500)
    }
    else{
        window.alert('Please provide any text or url')
    }
});
