var navbar = document.querySelector(".navbar");
var ham = document.querySelector(".ham");

ham.addEventListener("click", function toggleHamburger(){
  navbar.classList.toggle("showNav")
})
