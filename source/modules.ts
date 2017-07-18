module Company {
	class Employee {
		firstName: string;
		lastName: string;
		employee: string;
		constructor(firstName: string, lastName: string) {
			this.firstName = firstName;
			this.lastName = lastName;
			console.log('employee')
		}
		getEmployee() {
			return this.employee = this.firstName + ' ' + this.lastName;
		}
	}

	export class Employer {
		constructor() {
			var employee = new Employee('Sintu', 'Singh');
			console.log(employee.getEmployee());
		}
		getAll() {
			console.log('test');
		}
	}
}

var obj = new Company.Employer();
obj.getAll();