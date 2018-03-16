function mixin(target, source) {
	for(var property in source) {
		if(source.hasOwnProperty(property)) {
			target[property] = source[property];
		}
	}
	return target;
}
