// Function overload
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
//# sourceMappingURL=function-overloading.js.map