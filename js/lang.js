
let changeLangBtn = document.querySelector('.header--lang').querySelectorAll('input');

let changeLang = {
	logo:{
		Ru:'Инстаботы',
		En:'instabots',
	},
	headerItems:{
		Ru:'Меню',
		En:'Menu',
	},
	about:{
		Ru:'о компании',
		En:'about company',
	},
	tarif:{
		Ru:'тарифы',
		En:'tarif',
	},
	reviews:{
		Ru:'отзывы',
		En:'reviews'
	},
	feedback:{
		Ru:'обратная связь',
		En:'feedback',
	},
	// block1

	blockTitle:{
		Ru:'Высокий уровень вовлечения представителей',
		En:'High level of involvement of representatives',
	},
	submit:{
		Ru:'Отправить',
		En:'Send',
	},
}


for(let btn of changeLangBtn){
	btn.addEventListener("change",change);
}


function change() {
	for(let y in changeLang){
		let lng = document.querySelectorAll('.lg-'+y);
		for(let x of lng){
			for(let i of changeLangBtn){
				if(i.checked){
					x.innerHTML = changeLang[y][i.id].charAt(0).toUpperCase()+changeLang[y][i.id].slice(1);
				}
			}
		}	
	}
}