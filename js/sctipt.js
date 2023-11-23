let burger = document.querySelector(".burger");
let menu = document.querySelector(".menu");
let lang = document.querySelector(".lang");

burger.addEventListener("click",click);

function click(){
	console.log("click");
	burger.classList.toggle("active");
	menu.classList.toggle("active");
	lang.classList.toggle("active");
}

console.log(burger);
