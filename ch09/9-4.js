function mixin(target, source) {
	var keys = Object.keys(source);
	for(var i=0; i<keys.length; i++) {
		var descriptor = Object.getOwnPropertyDescriptor(source, keys[i]);
		Object.defineProperty(target, keys[i], descriptor);
	}
	return target;
}
