function mixin(target, source) {
	var keys = Object.keys(source);
	for(var i=0; i<keys.length; i++) {
		var descriptor = Object.getOwnPropertyDescriptor(source, keys[i]);
		Object.defineProperty(target, keys[i], descriptor);
	}
	return target;
}
var person1 = {
	_name: "Tom",
	get name() {
		return this._name;
	}
};
var person2 = {};
mixin(person2, person1);
person2.name = "Huck";
console.log(person2.name);
console.log(person2);
