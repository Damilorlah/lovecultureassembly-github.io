const hamburger = document.querySelector(".hamburger");
hamburger.addEventListener("click", myFunction);

function myFunction(){
    const navBar = document.querySelector(".nav-bar");
    navBar.classList.toggle("active");
}





/*========MINI MENU JAVASCRIP CODING================*/

const menu = [
    {
        id:1,
        title: "First storey",
        category: "storeybuilding",
        price: 300000.00,
        img: "./images/twostorey1.jpg",
        desc: `Lorem ipsum slester hattol ana opertin
        clay stylish bickle hanajjeand leiud andda amnd
        railtar agantiloe`,
    },
    
    {
        id:2,
        title: "Second storey",
        category: "storeybuilding",
        price: 900000.00,
        img: "./images/twostorey2.jpg",
        desc: `Lorem ipsum slester hattol ana opertin
        clay stylish bickle hanajjeand leiud andda amnd
        railtar agantiloe`,
    },
    {
        id:3,
        title: "Bungalow",
        category: "bungalow",
        price: 520000.00,
        img: "./images/bungalow3.jpg",
        desc: `Lorem ipsum slester hattol ana opertin
        clay stylish bickle hanajjeand leiud andda amnd
        railtar agantiloe`,
    },
    {
        id:4,
        title: "Bungalow",
        category: "bungalow",
        price: 334000.00,
        img: "./images/bungalow2.jpg",
        desc: `Lorem ipsum slester hattol ana opertin
        clay stylish bickle hanajjeand leiud andda amnd
        railtar agantiloe`,
    },
    
    {
        id:5,
        title: "Bungalow",
        category: "bungalow",
        price: 670000.00,
        img: "./images/bungalow3.jpg",
        desc: `Lorem ipsum slester hattol ana opertin
        clay stylish bickle hanajjeand leiud andda amnd
        railtar agantiloe`,
    },
    
    {
        id:6,
        title: "Skyscrapper",
        category: "skyscrapper",
        price: 770000.00,
        img: "./images/scrapper4.jpg",
        desc: `Lorem ipsum slester hattol ana opertin
        clay stylish bickle hanajjeand leiud andda amnd
        railtar agantiloe`,
    },
    
    {
        id:7,
        title: "Skyscrapper",
        category: "skyscrapper",
        price: 440000.00,
        img: "./images/scrapper3.jpg",
        desc: `Lorem ipsum slester hattol ana opertin
        clay stylish bickle hanajjeand leiud andda amnd
        railtar agantiloe`,
    },
    
    {
        id:8,
        title: "Duplex",
        category: "duplex",
        price: 450000.00,
        img: "./images/duplex1.jpg",
        desc: `Lorem ipsum slester hattol ana opertin
        clay stylish bickle hanajjeand leiud andda amnd
        railtar agantiloe`,
    },
    
    {
        id:9,
        title: "Duplex",
        category: "duplex",
        price: 380000.00,
        img: "./images/duplex2.jpg",
        desc: `Lorem ipsum slester hattol ana opertin
        clay stylish bickle hanajjeand leiud andda amnd
        railtar agantiloe`,
    },
    
    {
        id:10,
        title: "Duplex",
        category: "duplex",
        price: 550000.00,
        img: "./images/duplex3.jpg",
        desc: `Lorem ipsum slester hattol ana opertin
        clay stylish bickle hanajjeand leiud andda amnd
        railtar agantiloe`,
    },
    
    {
        id:11,
        title: "Special House",
        category: "modern",
        price: 662000.00,
        img: "./images/modern.jpg",
        desc: `Lorem ipsum slester hattol ana opertin
        clay stylish bickle hanajjeand leiud andda amnd
        railtar agantiloe`,
    },
    ]
    
    const categoriesBox = document.querySelector('.categories_box');
    const Container = document.querySelector('.btn_container');
    
    
    window.addEventListener('DOMContentLoaded', function(){
        displayMenuItems(menu);
        displayMenuItemsButtons();
    
       
    });
    
    
    
    
    function displayMenuItems(menuItems){
        let displayMenu = menuItems.map(function(item){
            return `<article class="box">
            <img src=${item.img} alt=${item.title}>
            <div class="box_info">
                <span>
                    <h4>${item.title}</h4>
                    <h4 class="price">$${item.price}</h4>
                </span>
                <p>${item.desc}
    
                </p>
            </div>
        </article>`;
        });
        displayMenu = displayMenu.join("");
        categoriesBox.innerHTML = displayMenu;
    }
    
    function displayMenuItemsButtons(){
        const categories = menu.reduce(function(values,item){
            if(!values.includes(item.category)){
                values.push(item.category);
            }
            return values;
        },
        ['all']
        );
        const categoryBtns = categories.map(function(category){
            return `<button class="filter-btn" type="button" 
            data-id="${category}">${category}</button>`
        }).join("");
        Container.innerHTML = categoryBtns;
        const filterBtns = document.querySelectorAll('.filter-btn');
    
        filterBtns.forEach(function(btn){
            btn.addEventListener('click', function(e){
                const categoryM = e.currentTarget.dataset.id;
                const menuCategory = menu.filter(function(menuItem){
                    
                    //console.log(menuItem.category);
                    if (menuItem.category === categoryM){
                        return menuItem;
                    }
                   
                });
               // console.log(menuCategory);
               if(categoryM === 'all'){
                displayMenuItems(menu)
               }
               else{
                displayMenuItems(menuCategory)
               }
            });
        });
    }





//For Frequently Asked Questions

function faq(ele)
{
var x = ele.parentElement.nextElementSibling.style.cssText;
if(x=='max-height: 500px;')
{    
ele.style.cssText='transform: rotate(0deg);';     
ele.parentElement.nextElementSibling.style.cssText = "transition:0.3s;max-height:0px;";    
}
else
{
ele.style.cssText='transform: rotate(45deg);';   
ele.parentElement.nextElementSibling.style.cssText = "max-height:500px;";
}
}