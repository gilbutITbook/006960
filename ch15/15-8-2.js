var promise = new Promise(function(resolve, reject) {
    setTimeout(function() {
        var name = prompt("이름을 입력하십시오");
        resolve(name);
    }, 1000);
});
promise.then(function(name) {
    console.log("안녕하세요, " + name + " 님!") ;
});
