function myConcat(separator) {
	var s = "";
	for(var i=1; i<arguments.length; i++) {
		s += arguments[i];
		if( i < arguments.length-1 ) s+= separator;
	}
	return s;
}
console.log(myConcat("/","apple","orange","peach"));  // → apple/orange/peach
