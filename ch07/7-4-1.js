function fact(n) {
    var k = 1, i = 1;
    while( i < n ) {
        console.log("i = " + i + ", k = " + k );
        k *= (++i);

    }
    console.log("i = " + i + ", k = " + k );
    return k;
}

fact(5);
