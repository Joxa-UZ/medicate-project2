let siteNavbar = document.querySelector(".header-right__under-list");
let siteHamburger = document.querySelector(".header-right__under-hamburger");

siteHamburger.addEventListener("click", function(evt){
    evt.preventDefault();

    siteNavbar.classList.toggle("header-right__under-list--active");
})