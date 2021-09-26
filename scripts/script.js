// JavaScript Document
var hamburger
hamburger = 
  document.querySelector('header>img+img');
hamburger.addEventListener("click", uitklap);

function uitklap (){
  let backdrop = 
      document.querySelector("main>div")
  backdrop.classList.add("anders");
}