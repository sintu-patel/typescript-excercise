function greeter(person) {
    return "Hello, " + person.firstName + " " + person.lastName;
}
var user = { firstName: "Sintu", lastName: "Patel" };
document.body.innerHTML = greeter(user);
var XX = (function () {
    function XX(speed, name) {
        this.speed = speed;
        this.name = name;
    }
    XX.prototype.start = function () {
        console.log('Car ' + this.name + ' speed is ' + this.speed);
    };
    return XX;
}());
var testCar = new XX(1000, 'BMW');
testCar.start();
//# sourceMappingURL=interface.js.map