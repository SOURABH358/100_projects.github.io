let str = 'HelloWorld';
const resQr = document.querySelector('#result__qr img')
function getQR(){
    resQr.src = `http://api.qrserver.com/v1/create-qr-code/?data=${str}!&size=100x100`
}
getQR();