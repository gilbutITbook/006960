function binaryOperation(a, b, operator) {
	switch(operator) {
      case "+": return a + b;
      case "-": return a - b;
      case "*": return a * b;
      case "/": return a / b;
      case "%": return a % b;
      case "^": return Math.pow(a, b);
      default: return NaN;
	}
}
console.log(binaryOperation(2,3,"+"));
console.log(binaryOperation(2,3,"-"));
console.log(binaryOperation(2,3,"*"));
console.log(binaryOperation(2,3,"^"));
console.log(binaryOperation(2,3,"A"));
