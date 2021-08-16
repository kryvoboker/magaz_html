//flipclock js
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