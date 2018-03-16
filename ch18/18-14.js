class Person {
    // 생성자를 사용한 초기화
    constructor(name) {
        this.name = name;
    }
    // prototype 메서드
    get name() {
        return this._name;
    }
    set name(value) {
        this._name = value;
    }
    sayName() {
        console.log(this.name);
    }
}

var person = new Person("Tom");
console.log(person.name);  // → Tom
person.name = "Huck";
console.log(person.name);  // → Huck
person.sayName();          // → Huck
