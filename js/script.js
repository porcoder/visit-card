'use strict'

const gotoLinks = document.querySelectorAll('.nav__link[data-goto]');
const headerBlock = document.querySelector('header');
const headerBefore = getComputedStyle(headerBlock, '::before');
const html = document.body;
const introBlock = document.querySelector('.intro');

window.addEventListener('scroll', function(e) {
	if(scrollY >= 100) {
		headerBlock.classList.add('_scroll');
	} else {
		headerBlock.classList.remove('_scroll');
	}
})

if (gotoLinks.length > 0) {
	gotoLinks.forEach(gotoLink => {
		gotoLink.addEventListener('click', onGotoLinkClick);
	});
	function onGotoLinkClick(e) {
		const gotoLink = e.target;
		if (gotoLink.dataset.goto && document.querySelector(gotoLink.dataset.goto)) {
			const gotoBlock = document.querySelector(gotoLink.dataset.goto);
			//const gotoBlockValue = gotoBlock.getBoundingClientRect().top + scrollY;
			const gotoBlockValueHeader = gotoBlock.getBoundingClientRect().top + scrollY - headerBlock.offsetHeight;//??если header fixed
			const gotoBlockValueBefore = gotoBlock.getBoundingClientRect().top + scrollY - parseInt(headerBefore.height);
			
			if(burgerBtn.classList.contains('_active')) {
				burgerBtn.classList.remove('_active');
				headerNav.classList.remove('_active');
				document.body.classList.remove('_lock');
			}
			if (html.scrollWidth >= 1200) {
					window.scrollTo({
					top: gotoBlockValueHeader,
					behavior: 'smooth',
				});
			} else {
					window.scrollTo({
					top: gotoBlockValueBefore,
					behavior: 'smooth',
				});
			}


			

			e.preventDefault();

		}
	}
}

const burgerBtn = document.querySelector('.header__burger');
const headerNav = document.querySelector('.header__nav');
if (burgerBtn) {
	burgerBtn.addEventListener('click', function (e) {
		burgerBtn.classList.toggle('_active');
		headerNav.classList.toggle('_active');
		document.body.classList.toggle('_lock');
	});
}



$(document).ready(function() {
	$('.porfolio__slider').slick({
		arrows: true,
		dots: true,
		adaptiveHeight: true,
		slidesToShow: 1,
		slidesToScroll: 1,
		speed: 1000,
		easing: 'ease',
		infinite: true,
		initialSlide: 0,
		autoplay: true,
		autoplaySpeed: 6500,
		pauseOnHover: true,
		pauseOnDotsHover: true,
		pauseOnFocus: true,
		draggable: true,
		swipe: true,
		touchTrashold: 5,
		touchMove: true,
		waitForAnimate: true,
		centerMode: false,
		variableWidth: false,
		rows: 1,
		slidesPerRow: 1,
		vertical: false,
		verticalSwiping: false,
	});
})