// JavaScript Document
var hamburger
hamburger = 
  document.querySelector('header>img+img');
hamburger.addEventListener("click", uitklap);

function uitklap (){
    let backdrop = 
        document.querySelector(".backdrop")
    backdrop.classList.toggle("anders");

    let menu = 
        document.querySelector(".menu")
    menu.classList.toggle("anders");
}

var footerbutton
footerbutton =
    document.querySelector("footer>button");
footerbutton.addEventListener("click", uitklap2)

function uitklap2 () {
    let button = 
        document.querySelector ("footer>button")
    button.classList.toggle("anders");
}