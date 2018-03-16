/*--------------------------------------------------------------------------------*
 * 화면을 구성하는 요소를 생성하고,  요소에 이벤트 리스너 등록하기
 *--------------------------------------------------------------------------------*/
function createPainter(parent, width, height) {
	// 타이틀
	var title = elt("h2", null, "Simple Painter");
	// canvas요소와 랜더링 컨텍스트 가져오기
	var [canvas,ctx] = createCanvas(width, height);
	// 도구 막대 : controls 객체의 프로퍼티를 순회하면서 등록한다
	var toolbar = elt("div", null);
	for(var name in controls) {
		toolbar.appendChild(controls[name](ctx));
	}
	toolbar.style.fontSize = "small";
	toolbar.style.marginBottom = "3px";
	// toolbar 요소와 canvas 요소를, 지정한 요소(parent)의 자식 요소로 삽입한다
	parent.appendChild(elt("div", null, title, toolbar, canvas));
}
function createCanvas(canvasWidth,canvasHeight) {
	var canvas = elt("canvas", { width: canvasWidth, height: canvasHeight });
	var ctx = canvas.getContext("2d");
	canvas.style.border = "1px solid gray";
	canvas.style.cursor = "pointer";
	// 그리기 도구를 mousedown 이벤트 리스너로 등록한다
	canvas.addEventListener("mousedown", function(e) {
		// Firefox 대책 : 색상 선택시, change 이벤트를 강제로 발생시킨다
		var event = document.createEvent("HTMLEvents");
		event.initEvent("change", false, true);
		colorInput.dispatchEvent(event);
		// 선택한 그리기 도구를 초기화
		paintTools[paintTool](e,ctx);
	}, false);
	canvas.addEventListener("dragover", function(e) {
		e.preventDefault();
	}, false);
	canvas.addEventListener("drop", function(e) {
		var files = e.dataTransfer.files;
		if( files[0].type.substring(0,6) !== "image/" ) return;
		loadImageURL(ctx, URL.createObjectURL(files[0]));
		e.preventDefault();
	}, false);
	return [canvas,ctx];
}
/*--------------------------------------------------------------------------------*
 * 유틸리티
 *--------------------------------------------------------------------------------*/
// * element의 왼쪽 위 모서리에서 마우스의 상대적 위치를 가져온다
function relativePosition(event, element) {
	var rect = element.getBoundingClientRect();
	return { x: Math.floor(event.clientX - rect.left),
			 y: Math.floor(event.clientY - rect.top ) };
}
/*--------------------------------------------------------------------------------*
 * 그리기 도구
 * paintTools 메서드는 그리기에 사용하는 도구입니다.
 * 그리기 도구는 그리기를 위한 각종 설정과 이벤트 리스너 등록을 담당합니다.
 * 각 메서드는 controls.painter를 통해 자동으로 도구 선택 메뉴에 추가됩니다.
 * 메뉴에서 선택한 도구는, 변수 paintTool에 저장되어 그림을 그릴 때 사용됩니다.
 * 그리기 도구를 추가하려면, paintTools 메서드에 새로운 그리기 도구를 추가하십시오.
 *--------------------------------------------------------------------------------*/
var paintTool; // 선택된 그리기 도구 (controls.painter로 선택)
var paintTools = Object.create(null); // 그리기 도구 객체
// * brush : 브러시 도구
paintTools.brush = function(e, ctx) {
	ctx.lineCap   = "round";
	ctx.lineJoin  = "round";
	// Canvas 화면을 img에 저장한다
	var img = ctx.getImageData(0, 0, ctx.canvas.width, ctx.canvas.height);
	// canvas 요소에 대한, 마우스 포인터의 상대 위치를 구한다
	var p = relativePosition(e, ctx.canvas);
	// 경로를 정의한다
	ctx.beginPath();
	ctx.moveTo(p.x,p.y);
	// 드래그 이벤트 리스너를 등록한다
	setDragListeners(ctx, img, function(q) {
		ctx.lineTo(q.x,q.y); // 경로를 추가한다
		ctx.stroke (); // 경로를 그린다
	});
};
// * line : 선 그리기 도구
paintTools.line = function(e, ctx) {
	ctx.lineCap = "round";
	var img = ctx.getImageData(0, 0, ctx.canvas.width, ctx.canvas.height);
	var p = relativePosition(e, ctx.canvas);
	setDragListeners(ctx, img, function(q) {
		ctx.beginPath();
		ctx.moveTo(p.x,p.y); ctx.lineTo(q.x,q.y);
		ctx.stroke();
	});
};
// * circle : 동그라미 그리기 도구
paintTools.circle = function(e, ctx) {
	var img = ctx.getImageData(0, 0, ctx.canvas.width, ctx.canvas.height);
	var p = relativePosition(e,ctx.canvas);
	setDragListeners(ctx, img, function(q) {
		var dx = q.x - p.x;
		var dy = q.y - p.y;
		var r = Math.sqrt(dx*dx+dy*dy);
		ctx.beginPath();
		ctx.arc(p.x, p.y, r, 0, 2*Math.PI, false);
		ctx.stroke();
	});
};
// * circleFill : 채워진 동그라미 그리기 도구
paintTools.circleFill = function(e, ctx) {
	var img = ctx.getImageData(0, 0, ctx.canvas.width, ctx.canvas.height);
	var p = relativePosition(e,ctx.canvas);
	setDragListeners(ctx, img, function(q) {
		var dx = q.x - p.x;
		var dy = q.y - p.y;
		var r = Math.sqrt(dx*dx+dy*dy);
		ctx.beginPath();
		ctx.arc(p.x, p.y, r, 0, 2*Math.PI,false);
		ctx.fill();
	});
};
/*--------------------------------------------------------------------------------*
 * 그리기 도구의 유틸리티
 *--------------------------------------------------------------------------------*/
 // * 마우스를 드래그할 때의 이벤트 리스너를 등록한다
 function setDragListeners(ctx,img,draw) {
 	// mousemove 이벤트 리스너를 등록한다
 	var mousemoveEventListener = function(e) {
		// 저장한 이미지를 읽어들인다
		ctx.putImageData(img, 0, 0);
		// 지정한 그리기 함수 draw로 마우스 위치까지 그린다
		draw(relativePosition(e, ctx.canvas));	
 	};
 	document.addEventListener("mousemove", mousemoveEventListener, false);
 	// mouseup 이벤트 리스너를 등록한다
	document.addEventListener("mouseup", function(e) {
		// 저장한 이미지를 읽어들인다
		ctx.putImageData(img, 0, 0);
		// 지정한 그리기 함수 draw로 마우스 위치까지 그린다
		draw(relativePosition(e, ctx.canvas));
		//　mousemove, mouseup 이벤트 리스너를 제거한다
		document.removeEventListener("mousemove", mousemoveEventListener, false);
		document.removeEventListener("mouseup", arguments.callee, false);
	},false);
 }
/*--------------------------------------------------------------------------------*
 * 컨트롤러
 * 각종 설정을 변경하는 제어판을 정의합니다.
 * 각 컨트롤러는 controls 객체의 메서드로 등록되어 있습니다.
 * 각 메서드는 필요한 HTML 요소를 생성해서 반환하며, 이벤트 리스너를 등록합니다.
 * 각 메서드는, createPainter를 통해 자동으로 도구 막대에 추가됩니다.
 * 새로운 컨트롤을 추가하려면, controls 객체에 새로운 메서드를 추가하십시오.
 *--------------------------------------------------------------------------------*/
var controls = Object.create(null);	// 컨트롤러 객체
var colorInput; // Firefox의 change 이벤트 대책. input[type="color"] 객체를 저장한다
// * 그리기 도구 선택
controls.painter = function(ctx) {
	var DEFAULT_TOOL = 0;
	var select = elt("select", null);
	var label = elt("label", null, "그리기 도구 : ", select);
	for(var name in paintTools) {
		select.appendChild(elt("option", {value: name}, name));
	}
	select.selectedIndex = DEFAULT_TOOL;
	paintTool = select.children[DEFAULT_TOOL].value;
	select.addEventListener("change", function(e) {
		paintTool = this.children[this.selectedIndex].value;
	},false);
	return label;
};
// * 색상 선택 (선과 채우기를 모두 설정함 → 필요하면 별도의 컨트롤로 만드세요)
controls.color = function(ctx) {
	var input = colorInput = elt("input", {type: "color"});
	var label = elt("label", null, " 색：", input);
	input.addEventListener("change", function (e) {// 참고 : Firefox에서는 change 이벤트가 발생하지 않습니다.
		ctx.strokeStyle = this.value;
		ctx.fillStyle = this.value;
	},false);
	return label;
};
// * 선의 너비 선택
controls.brushsize = function(ctx) {
	var size = [1,2,3,4,5,6,8,10,12,14,16,20,24,28];
	var select = elt("select", null);
	for(var i=0; i<size.length; i++) {
		select.appendChild(elt("option",{value:size[i].toString()},size[i].toString()));
	}
	select.selectedIndex = 2;
	ctx.lineWidth = size[select.selectedIndex];
	var label = elt("label",null," 선의 너비：",select);
	select.addEventListener("change", function(e) {
		ctx.lineWidth = this.value;
	},false);
	return label;
};
// * 투명도 선택
controls.alpha = function(ctx) {
	var input = elt("input", {type:"number",min:"0", max:"1",step:"0.05",value:"1"});
	var label = elt("label", null, " 투명도：", input);
	input.addEventListener("change", function(e) {
		ctx.globalAlpha = this.value;
	},false);
	return label;
};
controls.save = function(ctx) {
	var input = elt("input", {type: "button", value:"저장"});
	var label = elt("label", null, " ", input);
	input.addEventListener("click", function(e) {
		var dataURL = ctx.canvas.toDataURL();
		open(dataURL, "save");
	}, false);
	return label;
};
var filterTools = Object.create(null);
controls.filter = function(ctx) {
	var DEFAULT_FILTER = 0;
	var select = elt("select",null);
	var label  = elt("label",null, " ",select);
	select.appendChild(elt("option",{value: "filter"},"필터"));
	for(var name in filterTools) {
		select.appendChild(elt("option",{value: name},name));
	}
	select.selectedIndex = DEFAULT_FILTER;
	select.addEventListener("change", function(e) {
		var filterTool = this.children[this.selectedIndex].value;
		var inputImage = ctx.getImageData(0,0,ctx.canvas.width,ctx.canvas.height);
		// 필터 도구를 실행하고, 사용한 워커를 가져온다
		var worker = filterTools[filterTool](inputImage);
		// 워커의 작업 결과를, 메시지에서 가져와서 그린다
		worker.onmessage = function(e) {
			var outputImage = e.data;
			ctx.putImageData(outputImage,0,0);
			worker.terminate();
		};
		select.selectedIndex = DEFAULT_FILTER;
	}, false);
	return label;
};
// * 블러 필터
filterTools.blur = function(inputImage) {
	var size = 2;
	var W = [];
	for(var i=0; i<=2*size; i++) {
		W[i] = [];
		for(var j=0; j<=2*size; j++) {
			W[i][j] = 1;
		}
	}
	var worker = new Worker("weightedaverage.js");
	worker.postMessage({
		image: inputImage, n: size, Weight: W, keepBrightness: true, offset: 0
	});
	return worker;
};
// * 샤프 필터
filterTools.sharp = function(inputImage) {
	var W = [[ 0,-1, 0],
		     [-1, 5,-1],
		     [ 0,-1, 0]];
	var worker = new Worker("weightedaverage.js");
	worker.postMessage({
		image: inputImage, n: 1, Weight: W, keepBrightness: false, offset: 0
	});
	return worker;
};
// * 엠보싱 필터
filterTools.emboss = function(inputImage) {
	var W = [[-1, 0, 0],
		     [ 0, 0, 0],
		     [ 0, 0, 1]];
	var worker = new Worker("weightedaverage.js");
	worker.postMessage({
		image: inputImage, n: 1, Weight: W, keepBrightness: false, offset: 128
	});
	return worker;
};
// * 테두리 강조
filterTools.edgeDetection = function(inputImage) {
	var W = [[-1,-1,-1],
		     [-1, 8,-1],
		     [-1,-1,-1]];
	var worker = new Worker("weightedaverage.js");
	worker.postMessage({
		image: inputImage, n: 1, Weight: W, keepBrightness: false, offset: 0
	});
	return worker;
};
// 파일 입력 컨트롤
controls.file = function(ctx) {
	var input = elt("input", {type: "file"});
	var label = elt("label", null, " ", input);
	input.addEventListener("change", function(e) {
		if(input.files.length == 0) return;
		var reader = new FileReader();
		reader.onload = function() {
			loadImageURL(ctx, reader.result);
		};
		reader.readAsDataURL(input.files[0]);
	}, false);
	return label;
};
// url을 ctx에 그린다 (그림이 Canvas의 경계선에 내접하도록 한다)
function loadImageURL(ctx, url) {
	var image = document.createElement("img");
	image.onload = function() {
		var factor = Math.min(
			ctx.canvas.width/this.width, ctx.canvas.height/this.height
		);
		var wshift = (ctx.canvas.width  - factor*this.width )/2;
		var hshift = (ctx.canvas.height - factor*this.height)/2;
		var savedColor = ctx.fillStyle;
		ctx.fillStyle = "white";
		ctx.fillRect(0,0,ctx.canvas.width,ctx.canvas.height);
		ctx.drawImage(image, 0, 0,
			this.width, this.height, wshift, hshift,
			this.width*factor, this.height*factor
		);
		ctx.fillStyle = savedColor;
	};
	image.src = url;
}
