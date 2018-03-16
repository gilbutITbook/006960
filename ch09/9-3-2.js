function mixin(target, source) {
	for(var property in source) {
		if(source.hasOwnProperty(property)) {
			target[property] = source[property];
		}
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
