function testGen <T> (value: T): T {
	return value;
}

testGen(2);
testGen('ww');

// generics class

class KeyValuePairs <TKey, TValue> {
	jsonData;
	constructor(
		public key: TKey,
		public value: TValue
	) {
		this.jsonData = {
			one: value,
			two: key
		}
		console.log(this.jsonData);
	}
}

var genClass = new KeyValuePairs('x', 2);