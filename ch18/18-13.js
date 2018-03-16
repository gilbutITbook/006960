class Circle {
    // 생성자를 사용한 초기화
    constructor(center, radius) {
        this.center = center;
        this.radius = radius;
    }
    // prototype 메서드
    area() {
        return Math.PI*this.radius*this.radius;
    }
}

var c = new Circle({x: 0, y: 0}, 2);
console.log(c.area());  // → 12.566370614359172
