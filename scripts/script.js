// JavaScript Document

const hamburger = document.querySelector('header>img+img');
const backdrop = document.querySelector(".backdrop")
const menu = document.querySelector(".menu")
const imgtab = document.querySelector("section:nth-of-type(2)>div>img")
const footer = document.querySelector("footer button")
const footerul = document.querySelector("footer ul");

function uitklap (){
    backdrop.classList.toggle("anders");
    menu.classList.toggle("anders");
}

function removeMenu (){
   menu.classList.remove("anders");
   backdrop.classList.remove("anders");
}

function footerinfo () {
    footerul.classList.toggle("anders");
}

hamburger.addEventListener("click", uitklap);
backdrop.addEventListener("click", removeMenu);
footer.addEventListener("click", footerinfo);
