const navbar = document.querySelector(".navbar");
const navlink = document.querySelector(".nav-links");
const links = document.querySelectorAll(".nav-links li");

navbar.addEventListener("click", () => {
    navlink.classList.toggle("open");
});