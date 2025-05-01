document.addEventListener("DOMContentLoaded", function () {
    document
      .getElementById("contact")
      .addEventListener("submit", function (event) {
        event.preventDefault();
        alert("Your contact form was submitted!");
        this.reset();
      });
  });