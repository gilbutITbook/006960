function getScrollTop() {
	if( window.pageYOffset !== undefined ) {
		return window.pageYOffset;
	} else {
		return document.documentElement.scrollTop || document.body.scrollTop;
	}
}
function getScrollLeft() {
	if( window.pageXOffset !== undefined ) {
		return window.pageXOffset;
	} else {
		return document.documentElement.scrollLeft || document.body.scrollLeft;
	}
}
