function memorize(f) {
	var cache = {};
	return function(x) {
		if(cache[x] == undefined) cache[x] = f(x);
		return cache[x];
	}
}
function isPrime(n) {
	if(n<2) return false;
	var m = Math.sqrt(n);
	for(var i=2; i<=m; i++)if( n%i == 0 ) return false;
	return true;
}
var isPrime_memo = memorize(isPrime);
var N = 1000;
for(var i=2; i<=N; i++) isPrime_memo(i);
// 쌍둥이 소수의 목록을 출력
for(var i=2; i+2<=N; i++) {
	if( isPrime_memo(i) && isPrime_memo(i+2) ) console.log(i + "," + (i+2));
}
