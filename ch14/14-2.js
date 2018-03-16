function textContent(element) {
	var content = element.textContent;
	if( content !== undefined ) return content;
	return element.innerText;
}
