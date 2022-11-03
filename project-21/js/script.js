const menu = document.getElementById('menu')
const close = document.getElementById('close')

menu.addEventListener('click',()=>{
    document.body.classList.add('show')
})
close.addEventListener('click',()=>{
    document.body.classList.remove('show')
})