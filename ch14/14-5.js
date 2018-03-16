function smoothScroll(id,durationTime) {
	var TIME_INTERVAL = 30;
	var element = document.getElementById(id);
	if( !element ) return;
	var ey = element.getBoundingClientRect().top;
	var dy = ey*TIME_INTERVAL/durationTime;
	var direction = dy>0 ? 1 : -1;
	var timer = setInterval(function() {
		scrollBy(0,dy); ey -= dy;
		if( direction*ey <= 0 ) clearInterval(timer);
	}, TIME_INTERVAL);
}
