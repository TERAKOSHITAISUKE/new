// type Human = {
//     name: string
//     age: number
// }

interface Human {
  readonly name: string;
  age: number;
  greeting(message: string): void;
}

class Developer implements Human {
  constructor(public name: string, public age: number) { }
  greeting(message: string): void {
    console.log(message);
  }
}

const user: Human = new Developer("Quil", 30);
