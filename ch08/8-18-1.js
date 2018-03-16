function compose(f,g) {
	return function() {
		return f.call(this,g.apply(this,arguments));
	};
}
var square = function(x) { return x*x; };
var add = function(x,y) { return x+y; };
var h = compose(square,add);
console.log(h(2,3));
