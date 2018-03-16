onmessage = function(e) {
	var p = e.data;
	var outputImage = weightedAverageFilter(
		p.image, p.n, p.Weight, p.keepBrightness, p.offset
	);
	postMessage(outputImage);
};
function weightedAverageFilter(image, n, Weight, keepBrightness, offset) {
	var width = image.width, height = image.height;
	var outputImage = new ImageData(width, height);
	for(var x=0; x<width; x++) {
		for(var y=0; y<height; y++) {
			var iR = 4*(width*y+x);
			for(var i=0; i<3; i++) {
				var average = 0, weightSum = 0;
				for(ix=-n; ix<=n; ix++) {
					var xp = x + ix;
					if(xp<0 || xp>=width) continue;
					for(iy=-n; iy<=n; iy++) {
						var yp = y + iy;
						if(yp<0 || yp>=height) continue;
						var w = Weight[iy+n][ix+n];
						weightSum += w;
						average += w*image.data[4*(width*yp+xp)+i];
					}
				}
				if(keepBrightness) {
					average /= weightSum;
				}
				outputImage.data[iR+i] = average + offset;
			}
			outputImage.data[iR+3] = image.data[iR+3];
		}
	}
	return outputImage;
}
