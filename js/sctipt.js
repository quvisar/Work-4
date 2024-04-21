
let burger = document.querySelector('.burger');
let menu = document.querySelector('.header--items');
let lang = document.querySelector('.header--lang');
let html = document.querySelector('html');
let wrap = document.querySelector('.wrapper');
let question = document.querySelectorAll('.block7--item');
let cats = document.querySelector('.block5--button');


burger.addEventListener("click",active);
menu.addEventListener("click",active);
cats.addEventListener("click",activeCats);

function activeCats(){
	let items = document.querySelector('.block5--items');
	let item = document.querySelectorAll('.block5--item');
	cats.classList.toggle('active');
	items.classList.toggle('active');
	for(let i of item){
		i.classList.toggle('active');
	}

}
function active() {
	burger.classList.toggle('active');
	menu.classList.toggle('active');
	lang.classList.toggle('active');
	html.classList.toggle('active');
	wrap.classList.toggle('active');
}

for(let n of question){
		n.addEventListener("click",active2);
	}
function active2(){
	if(this.querySelector('.block7--item-text').classList.contains('active')){
		this.querySelector('.block7--item-text').classList.remove('active')
		this.classList.remove('active');
	}
	else{
		this.classList.add('active');
		this.querySelector('.block7--item-text').classList.add('active')
		let answer = document.querySelectorAll('.block7--item-text');
		for(let i of answer){
			if(i==this.querySelector('.block7--item-text')){
				continue;
			}else{
				i.classList.remove('active');
			}
		}
		for(y of question){
			if(y==this){
				continue;
			}else{
				y.classList.remove('active');
			}
		}
	}
}

let Block_1 = document.querySelector('.block1');
let Block_8 = document.querySelector('.block8');

let scrollbutton = document.querySelector('.wrapper--buttonUp');
window.addEventListener('scroll',windowSctoll);

function windowSctoll(){
	if(window.pageYOffset>=Block_1.clientHeight && window.pageYOffset<document.documentElement.scrollHeight-Block_8.clientHeight*1.5){
		scrollbutton.classList.add('active');
	}else{
		scrollbutton.classList.remove('active');
	}
}