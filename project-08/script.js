const boxes = document.querySelectorAll('.box')

// console.log(typeof boxes)

boxes.forEach(box=>{
    box.addEventListener('click',e =>{
        removeClass();
        e.target.classList.add('big')
    })
})

function removeClass(){
    boxes.forEach(element => {
        element.classList.remove('big')
    });
}