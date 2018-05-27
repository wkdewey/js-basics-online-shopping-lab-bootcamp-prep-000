var cart = [];

function getCart() {
 return cart;
}

function setCart(c) {
  cart = c;
  return cart;
}

function addToCart(item) {
 var price = Math.floor(Math.random() * 100);
 var itemobject = {itemName: `${item}`, itemPrice: price};
 cart.push(itemobject);
 return `${item} has been added to your cart.`;
}

function viewCart() {
  if (cart.length === 0) {
    var statement = "Your shopping cart is empty.";
  } else {
    statement = "In your cart, you have "
    for (var item in cart) {
      statement += `${cart[item].itemName} at $${cart[item].itemPrice}`
      if (item < cart.length - 2) {
        statement += ", ";
      } 
      else if (item === cart.length - 2) {
        statement += ", and "
      }
    statement += "."
    }
  }
  return statement
}

function total() {
  // write your code here
}

function removeFromCart(item) {
  // write your code here
}

function placeOrder(cardNumber) {
  // write your code here
}
