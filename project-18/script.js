const resQr = document.querySelector('.result__qr img')
const generateButton = document.querySelector('#generate__btn');
const inputText = document.querySelector('#generator__form input')
generateButton.addEventListener('click',()=>{
    let str = inputText.value;
    str=str.split(" ").join("");
    console.log(str)
    if(str){
    
        document.querySelector('.result__qr').classList.add('show__result__qr');
        resQr.setAttribute('src', `http://api.qrserver.com/v1/create-qr-code/?data=${str}!&size=100x100`);
        console.log(resQr.src)
    }
    else{
        window.alert('Please provide any text or url')
    }
});
