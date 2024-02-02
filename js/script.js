$(document).ready(function(){
	$('.burger').click(function(){
		$('.navigation').toggleClass('active');
		$('body').toggleClass('active');
	});

	$('.fourth-block-item--title').click(function(){
		$(this).toggleClass('active');
	});
});