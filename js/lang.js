let changeLangBtn = document.querySelector('.header--lang').querySelectorAll('input');

let changeLang = {
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
	}
}


for(let btn of changeLangBtn){
	btn.addEventListener("change",change);
}
function change() {
	for(let y in changeLang){
		let lng = document.querySelector('.lg-'+y);
		for(let i of changeLangBtn){
			if(i.checked){
				lng.innerHTML = changeLang[y][i.id];
			}
		}		
	}
}


