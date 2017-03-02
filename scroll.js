$(document).ready(function(){
	$('.option1').click(function(){
		$('html,body').animate({
			scrollTop: $('#self-intro').offset().top
		},800);
	});
	$('.option2').click(function(){
		$('html,body').animate({
			scrollTop: $('#showskill').offset().top
		},800);
	});
	$('.option3').click(function(){
		$('html,body').animate({
			scrollTop: $('#articles').offset().top
		},800);
	});
	
	$('.option5').click(function(){
		$('html,body').animate({
			scrollTop: $('#contactMe').offset().top
		},800);
	});
});