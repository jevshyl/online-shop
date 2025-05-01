
//no realoading when submitting smth
document.getElementById("news-form").addEventListener("submit", function(event) {
    event.preventDefault(); 

   
    alert("Your Email was submitted!");
  });

//menu
  function toggleMenu() {
    document.querySelector(".button-container").classList.toggle("active");
}

//clear mail

document.addEventListener("DOMContentLoaded", function () {
  document
    .getElementById("news-form")
    .addEventListener("submit", function (event) {
      event.preventDefault();
      alert("Your mail was submitted!");
      this.reset();
    });
});


