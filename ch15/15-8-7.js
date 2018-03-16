function buyAsync(name, mymoney) {
    return new Promise(function(resolve, reject) {
        setTimeout(function() {
            var payment= parseInt(prompt(`${name}님, 지불하고자 하는 금액을 입력하십시오`));
            var balance = mymoney - payment;
            if( balance > 0 ) {
                console.log(`${name}: ${payment}원을 지불했습니다. `);
                resolve(balance);
            } else {
                reject(`${name}: 잔액은 ${balance}원 입니다. 구매할 수 없습니다`);
            }
        }, 1000);
    });
}
Promise.all([
    buyAsync("Tom", 500),
    buyAsync("Huck", 600),
    buyAsync("Becky", 1000)
])
    .then(function(balance) {
        console.log(balance);
    })
    .catch(function(error) {
        console.log(error);
    });
// → Tom: 200원을 지불했습니다.
// → Becky: 500원을 지불했습니다.
// → Huck: 300원을 지불했습니다.
// → [300, 300, 500]
