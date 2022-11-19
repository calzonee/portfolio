//resize the header's font size
window.onscroll = function() {stickyFunction()};

var header = document.getElementById("Header");
//var sticky = header.offsetTop;

function stickyFunction() {
    //window.pageYOffset > sticky ? header.classList.add("sticky") : header.classList.remove("sticky");
    if (document.body.scrollTop > 30 || document.documentElement.scrollTop > 30) {
        document.getElementById("header").style.height = "60px";
        document.getElementById("header-logo-img").style.height = "50px"
    }
    else {
        document.getElementById("header").style.height = "80px"
        document.getElementById("header-logo-img").style.height = "60px";
    }
}

//Navbar mobile menu
const menu = document.querySelector('#mobile-menu');
const menuLinks = document.querySelector('.header-links');
const links = document.querySelectorAll('#mobile-menu, #projects-link, #skills-link, #contact-link');
links.forEach(function(link) {
    link.addEventListener('click', function() {
        menu.classList.toggle('is-active')
        menuLinks.classList.toggle('active')
    });
});
