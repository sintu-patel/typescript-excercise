class Student {
    constructor(firstName, middleInitial, lastName) {
        this.firstName = firstName;
        this.middleInitial = middleInitial;
        this.lastName = lastName;
        this.fullName = firstName + " " + middleInitial + " " + lastName;
    }
}
var userName = new Student("Sintu", "Singh", "Patel");
console.log(userName.fullName);
//# sourceMappingURL=classes.js.map