/* class Player {
  // modifiers field
  public readonly first: string;
  public readonly last: string;
  private score: number = 0;
  constructor(first: string, last: string) {
    this.first = first;
    this.last = last;
  }

  private secretMethod() {
    console.log("secretMethod");
  }
} */

//shorter way yo declare properties
class Player {
  // modifiers field
  /*   public readonly first: string;
  public readonly last: string; */
  // private score: number = 0;
  constructor(
    public first: string,
    public last: string,
    protected _score: number
  ) {}

  private secretMethod() {
    console.log("secretMethod");
  }

  get fullName(): string {
    return `${this.first} ${this.last}`;
  }
  get score(): number {
    return this._score;
  }

  set score(newScore: number) {
    if (newScore < 0) throw new Error("Score must be more than zero");
    this._score = newScore;
  }
}

class SuperPlayer extends Player {
  public isAdmin: boolean = true;
  maxScore() {
    this._score = 23;
  }
}

const elton = new Player("Elton", "Steele", 100);

interface Colorful {
  color: string;
}

interface Printable {
  print(): void;
  //print: ()=> void
}
// implement
class Bike implements Colorful {
  constructor(public color: string) {}
}

class Jacket implements Colorful, Printable {
  constructor(public brand: string, public color: string) {}

  print() {
    console.log(`${this.brand}, ${this.color}`);
  }
}

const bike1 = new Bike("red");
const jacket1 = new Jacket("Gucci", "green");

abstract class Employee {
  constructor(public first: string, public last: string) {}
  // this method doesn't exist but the class tha call this abstract class
  // Have to had it in it.
  abstract getPay(): number;
  greet() {
    console.log("HELLO!");
  }
}

class FullTimeEmployee extends Employee {
  constructor(
    public first: string,
    public last: string,
    private salary: number
  ) {
    super(first, last);
  }

  getPay(): number {
    return this.salary;
  }
}

class PartTimeEmployee extends Employee {
  constructor(
    public first: string,
    public last: string,
    private hourlyRate: number,
    private hoursWorked: number
  ) {
    super(first, last);
  }
  getPay(): number {
    return this.hourlyRate * this.hoursWorked;
  }
}

const betty = new FullTimeEmployee("Betty", "White", 95000);
console.log(betty.getPay());
