interface Point {
  x: number;
  y: number;
}

const pt: Point = { x: 23, y: 345 };

interface Person {
  readonly id: number;
  first: string;
  last: string;
  nickname?: string;
  //method
  //sayHi: () => string;
  sayHi(): string;
}

/* const thomas: Person = {
  first: "John",
  last: "Doe",
  nickname: "Tommy",
  id: 1223,
  sayHi: () => "hello",
}; */

interface Product {
  name: string;
  price: number;
  applyDiscount(discountl: number): number;
}

const shoes: Product = {
  name: "Blue shoes",
  price: 100,
  applyDiscount(discount: number) {
    const newPrice = this.price * (1 - discount);
    this.price = newPrice;
    return this.price;
  },
};

interface Dog {
  name: string;
  age: number;
}

interface Dog {
  breed: string;
  bark(): string;
}
const elton: Dog = {
  name: "Elton",
  age: 0.5,
  breed: "sheperd",
  bark: () => {
    return "woof woof";
  },
  /*   bark(){
    return"woow"
  } */
};

interface ServiceDog extends Dog {
  job: "drug sniffer" | "bomb" | "guide dog";
}

const chewy: ServiceDog = {
  name: "Chewy",
  age: 4.5,
  breed: "lab",
  bark: () => "Brak",
  job: "guide dog",
};

interface Human {
  name: string;
}

interface Employee {
  readonly id: number;
  email: string;
}

interface Engineer extends Human, Employee {
  level: string;
  languages: string[];
}

const pierre: Engineer = {
  name: "Pierre",
  id: 1223,
  email: "salsdv@gmail.com",
  level: "senior",
  languages: ["js", "typescript"],
};

// we can't do this with interfaces
//type Color ="red"| "blue"


// we can't do this with types
/* interface Chicken {
  breed: string;
}
interface Chicken {
  egg: string;
} */


