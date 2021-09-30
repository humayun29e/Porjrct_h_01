( function ($){


	//start



$('.menu_icon i').on('click', function (){

	$('.menu').slideToggle();
});




$(window).resize( function (){

	var screeSize= $(window).width();

	//$('.random').text(screeSize);
 if (screeSize >991){$('.menu').removeAttr ('style')}
 	;

});

$(window).scroll( function(){
var endpage= $(window).scrollTop();

 $('.random').text(endpage);

if( endpage > 750){
	$('.to_top').fadeIn();
}
else{
$('.to_top').fadeOut();
}
 

});

$('.to_top').on('click' , function(){
$('html').animate({ 'scrollTop' : 0});

});





	//end
})(jQuery);