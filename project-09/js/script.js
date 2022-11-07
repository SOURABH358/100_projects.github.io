const features = document.querySelector('#features')
const careers = document.querySelector('#careers')
const Close = document.querySelector('.close');
const navbar = document.querySelector('.navbar')
const hamburger = document.querySelector('.hamburger')
const overlay = document.querySelector('.overlay')

document.querySelector('.features-arrow-down').addEventListener('click',()=>{
    features.className = 'show';
    console.log(features.classList)
});
document.querySelector('.features-arrow-up').addEventListener('click',()=>{
    features.className = 'features';
});

document.querySelector('.careers-arrow-down').addEventListener('click',()=>{
    careers.className = 'show';
});
document.querySelector('.careers-arrow-up').addEventListener('click',()=>{
    careers.className = 'careers';
});

Close.addEventListener('click',()=>{
    navbar.classList.remove('slide')
    overlay.classList.remove('show-overlay')
})
hamburger.addEventListener('click',()=>{
    navbar.classList.add('slide')
    overlay.classList.add('show-overlay')
})