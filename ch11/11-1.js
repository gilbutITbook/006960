// 테스트용 함수 (첫 번째 인수로 제너레이터의 참조가 필요함)
function sleepAndError(g,n) {
	setTimeout(function() {
		for(var i=0; i<n; i++) console.log(i); // do something
		g.throw(new Error("오류가 발생했습니다"));
	},1000);
}
// callback 함수를 실행하는 함수 : callback 함수가 비동기 처리 중에 발생시킨 예외도 잡아서 처리함
function run(callback, ...argsList) {
	var g = (function* (cb, args) {
		try {
			yield cb(g, ...args);
		} catch(e) {
			console.log("예외를 잡음 -> " + e);
		}
	})(callback, argsList);
	g.next();
}
// 실행하기
run(sleepAndError,10);
