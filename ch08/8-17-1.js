function compose(f,g) {
	return function(x) {
		return f(g(x));
	};
}
var square = function(x) { return x*x; };
var add1 = function(x) { return x+1; };
var h = compose(square,add1);
console.log(h(2));
