function hanoi(n,a,b,c) {
	if( n<1 ) { return; }
	hanoi(n-1,a,c,b);
	console.log(n + " 번째 원반: " + a + " -> " + c);
	hanoi(n-1,b,a,c);
}
hanoi(4,"A","B","C");
