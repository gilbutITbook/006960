function compaireFunc(key) {
	return function(a,b) {
		return a[key] - b[key];
	};
}
var persons = [{name:"Tom",age:17}, {name:"Huck",age:18}, {name:"Becky",age:16}];
persons.sort(compaireFunc("age"));  // → (3) [{…}, {…}, {…}]
