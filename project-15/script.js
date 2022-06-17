let ham = document.getElementById('ham')
let tabs = document.getElementById('tabs')
let Close = document.getElementById('icon-close')

ham.addEventListener('click',()=>{
    tabs.classList.remove('left-full')
    tabs.classList.add('left-0')
})
Close.addEventListener('click',()=>{
    tabs.classList.remove('left-0')
    tabs.classList.add('left-full')
    console.log(tabs.classList)
})