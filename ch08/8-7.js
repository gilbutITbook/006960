function makeCounter() {
    var count = 0;
    return function() {
        return count++;
    };
}

var counter = makeCounter();

console.log(counter());    // → 0
console.log(counter());    // → 1
console.log(counter());    // → 2
