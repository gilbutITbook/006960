function fact(n) {
	var k = 1, i = 1;
	while( i < n ) {
		k *= (++i);
	}
	return k;
}
fact(5); // -> 120
