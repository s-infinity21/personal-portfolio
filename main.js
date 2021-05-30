function myFunction() {
	var nav = document.getElementById('navbar');
	window.addEventListener('scroll', function () {
		if (this.scrollY > 20) {
			nav.classList.add('sticky');
		} else {
			nav.classList.remove('sticky');
		}
	});
}

$('.menu-btn').click(function () {
	$('.navbar .menu').toggleClass('active');
	$('.menu-btn i').toggleClass('active');
});

$('.carousel').owlCarousel({
	margin: 20,
	loop: true,
	autoplayTimeOut: 2000,
	autoplayHoverPause: true,
	responsive: {
		0: {
			items: 1,
			nav: false
		},
		600: {
			items: 2,
			nav: false
		},
		1000: {
			items: 3,
			nav: false
		}
	}
});
