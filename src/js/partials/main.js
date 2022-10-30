$(document).ready(function() {
	var burger = $('.header__burger');
	var header = $('.header');
	var headerOffset = header.offset().top;
	var headerHeight = header.outerHeight();
	var scroll = $(window).scrollTop();
	var isScroll = false;

	$(window).on('scroll', function () {
		if (window.matchMedia('(min-width: 1280px)').matches) {
			scroll = $(window).scrollTop();

			if (scroll >= headerOffset + headerHeight) {
				isScroll = true;

				headerHeight = isScroll ? header.outerHeight() : null;
				header.addClass('header--fixed');

				if (!header.hasClass('is-fixed')) {
					header.css({'top': -headerHeight + 'px', 'transform': 'translateY(' + headerHeight + 'px)'}).addClass('is-fixed');
					$('body').css('padding-top', headerHeight + 'px');
				}
			} else {
				isScroll = false;
				header.removeClass('header--fixed' + ' is-fixed').removeAttr('style');
				$('body').css('padding-top', 0);
			}
		}
	});

	burger.on('click', function () {
		$(this).closest('.header').toggleClass('open');
		$('body').toggleClass('body-scroll-lock');
	});

	const firstSlider = new Swiper('.swiper', {
		slidesPerView: 1,
		loop: true,
		pagination: {
			el: '.swiper-pagi',
			type: 'fraction'
		},
		navigation: {
			nextEl: '.swiper-next',
			prevEl: '.swiper-prev',
		},
		effect: 'fade',
		autoplay: {
			delay: 4000,
		}
	});

	AOS.init();
})