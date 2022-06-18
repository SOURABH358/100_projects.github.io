let features = [
    {
        title: 'Bookmark in one click',
        content: 'Organize your bookmarks however you like. Our simple drag-and-drop interface gives you complete control over how you manage your favourite sites.',
        image: './images/illustration-features-tab-1.svg'
    },
    {
        title: 'Intelligent search',
        content: 'Our powerful search feature will help you find saved sites in no time at all. No need to trawl through all of your bookmarks.',
        image: './images/illustration-features-tab-2.svg'
    },
    {
        title: 'Share your bookmarks',
        content: 'Easily share your bookmarks and collections with others. Create a shareable link that you can send at the click of a button.',
        image: './images/illustration-features-tab-3.svg'
    }
]
let ham = document.getElementById('ham')
let tabs = document.getElementById('tabs')
let Close = document.getElementById('icon-close')
let FeatureTab = document.querySelector('#features-tab ul')
let FeaturesTitle = document.getElementById('features-info-title')
let FeaturesContent = document.getElementById('features-info-content')
let FeaturesImage = document.querySelector('#features-info-image img')
let Faq = document.querySelectorAll('#faqs li')

ham.addEventListener('click', () => {
    tabs.classList.remove('left-full')
    tabs.classList.add('left-0')
})
Close.addEventListener('click', () => {
    tabs.classList.remove('left-0')
    tabs.classList.add('left-full')
    console.log(tabs.classList)
})

FeatureTab.addEventListener('click', (e) => {
    FeatureTab.querySelectorAll('li p').forEach(element=>{
        element.classList.add('border-none')
    })
    e.target.classList.remove('border-none')
    FeaturesTitle.innerText = features[e.target.id - 1]['title']
    FeaturesContent.innerText = features[e.target.id - 1]['content']
    FeaturesImage.src = features[e.target.id - 1]['image'];
})
Faq.forEach(element => {
    element.addEventListener('click', (e) => {
        // Faq.forEach((item)=>{
        //     item.querySelector('.answer').classList.add('hidden')
        //     item.querySelector('.arrow-up').classList.remove('hidden')
        //     item.querySelector('.arrow-down').classList.add('hidden')
        // })
        e.currentTarget.querySelector('.answer').classList.toggle('hidden')
        e.currentTarget.querySelector('.arrow-up').classList.toggle('hidden')
        e.currentTarget.querySelector('.arrow-down').classList.toggle('hidden')
    })
});