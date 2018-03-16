function sumArray(a) {
	var sum = 0;
	for(var i=0; i < a.length; i++) {
		sum += a[i];
	}
	return sum;
}
var a = [3,5,1,2,6,7];
console.log(sumArray(a)); // -> 24

// i < a.length 부분을 아래 코드로 대체해도 동일한 값이 나옴
// i <= a.length -1

