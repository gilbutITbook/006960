function* fibonacci() {
	var fn1 = 0, fn2 = 1;
	while(true) {
		var fnew = fn1 + fn2;
		fn1 = fn2;
		fn2 = fnew;
		reset = yield fn1;
		if(reset) {
			fn1 = 0; fn2 = 1;
		}
	}
}
var iter = fibonacci();
for(var i=0; i<10; i++) {
	console.log(iter.next().value); // 1, 1, 2, 3, 5, ..., 55 순서대로 출력한다
}
console.log(iter.next().value);      // → 89
console.log(iter.next(true).value);  // → 1
console.log(iter.next().value);      // → 1
console.log(iter.next().value);      // → 2
