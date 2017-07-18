// Typescript hello world

function hello(value:number): number{
	console.log('Helloworld ' + value*2);
	return value*2;
}

hello(25);

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

// Classes

class ToDoApp {
	constructor() {
		
	}
}