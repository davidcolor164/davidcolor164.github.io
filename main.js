$(document).ready(function() {
	$('.navbar .navbar-nav .nav-item').on('click', function() {
		console.log('sdfsdf');
		$(this).siblings().removeClass('open');
		$(this).toggleClass('open');
	});
});