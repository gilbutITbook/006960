function Person(name,age) {
	var _name = name;
	var _age  = age;
	return {
		getName: function() { return _name; },
		getAge:  function() { return _age; },
		setAge:  function(x) { _age = x; }
	};
}
var person = Person("Tom",18);
console.log(person.getName()); // → Tom
console.log(person.getAge());  // → 18
person.setAge(19);
console.log(person.getAge());  // → 19
