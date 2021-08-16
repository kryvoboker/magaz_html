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