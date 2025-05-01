document.addEventListener("DOMContentLoaded", function () {
  const addToCartButton = document.getElementById("add-to-cart");
  addToCartButton.addEventListener("click", function () {
    const productTitle = document.getElementById("product-title").innerText;
    const productImage = document.getElementById("product-image").src;
    const selectedSize = document.getElementById("size").value;

    const product = {
      title: productTitle,
      image: productImage,
      size: selectedSize,
      quantity: 1,
    };

    let cart = JSON.parse(localStorage.getItem("cart")) || [];

    const existing = cart.find(
      (item) =>
        item.title === product.title &&
        item.size === product.size &&
        item.image === product.image
    );

    if (existing) {
      existing.quantity += 1;
    } else {
      cart.push(product);
    }

    localStorage.setItem("cart", JSON.stringify(cart));
  });
});
