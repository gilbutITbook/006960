function* createNumbers(from,to) {
	while( from <= to ) yield from++;
}
var iter = createNumbers(10,20);
for(var v of iter) console.log(v);  // 10 ~ 20 사이의 정수를 순서대로 출력한다
