

//getting information about Items in the Shopping Cart from local storage//
const storedValue=JSON.parse(localStorage.getItem('savedCart'));
const cart = storedValue ? storedValue:[];



//getting information about Items in Wish List from local storage//
const storedListValue=JSON.parse(localStorage.getItem('savedList'));
const wishlist = storedListValue ? storedListValue:[];



//showing the accumulated number on the cart icon//
  totalNum = 0;
for (let i = 0; i < cart.length; i++) {
  totalNum += cart[i].quantity;
  document.getElementById("cartnum").innerHTML= "(" + totalNum +")"
}

//caculating the order summary//
var itemPrice = totalNum * 23;
var totalTax = itemPrice * 0.08;
var tax = totalTax.toFixed(2);
var totalPrice = itemPrice + Number(tax);

document.getElementById("itemprice").innerHTML=itemPrice;
document.getElementById("totaltax").innerHTML=tax;
document.getElementById("totalprice").innerHTML=totalPrice;



//show product items on the page//
function displayItem(){
   if (!cart || cart.length == 0 ) {
   document.getElementById("cartlistnum").innerHTML= "Your shopping cart is empty";
   document.querySelector(".summaryboxcontainer").innerHTML=" ";

   }


   else {


      for (let i = 0; i < cart.length; i++){

    var itemCard1=document.getElementById("cart-item-template").content;
    var itemCard1Copy=document.importNode(itemCard1,true);
    itemCard1Copy.getElementById("itemcolor").textContent=cart[i].color;
    itemCard1Copy.getElementById("itemsize").textContent=cart[i].size;
    itemCard1Copy.getElementById("itemquantity").textContent=cart[i].quantity;

    const button = itemCard1Copy.getElementById("btn-remove");
    button.addEventListener('click', function(){
        const index = cart.findIndex(function(myItem){
        if (myItem.color == cart[i].color && myItem.size == cart[i].size ){
          return true;
        }

      } );
      cart.splice(index,1);
      console.log(cart);
      localStorage.setItem('savedCart', JSON.stringify(cart));

      location.reload();


    })


    document.querySelector(".itemcardcontainer").appendChild(itemCard1Copy);


   }
  }


 }

displayItem();





//show Wish List items on the page//
function displayWishList(){
   if (!wishlist || wishlist.length == 0 ) {
     console.log("test");
   document.getElementById("wishlistnum").innerHTML= " ";

   }


   else {


      for (let i = 0; i < wishlist.length; i++){

    var itemCard2=document.getElementById("cart-item-template").content;
    var itemCard2Copy=document.importNode(itemCard2,true);
    itemCard2Copy.getElementById("itemcolor").textContent=wishlist[i].color;
    itemCard2Copy.getElementById("itemsize").textContent=wishlist[i].size;
    itemCard2Copy.getElementById("itemquantity").textContent=wishlist[i].quantity;

    const button = itemCard2Copy.getElementById("btn-remove");
    button.addEventListener('click', function(){
        const index = wishlist.findIndex(function(myItem){
        if (myItem.color == wishlist[i].color && myItem.size == wishlist[i].size ){
          return true;
        }

      } );
      wishlist.splice(index,1);
      console.log(wishlist);
      localStorage.setItem('savedList', JSON.stringify(wishlist));

      location.reload();


    })


    document.querySelector(".Wishlistcardcontainer").appendChild(itemCard2Copy);


   }
  }


 }

displayWishList();
