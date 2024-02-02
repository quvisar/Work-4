
let burger = document.querySelector('.burger');
let menu = document.querySelector('.header--items');
let lang = document.querySelector('.header--lang');
let body = document.querySelector('html');

burger.addEventListener("click",active);

function active() {
	burger.classList.toggle('active');
	menu.classList.toggle('active');
	lang.classList.toggle('active');
	body.classList.toggle('active');
}