function linearSearch(x, a) {
	var i=0;
	var n = a.length;
	while( i < n && x > a[i] ) i++;
	if( x == a[i] ) return i;
	return null;
}
var a = [2,4,7,12,15,21,34,35,46,57,70,82,86,92,99];
console.log(linearSearch(35,a)); // -> 7
