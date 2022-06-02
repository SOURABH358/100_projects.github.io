let arr = [
    {
        title: 'Discover innovative ways to decorate',
       content: 'We provide unmatched quality, comfort, and style for property owners across the country. Our experts combine form and function in bringing your vision to life. Create a room in your own style with our collection and make your property a reflection of you and what you love.',
        'hero-image': '../assets/desktop-image-hero-1.jpg',
        'hero-mobile-image':'../assets/mobile-image-hero-1.jpg'
    },
    {
        title: "We are available all across the globe",
        content: "With stores all over the world, it's easy for you to find furniture for your home or place of business. Locally, we’re in most major cities throughout the country. Find the branch nearest you using our store locator. Any questions? Don't hesitate to contact us today.",
        'hero-image': '../assets/desktop-image-hero-2.jpg',
        'hero-mobile-image':'../assets/mobile-image-hero-2.jpg'
    },
    {
        title: 'Manufactured with the best materials',
        content: 'Our modern furniture store provide a high level of quality. Our company has invested in advanced technology to ensure that every product is made as perfect and as consistent as possible. With three decades of experience in this industry, we understand what customers want for their home and office.',
        'hero-image': '../assets/desktop-image-hero-3.jpg',
        'hero-mobile-image':'../assets/mobile-image-hero-3.jpg'
    }
];
let index = 0;

let ArrowLeft = document.getElementById('arrow-left')
let ArrowRight = document.getElementById('arrow-right')
let hamburger = document.querySelector('.hamburger')
let close = document.querySelector('.icon-close')

ArrowLeft.addEventListener('click',()=>{
    if(index>0){
        index--;
        document.querySelector('.hero-title').innerText = arr[index].title;
        document.querySelector('.hero-content').innerText = arr[index].content;
        if(innerWidth>500){
        document.querySelector('.hero-image-section').style.background = `url(${arr[index]["hero-image"]})`

        }
        else{
            document.querySelector('.hero-image-section').style.background = `url(${arr[index]["hero-mobile-image"]})`

        }
        document.querySelector('.hero-image-section').style.backgroundSize = '100% 100%'
    }
})
ArrowRight.addEventListener('click',()=>{
    if(index<2){
        index++;
        document.querySelector('.hero-title').innerText = arr[index].title;
        document.querySelector('.hero-content').innerText = arr[index].content;
        if(innerWidth>500){
        document.querySelector('.hero-image-section').style.background = `url(${arr[index]["hero-image"]})`

        }
        else{
            document.querySelector('.hero-image-section').style.background = `url(${arr[index]["hero-mobile-image"]})`

        }
        document.querySelector('.hero-image-section').style.backgroundSize = '100% 100%'
    }
})
hamburger.addEventListener('click',()=>{
    document.querySelector('.navigation').style.left = "0";
})
close.addEventListener('click',()=>{
    document.querySelector('.navigation').style.left = "-110%";
})