








//providing feedbacks for color selection//

function showColorConfirm(){
   var colorResult=document.querySelector('input[name="color"]:checked').value;
        document.getElementById("colorconfirm").innerHTML= colorResult + " is selected";
}



//creating product object//
function Product(productColor, productSize, productQuantity){
  this.color = productColor;
  this.size = productSize;
  this.quantity = productQuantity;
  this.price = productQuantity*23;
}



//showing notification when items being added to bag and save information to local storage//
let addToBagButton = document.getElementById('addtobag')
const storedValue=JSON.parse(localStorage.getItem('savedCart'));
const cart = storedValue ? storedValue:[];

function addToBag(){
  alert ("The product is added to your bag!");


  var colorResult=document.querySelector('input[name="color"]:checked').value;
  var sizeResult=document.querySelector('input[name="size"]:checked').value;
  var quantityValue= document.getElementById ("quantity");
  var result = quantityValue.options[quantityValue.selectedIndex].value;
  var quantityResult = parseInt(result);

  var myItem = new Product (colorResult, sizeResult , quantityResult);
  var shouldAppend = true;
  for (let i = 0; i < cart.length; i++){
      if (cart[i].color == myItem.color && cart[i].size == myItem.size){
         cart[i].quantity += myItem.quantity
         cart[i].price += myItem.price
         shouldAppend = false;
      }

  }
  if (shouldAppend) {
     cart.push(myItem);
  }
  localStorage.setItem('savedCart', JSON.stringify(cart));

}

addToBagButton.addEventListener('click', addToBag);



//showing notification when items being added to wishlist and save information to local storage//
let addToWishListButton = document.getElementById('addtowishlist')
const storedListValue=JSON.parse(localStorage.getItem('savedList'));
const wishlist = storedListValue ? storedListValue:[];

function addToWishList(){
  alert ("The product is added to your Wish List!");


  var colorResult=document.querySelector('input[name="color"]:checked').value;
  var sizeResult=document.querySelector('input[name="size"]:checked').value;
  var quantityValue= document.getElementById ("quantity");
  var result = quantityValue.options[quantityValue.selectedIndex].value;
  var quantityResult = parseInt(result);

  var myItem = new Product (colorResult, sizeResult , quantityResult);
  var shouldAppend = true;
  for (let i = 0; i < wishlist.length; i++){
      if (wishlist[i].color == myItem.color && wishlist[i].size == myItem.size){
         wishlist[i].quantity += myItem.quantity
         wishlist[i].price += myItem.price
         shouldAppend = false;
      }

  }
  if (shouldAppend) {
     wishlist.push(myItem);
  }
  localStorage.setItem('savedList', JSON.stringify(wishlist));

}

addToWishListButton.addEventListener('click', addToWishList);





//showing the accumulated number on the cart icon//
  totalNum = 0;
for (let i = 0; i < cart.length; i++) {
  totalNum += cart[i].quantity;
  document.getElementById("cartnum").innerHTML= "(" + totalNum +")"
}

//adding new number to the cart icon when addtobag button is clicked//
document.getElementById("addtobag").addEventListener("click",addNumbertoCart)
function addNumbertoCart(){
  var quantityValue= document.getElementById ("quantity");
  var result = quantityValue.options[quantityValue.selectedIndex].value;
  totalNum = totalNum + parseInt(result)
  document.getElementById("cartnum").innerHTML= "(" + totalNum +")"

}
