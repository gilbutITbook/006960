Array.prototype[Symbol.for("shuffle")] = function() {
	var a = this;
	var m = a.length, t, i;
	while(m) { // m이 0이 되면 멈춘다
		i = Math.floor(Math.random()*m--);	// m 미만의 인덱스 i를 무작위로 골라서 하나씩 삭제한다
		t = a[m]; a[m] = a[i]; a[i] = t;	// a[i]와 a[m]을 교환한다
	}
	return this;
};
var array = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
console.log(array[Symbol.for("shuffle")]());
