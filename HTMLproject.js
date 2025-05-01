function toggleMenu() {
    document.querySelector(".button-container").classList.toggle("active");
}

document.addEventListener("DOMContentLoaded", function () {
  document
    .getElementById("news-form")
    .addEventListener("submit", function (event) {
      event.preventDefault();
      alert("Your mail was submitted!");
      this.reset();
    });
});


