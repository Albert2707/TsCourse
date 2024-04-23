"use strict";
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
    constructor(first, last, _score) {
        this.first = first;
        this.last = last;
        this._score = _score;
    }
    secretMethod() {
        console.log("secretMethod");
    }
    get fullName() {
        return `${this.first} ${this.last}`;
    }
    get score() {
        return this._score;
    }
    set score(newScore) {
        if (newScore < 0)
            throw new Error("Score must be more than zero");
        this._score = newScore;
    }
}
class SuperPlayer extends Player {
    constructor() {
        super(...arguments);
        this.isAdmin = true;
    }
    maxScore() {
        this._score = 23;
    }
}
const elton = new Player("Elton", "Steele", 100);
// implement
class Bike {
    constructor(color) {
        this.color = color;
    }
}
class Jacket {
    constructor(brand, color) {
        this.brand = brand;
        this.color = color;
    }
    print() {
        console.log(`${this.brand}, ${this.color}`);
    }
}
const bike1 = new Bike("red");
const jacket1 = new Jacket("Gucci", "green");
class Employee {
    constructor(first, last) {
        this.first = first;
        this.last = last;
    }
    greet() {
        console.log("HELLO!");
    }
}
class FullTimeEmployee extends Employee {
    constructor(first, last, salary) {
        super(first, last);
        this.first = first;
        this.last = last;
        this.salary = salary;
    }
    getPay() {
        return this.salary;
    }
}
class PartTimeEmployee extends Employee {
    constructor(first, last, hourlyRate, hoursWorked) {
        super(first, last);
        this.first = first;
        this.last = last;
        this.hourlyRate = hourlyRate;
        this.hoursWorked = hoursWorked;
    }
    getPay() {
        return this.hourlyRate * this.hoursWorked;
    }
}
const betty = new FullTimeEmployee("Betty", "White", 95000);
console.log(betty.getPay());
