$(document).ready(function() {


	$('.productPageImg').zoom({url: 'images/product_braceletsilverBIG.png'});

	$('.subHeroA').hover(function(){
    $('.subHeroA a').text("shop now");
}, function() {
    $('.subHeroA a').text("women");


    $('.subHeroB').hover(function(){
    $('.subHeroB a').text("shop now");
}, function() {
    $('.subHeroB a').text("men");
});
});



})