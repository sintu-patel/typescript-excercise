var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var Student = (function () {
    function Student(firstName, middleName, lastName) {
        this.fullName = firstName + " " + middleName + " " + lastName;
    }
    Student.prototype.attendClass = function () {
        console.log(this.fullName + ' attend the class');
    };
    return Student;
}());
// Inheritance
var Trainee = (function (_super) {
    __extends(Trainee, _super);
    function Trainee(id, firstName, middleName, lastName) {
        return _super.call(this, firstName, middleName, lastName) || this;
    }
    Trainee.prototype.attendClass = function () {
        _super.prototype.attendClass.call(this);
    };
    return Trainee;
}(Student));
var userName = new Student("Sintu", "Singh", "Patel");
userName.attendClass();
var trainee = new Trainee(1001, 'Sintu', 'Patel', 'Singh');
trainee.attendClass();
//# sourceMappingURL=classes.js.map