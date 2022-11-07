const menu = [
    {
      id: 1,
      title: "buttermilk pancakes",
      category: "breakfast",
      price: 15.99,
      img: "./index1_images/item-1.jpeg",
      desc: `I'm baby woke mlkshk wolf bitters live-edge blue bottle, hammock freegan copper mug whatever cold-pressed `,
    },
    {
      id: 2,
      title: "diner double",
      category: "lunch",
      price: 13.99,
      img: "./index1_images/item-2.jpeg",
      desc: `vaporware iPhone mumblecore selvage raw denim slow-carb leggings gochujang helvetica man braid jianbing. Marfa thundercats `,
    },
    {
      id: 3,
      title: "godzilla milkshake",
      category: "shakes",
      price: 6.99,
      img: "./index1_images/item-3.jpeg",
      desc: `ombucha chillwave fanny pack 3 wolf moon street art photo booth before they sold out organic viral.`,
    },
    {
      id: 4,
      title: "country delight",
      category: "breakfast",
      price: 20.99,
      img: "./index1_images/item-4.jpeg",
      desc: `Shabby chic keffiyeh neutra snackwave pork belly shoreditch. Prism austin mlkshk truffaut, `,
    },
    {
      id: 5,
      title: "egg attack",
      category: "lunch",
      price: 22.99,
      img: "./index1_images/item-5.jpeg",
      desc: `franzen vegan pabst bicycle rights kickstarter pinterest meditation farm-to-table 90's pop-up `,
    },
    {
      id: 6,
      title: "oreo dream",
      category: "shakes",
      price: 18.99,
      img: "./index1_images/item-6.jpeg",
      desc: `Portland chicharrones ethical edison bulb, palo santo craft beer chia heirloom iPhone everyday`,
    },
    {
      id: 7,
      title: "bacon overflow",
      category: "breakfast",
      price: 8.99,
      img: "./index1_images/item-7.jpeg",
      desc: `carry jianbing normcore freegan. Viral single-origin coffee live-edge, pork belly cloud bread iceland put a bird `,
    },
    {
      id: 8,
      title: "american classic",
      category: "lunch",
      price: 12.99,
      img: "./index1_images/item-8.jpeg",
      desc: `on it tumblr kickstarter thundercats migas everyday carry squid palo santo leggings. Food truck truffaut  `,
    },
    {
      id: 9,
      title: "quarantine buddy",
      category: "shakes",
      price: 16.99,
      img: "./index1_images/item-9.jpeg",
      desc: `skateboard fam synth authentic semiotics. Live-edge lyft af, edison bulb yuccie crucifix microdosing.`,
    },
    {
      id: 10,
      title: "bison steak",
      category: "dinner",
      price: 22.99,
      img: "./index1_images/item-10.jpeg",
      desc: `skateboard fam synth authentic semiotics. Live-edge lyft af, edison bulb yuccie crucifix microdosing.`,
    },
  ];
// get parent elements
const menuContainer = document.querySelector(".menu")
const buttonContainer = document.querySelector(".button-container")
// display everything when page loads 
window.addEventListener('DOMContentLoaded',()=>{
    displayMenu(menu);
    
});
const filterButtons = document.querySelectorAll('.filter-btn')

filterButtons.forEach((item)=>{
    item.addEventListener('click',(e)=>{
        // console.log(e.currentTarget.dataset.id)
        let newMenu = menu.filter((values)=>{
            if(e.currentTarget.dataset.id==="all")
            return values;
            return values.category==e.currentTarget.dataset.id;
        })
        displayMenu(newMenu)
    })
})

function displayMenu(menuitems){
    let displayItems = menuitems.map(function(item){
        // console.log(item);
        return `<div class = "menu-item">
        <div class = "menu-pic">
         <img src = ${item.img} alt = ${item.title}>
        </div>
        <div class = "menu-info">
         <div>
             <h4 class = "name">${item.title}</h4>
             <p class = "price">$${item.price}</p>
         </div>
         <hr>
         <p class = "description">${item.desc}</p>
        </div>
     </div>`;
    });
    // console.log(displayItems)
    displayItems = displayItems.join("");
    menuContainer.innerHTML = displayItems;
}

    


