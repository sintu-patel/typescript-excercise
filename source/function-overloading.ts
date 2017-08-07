// Function overload

function overloadCode(x:string):number;
function overloadCode(x:any[]):number;
function overloadCode(x:(string | any[])):number {
	var testLength:number;
	if (x instanceof Array) {
		testLength = x.length;
	}
	if (typeof(x) === 'string' || x instanceof String) {
		testLength = x.length;
	}
	console.log('overloadCode ' + testLength);
	return testLength;
}

overloadCode('wwwdotcom');
overloadCode([1,2,3,4,5])
