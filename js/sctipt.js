
let burger = document.querySelector('.burger');
let menu = document.querySelector('.header--items');
let lang = document.querySelector('.header--lang');
let html = document.querySelector('html');
let wrap = document.querySelector('.wrapper');

burger.addEventListener("click",active);
menu.addEventListener("click",active);

function active() {
	burger.classList.toggle('active');
	menu.classList.toggle('active');
	lang.classList.toggle('active');
	html.classList.toggle('active');
	wrap.classList.toggle('active');
}