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
  var statement;
  if (cart.length === 0) {
    statement = "Your shopping cart is empty.";
  } else {
    statement = "In your cart, you have ";
    for (var i in cart) {
      statement += `${cart[i].itemName} at $${cart[i].itemPrice}`;
      if (i < cart.length - 1) {
        statement += `, `;
      }
      if (parseInt(i) === cart.length - 2) {
        statement += "and ";
      }
    }
    statement += ".";
  }
  return statement;
}

function total() {
  var total = 0;
  for (var i in cart) {
    total += cart[item].itemPrice;
  }
  return total;
}

function removeFromCart(item) {
  found = False;
  if found === False;
}

function placeOrder(cardNumber) {
  // write your code here
}
