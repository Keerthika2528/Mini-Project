const buttoncart = document.querySelector('#cart_icon');
const cart = document.querySelector('.cart');
const closebutton = document.querySelector('#wrong-icon');



buttoncart.addEventListener('click', () => {
  cart.classList.add('cart-active');
});
closebutton.addEventListener('click', () => {
  cart.classList.remove('cart-active');
});
// remove icecream item from cart
document.addEventListener('DOMContentLoaded', loadContent);


function loadContent() {
  let removeitem = document.querySelectorAll('#cart-remove');
  removeitem.forEach((removebutton) => {
    removebutton.addEventListener('click', trashitem)
  });

  // product item change
  let quantityitem = document.querySelectorAll('.cart-quantity');
  quantityitem.forEach((input) => {
    input.addEventListener('change',changeQty);
  });
  
  // add cart 
  let addcart = document.querySelectorAll('#cart');
  addcart.forEach((cartitem) => {
    cartitem.addEventListener('click',adding);
  });
  updateTotal();
  
  
}
// remove item
function trashitem(){
if(confirm('Are you sure to remove?')){
  let title=this.parentElement.querySelector('.cart-icecream-title').innerHTML;
  itemList=itemList.filter(el=>el.title!=title);
 this.parentElement.remove();
 loadContent();

}
}

//change quantity


function changeQty(){
  if(isNaN(this.value) || this.value<1){
    this.value=1;

  }
  loadContent();
}
let itemList=[];
// add cart item

function adding(){
  let icecream = this.parentElement;
  let title = icecream.querySelector('.item').innerHTML;
  let price = icecream.querySelector('.price').innerHTML;
  let image = icecream.querySelector('.food-img').src;


  let product={title,price,image}
  // check product already exist in cart

 if(itemList.find((el)=>el.title==product.title)) {
   alert("product already added in cart");
  return;
 }
 else{itemList.push(product);}

  let newProductelement=createcartproduct(title, price, image);
  let element=document.createElement('div');
  element.innerHTML=newProductelement;
  let cartBasket=document.querySelector('.cart-content');
  cartBasket.append(element);
  loadContent();
 
}

function createcartproduct(title, price, image){

  return `<div class="cart-box">
  <img src="${image}"/>
    <div class="detail-box">
      <div class="cart-icecream-title">
        ${title}
      </div>
      <div class="price-box">
        <div class="cart-price1">
          ${price}
        </div>
        <div class="cart-price2">
          ${price}
        </div>
        <input type="number" value="1" class="cart-quantity"/>
      </div>


    </div>
    <i class="fa-solid fa-trash" id="cart-remove"></i>
</div>`;
  
  
}

function updateTotal(){
  const cartitems=document.querySelectorAll('.cart-box');
  const totalvalue=document.querySelector('.total-price');


  let total=0;

  cartitems.forEach(product=>{
    let priceElement=product.querySelector('.cart-price1');
    let price=parseFloat(priceElement.innerHTML.replace("Rs.",""));
    let qty=product.querySelector(".cart-quantity").value;
    total+=(price*qty);
    product.querySelector(".cart-price2").innerText="Rs."+price*qty;
  });
  totalvalue.innerHTML='Rs.'+total;


  
// Add product count in cart item

const cartcount=document.querySelector('.cart_counter');
let count=item.length;
cartcount.innerHTML=count;


if(count==0){
  cartcount.style.display="none";
}
else{
  cartcount.style.display="block";
}
}
