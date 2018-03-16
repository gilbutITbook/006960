function Ellipse(a, b) {
    this.a = a;  // 장축 방향 반지름
    this.b = b;  // 단축 방향 반지름
}
// 타원의 넓이를 계산하는 메서드
Ellipse.prototype.getArea = function() {
    return Math.PI*this.a*this.b;
};
// Object.prototype.toSting를 덮어쓴다
Ellipse.prototype.toString = function() {
    return "Ellipse " + this.a + " " + this.b;
};

function Circle(r) {
    this.a = r;
    this.b = r;
}

Circle.prototype = new Ellipse();
Circle.prototype.constructor = Circle;

var circle = new Circle(2);

console.log(circle.getArea());   // → 12.566370614359172
console.log(circle.toString());  // → Circle 2 2
