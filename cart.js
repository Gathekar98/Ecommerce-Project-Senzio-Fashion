const CONVENIENCE_FEES = 99;
let bagItemObjects;
const close_nav = document.querySelector('.close-nav');
const navbar = document.querySelector('nav');
const menu = document.querySelector('.bars');
const img= document.querySelector('.navbar img');

onLoad();
function onLoad(){
  menu.addEventListener('click',()=>{
    navbar.classList.add('active');
    img.style.display = 'flex';
    });
    close_nav.addEventListener('click',()=>{
      navbar.classList.remove('active'); 
    });
    
  loadBagItemObjects();
  displayBagItems();
  displayBagSummary();
}
function displayBagSummary() {
  let bagSummaryElement = document.querySelector(".bag-summary");
let totalItem = bagItemObjects.length;
let totalMRP = 0;
let totalDiscount = 0;
let finalPayment=0;
bagItemObjects.forEach(bagItem=>{
totalMRP +=bagItem.originalPrice;
totalDiscount += bagItem.originalPrice - bagItem.currentPrice;
finalPayment = totalMRP -totalDiscount +CONVENIENCE_FEES;
});
  bagSummaryElement.innerHTML = `<div class="bag-details-container">
  <div class="price-header">PRICE DETAILS (${totalItem} Items) </div>
  <div class="price-item">
    <span class="price-item-tag">Total MRP</span>
    <span class="price-item-value">₹${totalMRP}</span>
  </div>
  <div class="price-item">
    <span class="price-item-tag">Discount on MRP</span>
    <span class="price-item-value priceDetail-base-discount">-₹${totalDiscount}</span>
  </div>
  <div class="price-item">
    <span class="price-item-tag">Convenience Fee</span>
    <span class="price-item-value">₹99</span>
  </div>
  <hr>
  <div class="price-footer">
    <span class="price-item-tag">Total Amount</span>
    <span class="price-item-value">₹ ${finalPayment}</span>
  </div>
</div>
<button class="btn-place-order">
  <div class="paymentBtn" data-bs-toggle="modal" data-bs-target="#paymentcheckout" >PLACE ORDER</div>
</button>
`;
}
function loadBagItemObjects() {
  bagItemObjects = bagItems.map(itemId => {
      for (let section of clothesSectionData) {
          let items = section.type;
          for (let i = 0; i < items.length; i++) {
              if (itemId == items[i].id) {
                
                  return items[i];

              }
          }
      }
  })
 
}
function removeFromBag(itemId){
  console.log('hello');
  console.log(itemId);
  bagItems = bagItems.filter(bagItemId => bagItemId != itemId);
  console.log(bagItems);
  localStorage.setItem('bagItems', JSON.stringify(bagItems));
loadBagItemObjects();
displayBagIcon();
displayBagItems();
displayBagSummary();
}
function displayBagItems(){ 
  let containerElement = document.querySelector('.bag-items-container');
  let innerHTML ="";
  bagItemObjects.forEach(bagItem => {
    innerHTML+= generatItemHTML(bagItem);
  });
  containerElement.innerHTML = innerHTML; 
}

function generatItemHTML(item){
return  `
<div class="bag-item-container">
          <div class="item-left-part">
            <img class="bag-item-img" src="${item.imgSrc}">
          </div>
          <div class="item-right-part">
            <div class="company">${item.companyName}</div>
            <div class="item-name">${item.itemName}</div>
            <div class="price-container">
              <span class="current-price">Rs ${item.currentPrice}</span>
              <span class="original-price">Rs ${item.originalPrice}</span>
              <span class="discount">(${item.discount}% OFF)</span>
            </div>
            
          </div>
      
          <div class="remove-from-cart" onclick="removeFromBag(${item.id})"=>X</div>
        </div>`;
}
