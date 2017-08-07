// Typescript hello world

function hello(value:number): number{
	let tupleArray: [string, number];
	tupleArray = ['Hello', 2, 3, 'www'];

	console.log('Helloworld ' + value*2);
	console.log(tupleArray);
	return value*2;
}

hello(25);