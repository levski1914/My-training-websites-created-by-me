// const s = "Hello World!";
// console.log(s.split(''));




// console.log() ~ cout,print...
// variable [somenumber] = 'sometext' => this is adding a new element in array
// var.push('sometext')=>adding an element in the array on last row
// var.unshift('sometext')=>adding an element in the array in the beginning
// console.log(Array.isArray(sometext))=> check if the element is in array if yes=true, if no=false


//Arrays

// const person = {
//     firstName: 'John',
//     LastName: 'Doe',
//     age: 30,
//     hobbies: ['music', 'movies', 'sports'],
//     address: {
//         street: '50 main st',
//         city: 'Boston',
//         state: 'MA'
//     }
// }


// console.log(person)



// const todos = [{
//         id: 1,
//         text: 'Take out trash',
//         isCompleted: true
//     },
//     {
//         id: 2,
//         text: 'Meeting with boss',
//         isCompleted: true
//     },
//     {
//         id: 3,
//         text: 'Dentist appt',
//         isCompleted: false
//     }
// ];
// ***** LOOPS ****//
// for loop
// for (let i = 0; i < todos.length; i++) {
//     console.log(todos[i].text);

// }

// While loop
// let i = 0;
// while (i < 10) {
//     console.log('While Loop Number:${i}');
//     i++;

// }


// forEach, map, filter
// const todoCompleted = todos.filter(function(todo) {
//     return todo.isCompleted === true;
// }).map(function(todo) {
//     return todo.text;
// })

// console.log(todoCompleted)

// Conditioner

// const x = 6;
// const y = 11;

// if (x > 5 && y > 10) {
//     console.log('x is more then 5 or y is more than 10');
// }
// const x = 100;
// const color = x > 10 ? 'red' : 'blue';
// switch (color) {
//     case 'red':
//         console.log('color is red');
//         break;
//     case 'blue':
//         console.log('color is blue');
//         break;
//     default:
//         console.log('Color is NOT red or blue');
//         break;
// }

// function Person(firstName, lastName, dob) {
//     this.firstName = firstName;
//     this.lastName = lastName;
//     this.dob = new Date(dob);


// }

// Person.prototype.getBirthYear = function() {
//     return this.dob.getFullYear();
// }
// Person.prototype.getFullName = function() {
//     return `${this.firstName} ${this.lastName}`;
// }

// Class
// class Person {
//     constructor(firstName, lastName, dob) {
//         this.firstName = firstName;
//         this.lastName = lastName;
//         this.dob = new Date(dob);
//     }
//     getBirthYear() {
//         return this.dob.getFullYear();
//     }
//     getFullName() {
//         return `${this.firstName} ${this.lastName}`;
//     }
// }


// //Instantiate object
// const person1 = new Person('John', 'Doe', '4-3-1980');
// const person2 = new Person('Mary', 'Smith', '3-6-1970');

// console.log(person1);


// Single element
// console.log(document.getElementById('my-form'));

// Multiple element
// console.log(document.getElementsByClassName('item'));

const myForm = document.querySelector('#my-form');
const nameInput = document.querySelector('#name');
const emailInput = document.querySelector('#email');
const msg = document.querySelector('.msg');
const userList = document.querySelector('#users');

myForm.addEventListener('submit', onSubmit);

function onSubmit(e) {
    e.preventDefault();
    if (nameInput.value === '' || emailInput.value === '') {
        msg.classList.add('error');
        msg.innerHTML = 'Please enter all fields';
        setTimeout(() => msg.remove(), 3000);
    } else {
        const li = document.createElement('li');
        li.appendChild(document.createTextNode(`${nameInput.value}:${emailInput.value}`));

        userList.appendChild(li);
        // Clear the fields
        nameInput.value = '';
        emailInput.value = '';
    }
}