const section = document.querySelector('section')

const xbox = document.querySelector('.xbox')
const ps5 = document.querySelector('.ps5')

ps5.addEventListener('mouseenter',()=>{
    
    section.classList.add('ps5-display')
})
ps5.addEventListener('mouseleave',()=>{
    
    section.classList.remove('ps5-display')

})
xbox.addEventListener('mouseenter',()=>{
    section.classList.add('xbox-display')
})
xbox.addEventListener('mouseleave',()=>{
    section.classList.remove('xbox-display')
})
section.classList.remove('ps5-display')
section.classList.remove('xbox-display')
