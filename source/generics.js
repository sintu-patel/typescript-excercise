function testGen(value) {
    return value;
}
testGen(2);
testGen('ww');
// generics class
class KeyValuePairs {
    constructor(key, value) {
        this.key = key;
        this.value = value;
        this.jsonData = {
            one: value,
            two: key
        };
        console.log(this.jsonData);
    }
}
var genClass = new KeyValuePairs('x', 2);
//# sourceMappingURL=generics.js.map