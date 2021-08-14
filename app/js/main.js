// alert(window.innerWidth);
window.onload = function () {
	document.addEventListener("click", documentActions);

	function documentActions(e) {

		const targetElement = e.target;
		if (isMobile.any()) {
			if (window.innerWidth > 1025) {
				if (targetElement.classList.contains('header__menu-item-btn')) {
					if (!$('.header__menu-item').hasClass('show-menu')) {
						$('.header__menu-item').addClass('show-menu');
						$('.header__menu-sub-list').show();
					} else {
						$('.header__menu-item').removeClass('show-menu');
						$('.header__menu-sub-list').hide();
					}
					targetElement.classList.toggle('rotate');
				}
				if (!targetElement.closest('.header__menu-item') && document.querySelectorAll('.header__menu-item.show-menu').length > 0) {
					removeClasses(document.querySelectorAll('.header__menu-item.show-menu'), "show-menu");
					removeClasses(document.querySelectorAll('.header__menu-item-btn.rotate'), "rotate");
					$('.header__menu-sub-list').hide();
				}
				if (targetElement.classList.contains('header__menu-sub-item-btn')) {
					targetElement.closest('.header__menu-sub-item').classList.toggle('show-sub-menu');
					targetElement.classList.toggle('rotate');
				}
				if (!targetElement.closest('.header__menu-sub-item') && document.querySelectorAll('.header__menu-sub-item.show-sub-menu').length > 0) {
					removeClasses(document.querySelectorAll('.header__menu-sub-item.show-sub-menu'), "show-sub-menu");
					removeClasses(document.querySelectorAll('.header__menu-sub-item-btn.rotate'), "rotate");
				}

			}
			if (window.innerWidth <= 1025) {
				if (targetElement.classList.contains('header__menu-item-btn')) {
					targetElement.closest('.header__menu-item').classList.toggle('show-menu');
					targetElement.classList.toggle('rotate');
					$('.header__menu-sub-list').slideToggle(1000);
				}
				if (!targetElement.closest('.header__menu-item') && document.querySelectorAll('.header__menu-item.show-menu').length > 0) {
					removeClasses(document.querySelectorAll('.header__menu-item.show-menu'), "show-menu");
					removeClasses(document.querySelectorAll('.header__menu-item-btn.rotate'), "rotate");
					$('.header__menu-sub-list').slideToggle(1000);
				}
				if (targetElement.classList.contains('header__menu-sub-item-btn')) {
					targetElement.closest('.header__menu-sub-item').classList.toggle('show-sub-menu');
					targetElement.classList.toggle('rotate');
				}
				if (!targetElement.closest('.header__menu-sub-item') && document.querySelectorAll('.header__menu-sub-item.show-sub-menu').length > 0) {
					removeClasses(document.querySelectorAll('.header__menu-sub-item.show-sub-menu'), "show-sub-menu");
					removeClasses(document.querySelectorAll('.header__menu-sub-item-btn.rotate'), "rotate");
				}
				if (targetElement.classList.contains('burger-input')) {
					if (!$('.header__menu-list').hasClass('active')) {
						$('.header__menu-list').addClass('active');
					} else {
						$('.header__menu-list').removeClass('active');
						$('.header__menu-sub-list').hide();
					}
				}
				if ((!targetElement.closest('.burger') && document.querySelectorAll('.burger').length > 0) &&
					(!targetElement.closest('.header__menu-sub-item')) &&
					(!targetElement.closest('.header__menu-item'))) {
					removeClasses(document.querySelectorAll('.header__menu-list.active'), "active");
					$('.burger-input').prop('checked', false);
				}
			}
		} else if (!isMobile.any()) {
			if (window.innerWidth > 1025) {
				if (targetElement.classList.contains('header__menu-item-btn')) {
					if (!$('.header__menu-item').hasClass('show-menu')) {
						$('.header__menu-item').addClass('show-menu');
						$('.header__menu-sub-list').show();
					} else {
						$('.header__menu-item').removeClass('show-menu');
						$('.header__menu-sub-list').hide();
					}
					targetElement.classList.toggle('rotate');
				}
				if (!targetElement.closest('.header__menu-item') && document.querySelectorAll('.header__menu-item.show-menu').length > 0) {
					removeClasses(document.querySelectorAll('.header__menu-item.show-menu'), "show-menu");
					removeClasses(document.querySelectorAll('.header__menu-item-btn.rotate'), "rotate");
					$('.header__menu-sub-list').hide();
				}
				if (targetElement.classList.contains('header__menu-sub-item-btn')) {
					targetElement.closest('.header__menu-sub-item').classList.toggle('show-sub-menu');
					targetElement.classList.toggle('rotate');
				}
				if (!targetElement.closest('.header__menu-sub-item') && document.querySelectorAll('.header__menu-sub-item.show-sub-menu').length > 0) {
					removeClasses(document.querySelectorAll('.header__menu-sub-item.show-sub-menu'), "show-sub-menu");
					removeClasses(document.querySelectorAll('.header__menu-sub-item-btn.rotate'), "rotate");
				}

			}
			if (window.innerWidth <= 1025) {
				if (targetElement.classList.contains('header__menu-item-btn')) {
					targetElement.closest('.header__menu-item').classList.toggle('show-menu');
					targetElement.classList.toggle('rotate');
					$('.header__menu-sub-list').slideToggle(1000);
				}
				if (!targetElement.closest('.header__menu-item') && document.querySelectorAll('.header__menu-item.show-menu').length > 0) {
					removeClasses(document.querySelectorAll('.header__menu-item.show-menu'), "show-menu");
					removeClasses(document.querySelectorAll('.header__menu-item-btn.rotate'), "rotate");
					$('.header__menu-sub-list').slideToggle(1000);
				}
				if (targetElement.classList.contains('header__menu-sub-item-btn')) {
					targetElement.closest('.header__menu-sub-item').classList.toggle('show-sub-menu');
					targetElement.classList.toggle('rotate');
				}
				if (!targetElement.closest('.header__menu-sub-item') && document.querySelectorAll('.header__menu-sub-item.show-sub-menu').length > 0) {
					removeClasses(document.querySelectorAll('.header__menu-sub-item.show-sub-menu'), "show-sub-menu");
					removeClasses(document.querySelectorAll('.header__menu-sub-item-btn.rotate'), "rotate");
				}
				if (targetElement.classList.contains('burger-input')) {
					if (!$('.header__menu-list').hasClass('active')) {
						$('.header__menu-list').addClass('active');
					} else {
						$('.header__menu-list').removeClass('active');
						$('.header__menu-sub-list').hide();
					}
				}
				if ((!targetElement.closest('.burger') && document.querySelectorAll('.burger').length > 0) &&
					(!targetElement.closest('.header__menu-sub-item')) &&
					(!targetElement.closest('.header__menu-item'))) {
					removeClasses(document.querySelectorAll('.header__menu-list.active'), "active");
					$('.burger-input').prop('checked', false);
				}
			}
		}
	}
}

var isMobile = { Android: function () { return navigator.userAgent.match(/Android/i); }, BlackBerry: function () { return navigator.userAgent.match(/BlackBerry/i); }, iOS: function () { return navigator.userAgent.match(/iPhone|iPad|iPod/i); }, Opera: function () { return navigator.userAgent.match(/Opera Mini/i); }, Windows: function () { return navigator.userAgent.match(/IEMobile/i); }, any: function () { return (isMobile.Android() || isMobile.BlackBerry() || isMobile.iOS() || isMobile.Opera() || isMobile.Windows()); } };

function removeClasses(el, class_name) {
	for (var i = 0; i < el.length; i++) {
		el[i].classList.remove(class_name);
	}
}

//активный пункт главного меню
$(function () {

	var pathname_url = window.location.pathname;
	var href_url = window.location.href;

	$(".header__menu-list li").each(function () {

		var link = $(this).find("a").attr("href");

		if (pathname_url == link || href_url == link) {

			$(this).addClass("active");

		}

	});

});

// main slider
$(".main__slider-inner").slick({

	// normal options...
	infinite: true,
	dots: true,
	arrows: true,
	autoplay: true,
	autoplaySpeed: 3000,
	fade: false,
	nextArrow: '<button type="button" class="slick-next main-next"></button>',
	prevArrow: '<button type="button" class="slick-prev main-prev"></button>',

	// the magic
	responsive: [{

		breakpoint: 769,
		settings: {
			arrows: false
		}

	}]
});

// main-categories
$(".main-categories__slider").slick({
	infinite: true,
	dots: false,
	arrows: true,
	autoplay: true,
	slidesToShow: 6,
	slidesToScroll: 1,
	swipeToSlide: true,
	autoplaySpeed: 3000,
	nextArrow: '<button type="button" class="slick-next main-categories-next"></button>',
	prevArrow: '<button type="button" class="slick-prev main-categories-prev"></button>',

	responsive: [
		{
			breakpoint: 1301,
			settings: {
				slidesToShow: 5
			}
		},
		{
			breakpoint: 1101,
			settings: {
				slidesToShow: 4
			}
		},
		{
			breakpoint: 801,
			settings: {
				slidesToShow: 3
			}
		},
		{
			breakpoint: 651,
			settings: {
				slidesToShow: 2
			}
		},
		{
			breakpoint: 451,
			settings: {
				slidesToShow: 1
			}
		}
	]
});

var btnContainer = document.getElementById("main-categories");
if (btnContainer) {
	var btns = btnContainer.getElementsByClassName("main-categories__cat-item");
	for (var i = 0; i < btns.length; i++) {
		btns[i].addEventListener("click", function () {
			var current = document.getElementsByClassName("show");
			current[0].className = current[0].className.replace(" show", "");
			this.className += " show";
		});
	}
}

// показать активный элемент при нажатии на слайдере
function filterSelection(c) {
	var x, i;
	x = document.getElementsByClassName("main-categories__slider-box");
	// Добавить класс "visible" (display:block) к отфильтрованным элементам и удалите класс "visible" из элементов, которые не выбраны
	for (i = 0; i < x.length; i++) {
		removeClass(x[i], "visible");
		if (x[i].className.indexOf(c) > -1) addClass(x[i], "visible");
	}
}

// Показать отфильтрованные элементы
function addClass(element, name) {
	var i, arr1, arr2;
	arr1 = element.className.split(" ");
	arr2 = name.split(" ");
	for (i = 0; i < arr2.length; i++) {
		if (arr1.indexOf(arr2[i]) == -1) {
			element.className += " " + arr2[i];
		}
	}
}

// Скрыть элементы, которые не выбраны
function removeClass(element, name) {
	var i, arr1, arr2;
	arr1 = element.className.split(" ");
	arr2 = name.split(" ");
	for (i = 0; i < arr2.length; i++) {
		while (arr1.indexOf(arr2[i]) > -1) {
			arr1.splice(arr1.indexOf(arr2[i]), 1);
		}
	}
	element.className = arr1.join(" ");
}

$(function () {

	//magnific popup ajax-types
	$('.ajax-popup-link').magnificPopup({
		type: 'ajax',
		closeOnBgClick: false,
		overflowY: 'scroll' // as we know that popup content is tall we set scroll overflow by default to avoid jump
	});

	// main-list-cats
	// var owl = $('.owl-carousel');
	// owl.owlCarousel({
	// 	loop: true,
	// 	items: 8,
	// 	// responsive: {
	// 	// 	0: {
	// 	// 		items: 1
	// 	// 	},
	// 	// 	600: {
	// 	// 		items: 3
	// 	// 	},
	// 	// 	960: {
	// 	// 		items: 5
	// 	// 	},
	// 	// 	1200: {
	// 	// 		items: 6
	// 	// 	}
	// 	// }
	// });
	// owl.on('mousewheel', '.owl-stage', function (e) {
	// 	if (e.deltaY > 0) {
	// 		owl.trigger('next.owl');
	// 	} else {
	// 		owl.trigger('prev.owl');
	// 	}
	// 	e.preventDefault();
	// });

	//main-reviews
	$(".main-reviews__slider").slick({
		infinite: true,
		dots: false,
		arrows: true,
		autoplay: true,
		slidesToShow: 1,
		slidesToScroll: 1,
		swipeToSlide: true,
		nextArrow: '<button type="button" class="slick-next main-reviews-next"></button>',
		prevArrow: '<button type="button" class="slick-prev main-reviews-prev"></button>',

		responsive: [{

			breakpoint: 769,
			settings: {
				arrows: false
			}

		}]
	});

	document.querySelector('.header__phone-icon-phone').onclick = function () {
		const elemOne = document.querySelector('.header__phone');
		elemOne.classList.toggle('activated');
		this.classList.toggle('activated');
	};

});

//change header
$(window).on("scroll", function () {
	var scrolled = $(this).scrollTop();
	if (scrolled > 170 && window.innerWidth > 1025) {
		$('.hidden').addClass('active');
	}
	if (scrolled <= 170 && window.innerWidth > 1025) {
		$('.hidden').removeClass('active');
		$('.hidden').removeClass('activated');
	}
});

// checked change header size (width)
window.onresize = function (event) {
	if (window.innerWidth <= 1024) {
		$('.hidden').addClass('active');
	} else {
		$('.hidden').removeClass('active');
	}
};
window.onresize();

//flipclock js
$(function () {
	const el = document.querySelector('.main-sale-timer__clock');

	var date = document.getElementById('main-clock');
	var textDate = date.textContent;

	const clock = FlipClock.make(el, new Date(textDate), {
		face: 'DayCounter',
		countdown: true,
		showSeconds: true,
		showLabels: true,
		language: 'ru-ru',
		autoStart: false
	});

	clock.start();
	// clock.stop();

});

// Получить кнопку:
buttonUp = document.getElementById("btn-up");

// Когда пользователь прокручивает вниз 170px от верхней части документа, покажите кнопку
window.onscroll = function () {
	scrollFunction()
};

function scrollFunction() {
	if (document.body.scrollTop > 170 || document.documentElement.scrollTop > 170) {
		buttonUp.style.display = "block";
	} else {
		buttonUp.style.display = "none";
	}
}

// Когда пользователь нажимает на кнопку, прокрутите до верхней части документа
// плавная прокрутка
// document.body.scrollTop // Для Safari
// document.documentElement.scrollTop // Для Chrome, Firefox, IE и Opera
const scrollToTop = () => {
	const c = document.documentElement.scrollTop || document.body.scrollTop;
	if (c > 0) {
		window.requestAnimationFrame(scrollToTop);
		window.scrollTo(0, c - c / 8);
	}
};
// scrollToTop();
