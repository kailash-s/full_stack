let cartQuantity=0;

displayCart();

function updateCartQuantity(value) {
  if (cartQuantity+value>10) {
    alert('Cart is full');
    return;
  }
  if (cartQuantity+value<0) {
    alert('Not enough items in cart');
    return;
  }
  cartQuantity+=value;
  displayCart();
}

// 9i. using dom to display cart quantity
function displayCart() {
  document.querySelector('.js-cart').innerHTML = (`Cart quantity: ${cartQuantity}`);
}