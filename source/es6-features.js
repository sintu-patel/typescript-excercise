// Default parameters
var link = function(height = 50, color = 'red') {
  ...
}

// Template literals or interpolation
var name = `Your name is ${first} ${last}.`
var url = `http://localhost:3000/api/messages/${id}`

// Multi-line Strings in ES6. Simply use bacticks
var fourAgreements = `You have the right to be you.
    You can only be you when you do your best.`;

// Destructuring Assignment in ES6
const data = {
	username: 'Sintu',
	password: "****"
};
var {username, password} = data;

// Arroy functions

$('.btn').click((event) =>{
  this.sendData()
})

// Promises in ES6
setTimeout(function(){
  console.log('Yay!')
}, 1000)

//to

var wait1000 =  new Promise(function(resolve, reject) {
  setTimeout(resolve, 1000)
}).then(function() {
  console.log('Yay!')
})

// Block-Scoped Constructs Let and Const

let a = 10;
a = 20;
const b = 10;

// Classes in ES6
class a {
	constructor(props) {
		console.log('class');
	}
}
// Modules
module.exports = {
  port: 3000,
  getAccounts: function() {
    ...
  }
}