
let bagItems;
onLoad();

function onLoad(){
    let bagItemStr = localStorage.getItem('bagItems');
   bagItems = bagItemStr ? JSON.parse(bagItemStr):[];
    displayBagIcon();
}
function addToBag(itemId){
bagItems.push(itemId);
// bagItems.pop(itemId);
localStorage.setItem('bagItems',JSON.stringify(bagItems));
displayBagIcon();
}
function displayBagIcon(){
    let bagItemCountElement = document.querySelector('.bag-item-count');
    if(bagItems.length >0){
    bagItemCountElement.innerText= bagItems.length;
    bagItemCountElement.style.visibility='visible';
}else{
    bagItemCountElement.style.visibility = 'hidden';
}
}





const categoryname = document.querySelectorAll('.categories-name');
categoryname.forEach(categoryDiv=>{
    categoryDiv.addEventListener('click',()=>{
        categoryname.forEach(div =>{
            div.classList.remove('active-cat');
        });
        categoryDiv.classList.add('active-cat');
         const clickedCategoryName = categoryDiv.innerText;
         const selectedCategory = categories.find(category=> category.name === clickedCategoryName);
         const content_h4 = document.querySelector('.categories-contents h4');
         content_h4.innerText = selectedCategory.name;
          
         const categoryContentDiv = document.querySelector('.categories-content');
         let innerHTML ='';
        
         selectedCategory.items.forEach(item =>{
            innerHTML += `
         <div class='item'>
         <div class="img" style="background-image: url('${item.imgSrc}');"></div>
                <div class="price">
                    <h3><sup>₹</sup>${item.price}</h3>
                    <p>ONWARDS</p>
                </div>
                <h4>${item.type}</h4>
                </div>`;
         });
         categoryContentDiv.innerHTML= innerHTML;
    });
});

const activeCategory = document.querySelector('.categories-name.active-cat');
if (activeCategory) {
    activeCategory.click();
} else {
    // If there's no active category, click on the first category by default
    const firstCategory = document.querySelector('.categories-name');
    if (firstCategory) {
        firstCategory.click();
    }
}

function generateBlocks() {
    homepageBlockSection.forEach(category => {
        const container = document.querySelector(category.selector);
        if (container) {
            let innerHTML = '';
            category.trends.forEach(item => {
                innerHTML += `
                    <a href="#${item.targetData}">
                    <div class='block-item'  style="background-image: url('${item.imgSrc}');">
                        <h2>${item.categoryName}</h2>
                    </div></a>
                `;
            });
            container.innerHTML = innerHTML;
        }
    });
}
document.addEventListener('DOMContentLoaded', generateBlocks);

// Mens-clothes  sections
function clothesSection() {
   
    clothesSectionData.forEach(category => {
       
        const container = document.querySelector(category.selector);
        if (container) {
            let innerHTML1 = '';
            category.type.forEach(item => {
                
                innerHTML1 += `
                <div class="item-container">
                <div class="item-image" style="background-image :url('${item.imgSrc}');"></div>
                <div class="company-name">${item.companyName}</div>
                <div class="item-name">
                   ${item.itemName}
                </div> 
                <div class="item-price">
                    <span class="current-price">Rs ${item.currentPrice}</span>
                    <span class="original-price">Rs ${item.originalPrice}</span>
                    <span class="discount">(${item.discount}% OFF)</span>     
                </div>
                <button><i class="fa-solid fa-cart-shopping" onclick="addToBag(${item.id})"></i></button>
                </div>`;
            });
            container.innerHTML = innerHTML1;
        }
    });
}
document.addEventListener('DOMContentLoaded', clothesSection);