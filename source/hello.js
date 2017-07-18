// Typescript hello world
function hello(value) {
    console.log('Helloworld ' + value * 2);
    return value * 2;
}
hello(25);
function overloadCode(x) {
    var testLength;
    if (x instanceof Array) {
        testLength = x.length;
    }
    if (typeof (x) === 'string' || x instanceof String) {
        testLength = x.length;
    }
    console.log('overloadCode ' + testLength);
    return testLength;
}
overloadCode('wwwdotcom');
overloadCode([1, 2, 3, 4, 5]);
// Classes
class ToDoApp {
    constructor() {
    }
}
//# sourceMappingURL=hello.js.map