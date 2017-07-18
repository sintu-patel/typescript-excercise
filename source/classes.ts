class Student {
    fullName: string;
    constructor(public firstName, public middleInitial, public lastName) {
        this.fullName = firstName + " " + middleInitial + " " + lastName;
    }
}

var userName = new Student("Sintu", "Singh", "Patel");
console.log(userName.fullName);
