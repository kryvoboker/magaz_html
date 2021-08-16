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