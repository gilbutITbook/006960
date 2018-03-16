var text = "투명 드래곤이 [પ નુલુંગ લસશ] 하고 울부짖었다";
var new_text = text.replace(/[\u0A80-\u0AFF]+/g, function(match) {
	var s = "";
	for(var i=1; i<match.length-1; i++) {
		s += String.fromCodePoint(match.charCodeAt(i) + 0x1eb81);
	}
	return s;
});
console.log(new_text);
