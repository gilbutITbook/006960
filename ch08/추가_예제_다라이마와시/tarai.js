/*--------------------------------------------------------------------------
 * <memorize (여러개의 인수에 대응하기)의 사용 예>
 * 여러 개의 인자를 지원하는 메모이제이션 함수인 memorize 테크닉을 적용한 타라이 마와시 함수를 소개하겠습니다.
 * 타라이 마와시 함수는 다음과 같은 재귀함수입니다.
 * 　　tarai(x,y,z) =
 *				x<=y 이면 y
 * 			    그렇지 않으면, tarai(tarai(x-1, y, z), tarai(y-1, z, x), tarai(z-1 x, y))
 * 타라이 마와시 함수는 일본의 다케우치 이쿠오 선생이 처음 만든 함수로서, 시스템에 상당한 부하를 줍니다
 * 많은 개발자들은 30년 전부터 그러한 성질을 활용하여 프로그래밍 언어의 성능 테스트에 활용해 왔습니다
 * tarai함수는 인수에 따라 재귀호출을 하는 횟수가 매우 늘어납니다. 따라서 계산량이 매우 많습니다.
 * 이 예에서 x = 14, y = 8, z = 0 이면 재귀 호출하는 총 횟수가 699579977이 됩니다.
 * 이 tarai함수에 메모이제이션 테크닉을 활용하면 실행 속도를 높일 수 있습니다. 
 * 이 예를 필자의 개발환경에 설치된 구글 크롬의 콘솔에서 실행한 결과는 다음과 같습니다.
 * 　　　　 간단한 tarai함수 (simpletarai) : 4706ms
 * 　　　　 메모이제이션 테크닉을 적용한 tarai함수 (memotarai) : 2ms
 * (역자 주)
 * 일본어를 조금이라도 아는 한국인이라면 그 이름에서 짐작할 수 있겠지만, 타라이 마와시라는 단어는 '대야 돌리기' 라고 직역할 수 있습니다.
 * '대야 돌리기'는 재귀 함수의 호출과 관계가 없을 것 같지만, 이 단어에는 다른 뜻이 있습니다.
 * 일본어에서 '대야 돌리기' 는 '귀찮은 일을 다른 사람에게 떠넘김' 이라는 뜻이 있습니다.
 * 그 뜻을 한국어로 번역하자면 '뺑뺑이 돌리기 함수'라고 할 수 있을 것입니다.
 * 도움을 주신 김태욱 님께 감사의 말씀을 전합니다.
 * 감사합니다.
 *--------------------------------------------------------------------------*/
function memorize(f) {
	var cache = {};
	return function() {
		// 인수를 쉼표로 연결한 문자열을 만들어서, 캐시의 키 값으로 사용한다
		var key = "";
		for(var i=0; i<arguments.length; i++) key += arguments[i] + ",";
		if(cache[key] == undefined) cache[key] = f.apply(null,arguments);
		return cache[key];
	};
}
// 메모이제이션 테크닉을 적용한 tarai함수
var memotarai = memorize(function(x,y,z) {
	return x <= y ? y :
		memotarai(memotarai(x-1,y,z),memotarai(y-1,z,x),memotarai(z-1,x,y));
});
console.time("momorized");
console.log(memotarai(14,8,0));
console.timeEnd("momorized");
// 간단한 tarai함수
var simpletarai = function(x,y,z) {
	return x <= y ? y :
		simpletarai(simpletarai(x-1,y,z),simpletarai(y-1,z,x),simpletarai(z-1,x,y));
};
console.time("simple");
console.log(simpletarai(14,8,0));
console.timeEnd("simple");
