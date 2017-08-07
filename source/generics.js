function testGen(value) {
    return value;
}
testGen(2);
testGen('ww');
// generics class
var KeyValuePairs = (function () {
    function KeyValuePairs(key, value) {
        this.key = key;
        this.value = value;
        this.jsonData = {
            one: value,
            two: key
        };
        console.log(this.jsonData);
    }
    return KeyValuePairs;
}());
var genClass = new KeyValuePairs('x', 2);
//# sourceMappingURL=generics.js.map