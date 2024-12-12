const username = document.getElementById('user_name')
const user = getFromLocalStorage('currentUser') || []
username.innerHTML = user.username?user.username:"User Name"


function buyNow() {
  window.location.href = "index.html"
}

function deleteAll() {
  const cartItems = document.getElementById('cart-items')
  cartItems.innerHTML = '<p class="empty-cart">Your cart is empty.</p>'
}