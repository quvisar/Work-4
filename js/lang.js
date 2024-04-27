
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
	reg:{
		Ru:'Вход и регистрация',
		En:'Login and registration',
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
	p1:{
		Ru:'Нажимая на кнопку вы соглашаетесь на обработку',
		En:'By clicking on the button you agree to the processing',
	},
	p2:{
		Ru:'персональных данных',
		En:'personal data',
	},
	goNext:{
		Ru:'Листайте дальше',
		En:'Scroll further',
	},
	placeholder:{
		Ru:'Введите свой e-mail',
		En:'Enter your email',
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
					if(x.placeholder){
						x.placeholder = changeLang[y][i.id];
					}else{
						x.innerHTML = changeLang[y][i.id].charAt(0).toUpperCase()+changeLang[y][i.id].slice(1);
					}
				}
			}
		}	
	}
}