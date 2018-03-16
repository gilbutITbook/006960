function stringToArray(s) {
    return s.match(/[\uD800-\uDBFF][\uDC00-\uDFFF]|[^\uD800-\uDFFF]/g) || [];
}
stringToArray("📖 모던 자바스크립트 입문");
