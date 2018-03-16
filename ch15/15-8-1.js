var promise = new Promise(function(resolve, reject) {
    setTimeout(function() {
        console.log("A");
        resolve();
    }, 1000);
});
promise.then(function() {
    console.log("B");
});
