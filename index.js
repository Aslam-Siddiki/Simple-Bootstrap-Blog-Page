
// Implementing custom navbar activity:
let navbar = document.querySelector(".navbar");
let navbartoggler = document.querySelector(".navbar-toggler");


navbartoggler.addEventListener("click", ()=>{
    navbar.classList.toggle("nav-bar-expand");
});