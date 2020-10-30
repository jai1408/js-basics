console.log('Hello World !!');

/*const name = 'jai';
const age = 30;
console.log(name);
console.log(`My name is ${name} and My age is ${age}`);
const hello = `My name is ${name} and My age is ${age}`;
console.log(hello);

let str = 'Hello World';
let arr = str.split(" ");
console.log(arr);

console.log('---------------------------------------------------------------------');

const person = {
    name: 'JAI',
    age: 26,
    hobbies: ['teaching', 'cricket', 'technology'],
    address: {
        addressLine1: '401, Anitha Avenue',
        addressLine2: 'Vinayaka Nagar, Hafeezpet',
        city: 'Hyderabad',
        state: 'Telangana',
        zip: 500049
    }
};
person.hobbies.push('travelling')
person.address.city = 'Delhi';
console.log(person.address.city);
console.log(person.hobbies[3]);

console.log('---------------------------------------------------------------------');

// todo: arrays in notes
const todos = [
    {
        id: 1,
        text: 'learn Javascript',
        isComplete: true
    },
    {
        id: 2,
        text: 'learn AngularJS',
        isComplete: false
    },
    {
        id: 3,
        text: 'learn ReactJS',
        isComplete: true
    }
];

console.log(todos);
const todosJson = JSON.stringify(todos);
console.log(todosJson);

console.log('---------------------------------------------------------------------');

// todo: for, while loop in notes
for (let i = 0; i < todos.length; i++) {
    console.log(todos[i].text);
}

let i = 0;
while (i < todos.length) {
    console.log(todos[i].isComplete);
    i++;
}

for (let todo of todos) {
    console.log(todo.id);
}

console.log('---------------------------------------------------------------------');

// todo: forEach, map, filter in notes
todos.forEach(function (todo) {
    console.log(todo.isComplete);
});

const todosisComplete = todos.map(todo => todo.isComplete);
console.log(todosisComplete);

const todosText = todos.map(function (todo) {
    return todo.text;
});
console.log(todosText);

const todosCompleted = todos.filter(function (todo) {
    return todo.isComplete === true;
}).map(function (todo) {
    return todo.text;
});
console.log(todosCompleted);

console.log('---------------------------------------------------------------------');

// ? functions

function addNums(num1, num2) {
    return num1 + num2;
}
console.log(addNums(11, 21));

const multiplyNums = (num1 = 2, num2 = 3) => { return num1 * num2 };
console.log(multiplyNums()); // * take num1=2 and num2=3
console.log(multiplyNums(45, 45));

console.log('---------------------------------------------------------------------');

*/

/**
 * ! OOPS in Javascript
 * ! not used since ES6
function Person(fname, lname, age, dob) {
    this.fname = fname;
    this.lname = lname;
    this.age = age;
    this.dob = new Date(dob);
    this.getBirthYear = () => this.dob.getFullYear(); // ! used as prototype
    this.getFullName = () => `${this.fname} ${this.lname}`; // ! used as prototype

    Person.prototype.getBirthYear = function(){
    return this.dob.getFullYear();
    }
Person.prototype.getFullName = function(){
    return `${this.fname} ${this.lname}`;
    }

const person1 = new Person('Jai', 'Mishra', 27, '03-04-1960');
console.log(person1);
console.log(person1.getBirthYear());
console.log(person1.getFullName());

}*/

/*class Person {
    constructor(fname, lname, age, dob) {
        this.fname = fname;
        this.lname = lname;
        this.age = age;
        this.dob = new Date(dob);
    }
    getBirthYear() {
        return this.dob.getFullYear();
    }

    getFullName() {
        return `${this.fname} ${this.lname}`;
    }
}

const person1 = new Person('Jai', 'Mishra', 27, '03-04-1960');
console.log(person1);
console.log(person1.getBirthYear());
console.log(person1.getFullName());

console.log('---------------------------------------------------------------------');

console.log(window);

// ! ELEMENT SELECTORS

// ! Single Element Selectors
console.log(document.getElementById('my-form'));
console.log(document.querySelector('.container'));
// ! Multiple Element Selectors
console.log(document.querySelectorAll('.item'));
console.log(document.getElementsByTagName('li'));
console.log(document.getElementsByClassName('items'));

console.log('---------------------------------------------------------------------');

const myForm = document.querySelector('#my-form');
const nameInput = document.querySelector('#name');
const emailInput = document.querySelector('#email');
const usersUnorderedList = document.querySelector('#users');
const msg = document.querySelector('.msg');

myForm.addEventListener('click', (event) => {
    event.preventDefault();
    if (nameInput.value === '' && emailInput.value === '') {
        msg.classList.add('error');
        msg.innerHTML = 'Please fill the required fields !'
        setTimeout(() => msg.remove(), 3000);
    }
    else {
        const li = document.createElement('li');
        li.appendChild(document.createTextNode(`${nameInput.value} ${emailInput.value}`));
        usersUnorderedList.appendChild(li);

        nameInput.value = '';
        emailInput.value = '';
    }
})

console.log('---------------------------------------------------------------------');

const numbers = [1, 2, 3];
const newNumbers = [...numbers, 3, 4, 5,];
console.log(newNumbers);

const obj = {
    id: 1,
    name: 'jai'
};

const newObj = { ...obj, name: 'Mani', age: 12 };
console.log(newObj);

const filter = (...args) => {
    return args.filter(x => x % 2 == 0);
}
console.log(filter(1, 2, 3, 4, 5, 6, 7, 8));*/

var x = 1;
a();
b();
console.log(x);

function a() {
    var x = 10;
    console.log(x);
}

function b() {
    var x = 100;
    console.log(x);
}