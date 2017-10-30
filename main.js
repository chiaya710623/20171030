$(document).ready(function(){

	// $('a').click(function(){ return false;});

	$('.box').hover(function(){
		var value = $(this).attr("rel");
		$(this).effect(value).slow(999999999999999999999);
	});

});