
let burger = document.querySelector('.burger');
let menu = document.querySelector('.header--items');
let lang = document.querySelector('.header--lang');
let html = document.querySelector('html');
let wrap = document.querySelector('.wrapper');
let question = document.querySelectorAll('.block7--item');


burger.addEventListener("click",active);
menu.addEventListener("click",active);


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
