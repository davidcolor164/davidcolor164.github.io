$(document).ready(function() {
	$('.navbar .navbar-nav .nav-item').on('click', function() {
		console.log('sdfsdf');
		$(this).siblings().removeClass('open');
		$(this).toggleClass('open');
	});


	//jquery for tabs-products-home
	$('.tabs-name li h3').click(function(event) {
		$('.tabs-name li h3').removeClass('active');
		$(this).addClass('active');

		chiso = $(this).parents().index() +1;
		$('ul.tabs-content li .products').removeClass('show-products');
		$('ul.tabs-content li:nth-child(' + chiso + ") .products").addClass('show-products');
	});


	/*change img at shop-single*/
	$('.img-detail-small img').on('click', function(event) {
		console.log('sdfasdf');
		$('.img-detail-big').attr('src', $(this).attr('src')); 
		return false;
	});
});