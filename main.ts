import { SSL_OP_NO_TLSv1_1 } from "constants";

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

const one = SSL_OP_NO_TLSv1_1;