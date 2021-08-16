//magnific popup ajax-types
$('.ajax-popup-link').magnificPopup({
	type: 'ajax',
	closeOnBgClick: false,
	overflowY: 'scroll' // as we know that popup content is tall we set scroll overflow by default to avoid jump
});