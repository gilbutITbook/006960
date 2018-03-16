function elt(name, attributes){
	var node = document.createElement(name);
	if( attributes ){
		for(var attr in attributes){
			if(attributes.hasOwnProperty(attr)){
				node.setAttribute(attr,attributes[attr]);
			}
		}
	}
	for(var i=2; i<arguments.length; i++){
		var child = arguments[i];
		if( typeof child == "string" ){
			child = document.createTextNode(child);
		}
		node.appendChild(child);
	}
	return node;
}
