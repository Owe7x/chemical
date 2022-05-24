$('body').on('click', '.js-burger-toggle-revolve', function(e) {
    e.preventDefault();
    $(this).toggleClass('revolve');
});
var accordion = document.getElementById('accordion');
accordion.addEventListener('click', change);
function change(event) {
	var targ = event.target;
	if (targ.tagName !== 'P') return;
	if (targ.classList.contains('nav__title-active')) {
		hideAll();
	} else {
		hideAll();
		targ.classList.add('nav__title-active');
		showText(targ.nextElementSibling);
	}
}
function hideAll() {
	var h3El = accordion.querySelectorAll('p');
	console.log(h3El);
	var divEl = accordion.querySelectorAll('.nav__list');
	for (var i = 0; i < h3El.length; i++) {
		h3El[i].classList.remove('nav__title-active');
	}
	for (var i = 0; i < divEl.length; i++) {
		divEl[i].style.height = '0';
	}
}
function showText(textEl) {
	textEl.style.height = textEl.scrollHeight + 'px';
}

$('.credit__slider').slick({
	slidesToShow: 5,
	centerMode: true,
	centerPadding: '60px',
	infinite: true,
	responsive: [
		{
		  breakpoint: 1564,
		  settings: {
			slidesToShow: 3
		  }
		},
		{
		  breakpoint: 992,
		  settings: {
			slidesToShow: 2,
			centerMode: false,
		  }
		},
		{
			breakpoint: 576,
			settings: {
			  slidesToShow: 1,
			}
		  }
	  ]
  });