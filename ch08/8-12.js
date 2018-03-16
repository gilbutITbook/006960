var Module = Module || {};
(function(_Module) {
	var name = "NoName";	// 프라이빗 변수
	function getName() {	// 프라이빗 함수
		return name;
	}
	_Module.showName = function() {	// 퍼블릭 함수
		console.log(getName());
	};
	_Module.setName = function(x) {	// 퍼블릭 함수
		name = x;
	};
})(Module);
Module.setName("Tom");
Module.showName();  // → Tom
