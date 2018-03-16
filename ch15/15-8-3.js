var promise = new Promise(function(resolve, reject) {
    setTimeout(function() {
        var n = parseInt(prompt("10 미만의 숫자를 입력하십시오"));
        if( n <= 10 ) {
            resolve(n);
        } else {
            reject(`오류 :  ${n}은 10이상입니다`);
        }
    }, 1000);
});
promise
    .then(function(num) {
        console.log(`2^${num} = ${Math.pow(2,num)}`);
    })
    .catch(function(error) {
        console.log(error);
    });
