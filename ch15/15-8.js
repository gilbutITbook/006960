function sleep(callback) {
    setTimeout(function() {
        callback();
    },1000);
}
sleep(function() {
    console.log("A");
    sleep(function() {
        console.log("B");
        sleep(function() {
            console.log("C");
        });
    });
});
// A, B, C 의 순서대로 표시된다
