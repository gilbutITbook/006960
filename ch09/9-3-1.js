function mixin(target, source) {
	for(var property in source) {
		if(source.hasOwnProperty(property)) {
			target[property] = source[property];
		}
	}
	return target;
}
var obj1 = { a: 1, b: 2 };
var obj2 = { b: 3, c: 4 };
var obj = mixin(obj1, obj2);
console.log(obj);
