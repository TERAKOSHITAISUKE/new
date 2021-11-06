let yourName: string = 'Quil';
let yourAge: number = 35;
let yourJob = true;

class YourPerson {
    constructor(public name: string, public age: number) {
    }
    greeting(this: YourPerson) {
        console.log(`I am ${this.name}. I am ${this.age} years old`)
    }
}

const myPerson = new YourPerson('Quil', 15);
myPerson.greeting();