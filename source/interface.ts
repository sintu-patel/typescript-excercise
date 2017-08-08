interface Person {
    firstName: string;
    lastName: string;
}

function greeter(person: Person) {
    return "Hello, " + person.firstName + " " + person.lastName;
}

var user = { firstName: "Sintu", lastName: "Patel" };

document.body.innerHTML = greeter(user);

// Interface with class

interface Car {
	speed: number,
	name: string,
	start()
}

class XX implements Car {
	speed: number
	name: string
	start() {
		console.log('Car ' + this.name + ' speed is ' + this.speed);
	}
	constructor(speed:number, name: string){
		this.speed = speed;
		this.name = name;
	}
}

var testCar = new XX(1000, 'BMW');
testCar.start();