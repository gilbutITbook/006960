// 예제 14-5의 부드러운 스크롤은 때때로 스크롤 후에 요소가 표시 영역 상단을
// 조금 벗어납니다. 이를 scrollIntoView 메서드를 사용하여 정확히
// 요소 상단에 위치하게끔 바로잡았습니다.
function smoothScroll(id,durationTime) {
	var TIME_INTERVAL = 30;
	var element = document.getElementById(id);
	if( !element ) return;
	var ey = element.getBoundingClientRect().top;
	var dy = ey*TIME_INTERVAL/durationTime;
	var direction = dy>0 ? 1 : -1;
	var timer = setInterval(function() {
		scrollBy(0,dy); ey -= dy;
		if( direction*ey <= 0 ) {
			clearInterval(timer);
			element.scrollIntoView();
		}
	}, TIME_INTERVAL);
}
