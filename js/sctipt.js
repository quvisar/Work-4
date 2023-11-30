let burger = document.querySelector('.burger');
let menu = document.querySelector('.menu');
let switche = document.querySelector('.switch');

burger.addEventListener('click',click);

function click(){
	burger.classList.toggle('active');
	menu.classList.toggle('active');
	switche.classList.toggle('active');
}
