const cartItems = JSON.parse(localStorage.getItem("cart")) || [];
const cartContainer = document.getElementById("cart-items");
const payContainer = document.getElementById("pay");

function renderCart() {
  cartContainer.innerHTML = "";

  if (cartItems.length === 0) {
    cartContainer.innerHTML = `<p class="empty">Your cart is empty.</p>`;
    payContainer.innerHTML = "";
    return;
  }

  cartItems.forEach((item, index) => {
    const div = document.createElement("div");
    div.innerHTML = `
      <img src="${item.image}" style="width:100px">
      <p><strong>${item.title}</strong> <br> Size: ${item.size}</p>
      <p>Quantity: ${item.quantity}</p>
      <button data-index="${index}" class="remove-btn">Remove Item</button>
    `;
    cartContainer.appendChild(div);
  });

  const removeButtons = document.querySelectorAll(".remove-btn");
  removeButtons.forEach((btn) => {
    btn.addEventListener("click", function () {
      const index = this.getAttribute("data-index");
      if (cartItems[index].quantity > 1) {
        cartItems[index].quantity -= 1;
      } else {
        cartItems.splice(index, 1);
      }
      localStorage.setItem("cart", JSON.stringify(cartItems));
      renderCart(); 
    });
  });
}

renderCart();

