var Company;
(function (Company) {
    class Employee {
        constructor(firstName, lastName) {
            this.firstName = firstName;
            this.lastName = lastName;
            console.log('employee');
        }
        getEmployee() {
            return this.employee = this.firstName + ' ' + this.lastName;
        }
    }
    class Employer {
        constructor() {
            var employee = new Employee('Sintu', 'Singh');
            console.log(employee.getEmployee());
        }
        getAll() {
            console.log('test');
        }
    }
    Company.Employer = Employer;
})(Company || (Company = {}));
var obj = new Company.Employer();
obj.getAll();
//# sourceMappingURL=modules.js.map