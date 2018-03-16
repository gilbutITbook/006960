function memorize(f) {
	var cache = {};
	return function(x) {
		if(cache[x] == undefined) cache[x] = f(x);
		return cache[x];
	};
}
var fibonacci = memorize(function(n) {
	if(n<2) return n;
	return fibonacci(n-1) + fibonacci(n-2);
});
for(var i=0; i<=20; i++) {
	console.log(("  "+i).slice(-2)+":"+fibonacci(i));
}
