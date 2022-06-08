// hide show menu 
$(document).ready(function(){
    $(window).scroll(function(){
        // sticky navbar on scroll script
        if(this.scrollY > 20){
            $('.navbar').addClass("sticky");
        }else{
            $('.navbar').removeClass("sticky");
        }
    });
});

// MENU BUTTON
const menu = document.querySelector(".menu-pc");
const menuButton = document.querySelector(".menu-btn");
const overlay = document.querySelector("#overlay");

menuButton.addEventListener("click", () => {
  menu.classList.toggle("navbar-open");
  menuButton.classList.toggle("open");
  overlay.classList.toggle("show");
});

overlay.addEventListener("click", () => {
  menu.classList.toggle("navbar-open");
  menuButton.classList.toggle("open");
  overlay.classList.toggle("show");
});