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
var a = [1,2,3];
permutation(a).forEach(function(v) { console.log(v); });
