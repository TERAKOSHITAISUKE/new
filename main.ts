let yourName: string = 'Quil';
let yourAge: number = 35;
let yourJob = true;

class YourPerson {
    constructor(public name: string, protected age: number) {
    }
    incrementAge() {
        this.age += 1;
    }
    greeting(this: YourPerson) {
        console.log(`I am ${this.name}. I am ${this.age} years old`)
    }
}

class Job extends YourPerson {
    get subject(): string {
        if (!this._subject) {
            throw new Error('There is no subject')
        }
        return this._subject
    }
    set subject(value: string) {
        this._subject = value;
    }
    constructor(name: string, age: number, public email: string, private _subject: string) {
        super(name, age);
    }
    greeting(this: Job) {
        console.log(`I am ${this.name}. I am ${this.age} years old. My email address is ${this.email}`)
    }
}
