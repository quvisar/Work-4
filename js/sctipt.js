let burger = document.querySelector('.burger');
let menu = document.querySelector('.menu');
let switche = document.querySelector('.switch');
let body = document.querySelector('body');

burger.addEventListener('click',click);

function click(){
	console.log(body);
	burger.classList.toggle('active');
	menu.classList.toggle('active');
	switche.classList.toggle('active');
	body.classList.toggle('active');
}
