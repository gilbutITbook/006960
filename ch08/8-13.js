function fibonacci(n) {
	if(n<2) return n;
	if(!(n in fibonacci)) {
		fibonacci[n] = fibonacci(n-1) + fibonacci(n-2);
	}
	return fibonacci[n];
}
for(var i=0; i<=20; i++) {
   console.log(("  "+i).slice(-2)+":"+fibonacci(i));
}
