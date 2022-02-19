const about = document.querySelector('.content-container')
const tab = document.querySelectorAll('.tab')
const content = document.querySelectorAll('.content')
const image = document.querySelectorAll('.image img')

about.addEventListener('click',(e)=>{
    const id = e.target.id;
    if(id){
        tab.forEach(function(item){
            item.classList.remove('active')
        })
        e.target.classList.add('active')
        content.forEach(function(item){
            item.classList.remove('active')
        })
        document.querySelector(`[data-id = ${id}]`).classList.add('active')
        image.forEach((item)=>{
            item.classList.remove('active')
        })
        document.querySelector(`[data-value = ${id}]`).classList.add('active')
    }
})