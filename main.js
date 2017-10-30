$(document).ready(function(){

	$('a').click(function(){ return false;});

	$('.box').click(function(){
		var value = $(this).attr("rel");
		$(this).effect(value).slow(1000);
	});

});