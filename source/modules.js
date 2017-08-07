var Company;
(function (Company) {
    var Employee = (function () {
        function Employee(firstName, lastName) {
            this.firstName = firstName;
            this.lastName = lastName;
            console.log('employee');
        }
        Employee.prototype.getEmployee = function () {
            return this.employee = this.firstName + ' ' + this.lastName;
        };
        return Employee;
    }());
    var Employer = (function () {
        function Employer() {
            var employee = new Employee('Sintu', 'Singh');
            console.log(employee.getEmployee());
        }
        Employer.prototype.getAll = function () {
            console.log('test');
        };
        return Employer;
    }());
    Company.Employer = Employer;
})(Company || (Company = {}));
var obj = new Company.Employer();
obj.getAll();
//# sourceMappingURL=modules.js.map