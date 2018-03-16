function getBlob(url, callback) {
	var req = new XMLHttpRequest();
	req.onload = function() {
		callback(req.response);
	};
	req.open("GET", url);
	req.responseType = "blob";
	req.send(null);
}
