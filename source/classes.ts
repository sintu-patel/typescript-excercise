class Student {
    public fullName: string;
    constructor(firstName:string,  middleName:string, lastName:string) {
        this.fullName = firstName + " " + middleName + " " + lastName;
    }
    attendClass() {
    	console.log(this.fullName + ' attend the class');
    }
}

// Inheritance
class Trainee extends Student {
	id: number;
	constructor(id:number, firstName:string,  middleName:string, lastName:string) {
		super(firstName, middleName, lastName);
	}
	attendClass() {
		super.attendClass()
	}
}

var userName = new Student("Sintu", "Singh", "Patel");
userName.attendClass();
var trainee = new Trainee(1001, 'Sintu', 'Patel', 'Singh');
trainee.attendClass();
