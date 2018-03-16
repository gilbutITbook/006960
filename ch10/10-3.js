/*
	예 10-2 배열로 구성된 모든 순열 목록을 가져오는 함수
*/
function permutation(a) {
	// 순열 목록(list)를 각 순열의 요소(element)로 추가하면서 갱신해 나간다
	return a.reduce(function(list,element) {
		var newlist = []; //이 배열에 새로운 순열 목록을 저장함
		// 각 순열(seq)별로 처리
		list.forEach(function(seq) {
			// seq 배열의 끝에서 두 번째 요소에서부터 앞에서 두 번째 요소에 이르기까지 차례대로 element를 삽입한다. 그 후에 각각을 newlist에 추가한다.
			for(var i=seq.length; i>=0; i--) {
				var newseq = [].concat(seq);	// newseq에 seq의 복사본을 저장
				newseq.splice(i, 0, element); // newseq의 i번째 요소 앞에 element를 삽입
				newlist.push(newseq); // newseq을 newlist의 끝에 추가
			}
		});
		return newlist; // 새로운 순열 목록을 다음 요소로 전달
	},[[]]/* 초깃값은 빈 배열이 저장된 배열 */);
}
/*
	예제 10-3 3 x 3 사이즈의 모든 마방진 구하기
*/
//이 예제는 예제 10-2의 permutation 함수를 사용합니다
var N = 3;
// 1부터 NxN의 요소를 가진 배열 a를 생성
for(var i=1, a=[]; i<=N*N; i++) a = a.concat(i);
// NxN인 2차원 배열을 생성
var m = new Array(N);
for(var i=0; i<N; i++) m[i] = new Array(N);
// a의 순열을 생성하고, 각각의 순열 p로 2차원 배열 m을 만든다. 그리고 m이 마방진인지를 판정한다
permutation(a).forEach(function(p) {
	// 순열 (1차원 배열) p를 2차원 배열 m에 복사
	for(var i=0, index=0; i<N; i++) {
		for(var j=0; j<N; j++) {
			m[i][j] = p[index++];
		}
	}
	// 마방진이면 출력
	if( isMagicSquare(m) ) {
		m.forEach(function(v) { console.log(v); });
		console.log("—————");
	}
});
// 정방 행렬 m이 마방진인지를 판정하는 함수
function isMagicSquare(m) {
	var n = m.length;
	var s = n*(n*n+1)/2;	// 행과 열, 대각선의 합이 이 값일 경우에는 마방진
	var sumDiagonalR = 0; // 오른쪽 대각선 방향의 합
	var sumDiagonalL = 0;	// 왼쪽 대각선 방향의 합
	for(var i=0; i<n; i++) {
		var sumRow    = 0;	// 행의 합 
		var sumColumn = 0;	// 열의 합 
		for(var j=0; j<n; j++) {
			sumRow    += m[i][j];
			sumColumn += m[j][i]; 
		}
		if( sumRow != s || sumColumn != s ) return false;
		sumDiagonalR += m[i][i];
		sumDiagonalL += m[i][n-i-1];
	}
	if( sumDiagonalR != s || sumDiagonalL != s) return false;
	return true;
}
