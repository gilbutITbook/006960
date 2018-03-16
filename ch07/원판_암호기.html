<!DOCTYPE html>
<html lang="ko">
<head>
	<meta charset="UTF-8">
	<title>원판 암호기</title>
	<script>
        window.onload = function() {
            var enscriptor = Enscriptor();
			// 평문을 암호화
            document.getElementById("cipher").onclick = function() {
                var keyword = document.getElementById("keyword").value;
                var plaintext = document.getElementById("plaintext").value;
                var ciphertext = document.getElementById("ciphertext");
                ciphertext.value = enscriptor.encrypt(plaintext,keyword,true);
            };
			// 암호문을 복호화
            document.getElementById("decipher").onclick = function() {
                var keyword = document.getElementById("keyword").value;
                var plaintext = document.getElementById("plaintext");
                var ciphertext = document.getElementById("ciphertext").value;
                plaintext.value = enscriptor.encrypt(ciphertext,keyword,false);
            };
        };
		/*
		 * 함호기 객체를 생성하는 팩토리 함수
		 *   obj.chars: 원판에서 사용할 문자 배열
		 *   obj.nchars: 원판에서 사용하는 문자 배열의 길이 ( chars의 길이 )
		 *   obj.numberOf(ch): 문자 ch가 배열 chars의 몇 번째 요소인지를 반환하는 메서드
		 *   obj.shift(ch,n): 문자 ch를 n만큼 이동시켰을 때 가리키는 chars 배열의 요소
		 *   obj.encrypt(text,keyword,encription): 원판 암호기로 암호화 / 복호화 하는 메서드
		 */
        function Enscriptor() {
            var obj = {};
            var N_ALPHABET = 26;	// 알파벳 문자의 개수
            var extraCharactors = [" ",".","?","!","%","#","'","&","$","@",":","/"];
			// 특수문자 배열
            obj.chars = [];
			// chars 배열에 알파벳 소문자와 대문자를 추가
            for(var c="a".charCodeAt(0); c<="z".charCodeAt(0); c++) {
                obj.chars.push(String.fromCharCode(c));
            }
            for(var c="A".charCodeAt(0); c<="Z".charCodeAt(0); c++) {
                obj.chars.push(String.fromCharCode(c));
            }
			// chars 배열에 숫자를 추가
            for(var d=0; d<=9; d++) {
                obj.chars.push(d.toString());
            }
			// chars 배열에 특수문자를 추가
            for(var j=0; j<extraCharactors.length; j++) {
                obj.chars.push(extraCharactors[j]);
            }
			// chars 배열의 길이
            obj.nchars = obj.chars.length;
			// chars배열에서의 문자 ch의 요소 번호를 구하는 메서드 ( ch를 chars배열에서 찾을 수 없을 때에는 null을 반환함)
            obj.numberOf = function(ch) {
                var code = ch.charCodeAt(0);
                if( code>="a".charCodeAt(0) && code<="z".charCodeAt(0)) {
                    return code - "a".charCodeAt(0);
                } else if(code>="A".charCodeAt(0) && code<="Z".charCodeAt(0)) {
                    return N_ALPHABET + code - "A".charCodeAt(0);
                } else if(code>="0".charCodeAt(0) && code<="9".charCodeAt(0)) {
                    return 2*N_ALPHABET + code - "0".charCodeAt(0);
                } else {
                    for(var k=0; k<extraCharactors.length; k++) {
                        if( ch == extraCharactors[k] ) {
                            return 2*N_ALPHABET + 10 + k;
                        }
                    }
                    return null;
                }
            };
			// 문자ch를 n만큼 이동시킨 문자를 반환하는 메서드 ( ch를 chars배열에서 찾을 수 없을 때에는 null을 반환함)
            obj.shift = function(ch,n) {
                var num = this.numberOf(ch);
                if( num == null ) return ch;
                num = (num + n + this.nchars)%this.nchars;
                return this.chars[num];
            };
			// 원판 암호기로 암호화를 하는 메서드
			//   text: 암호화 / 복호화를 할 문자열
			//   keyword: 키워드
			//   encription: true 면 암호화, false면 복호화
            obj.encrypt = function(text,keyword,encription) {
                var cipherText = "";
                var nkey = keyword.length;
                for(var i=0, ikey=0; i<text.length; i++, ikey++) {
                    ikey %= nkey;
                    var nshift = this.numberOf(keyword[ikey]);
                    if(!encription) nshift *= -1;
                    cipherText += this.shift(text[i],nshift);
                }
                return cipherText;
            };
            return obj;
        }
	</script>
	<style>
		p { font-size:
				smaller; }
		input { height:
				20px; }
		#plaintext,#ciphertext { width:
				500px; }
	</style>
</head>
<body>
    <h2>원판 암호기를 활용한 암호화</h2>
    <p>키워드 : <input type="text" id="keyword"></p>
    <p>평문 : <input type="text" id="plaintext"></p>
    <p>암호문 : <input type="text" id="ciphertext"></p>
    <input type="button" id="cipher" value="암호화">
    <input type="button" id="decipher" value="복호화">
</body>
</html>