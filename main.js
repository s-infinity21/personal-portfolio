function myFunction() {
	var nav = document.getElementById('navbar');
	var menu = document.getElementById('menu');

	window.addEventListener('scroll', function () {
		if (this.scrollY > 20) {
			nav.classList.add('sticky');
		} else {
			nav.classList.remove('sticky');
		}
	});

	window.addEventListener('click', function () {
		menu.classList.toggle('active');
	});
}
