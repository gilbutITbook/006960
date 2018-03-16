function memorize(f) {
	var cache = {};
	return function() {
		// 인수를 쉼표로 연결한 문자열을 만들어서, 캐시의 키 값으로 사용한다
		var key = "";
		for(var i=0; i<arguments.length; i++) key += arguments[i] + ",";
		if(cache[key] == undefined) cache[key] = f.apply(null,arguments);
		return cache[key];
	};
}
