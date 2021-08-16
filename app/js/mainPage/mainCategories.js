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