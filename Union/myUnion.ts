let score: number | string = 33;

score = 44;

score = "55";

type User = {
  name: string;
  id: number;
};

type Admin = {
  username: string;
  id: number;
};

let albert: User | Admin = {
  name: "Albert",
  id: 23,
};

albert = { username: "hc", id: 23 };

// the parameter id can be a number or a string
/* function getDbId(id: number | string) {
  // making some API calls
  console.log(`DB id is ${id}`);
} */

getDbId(12);
getDbId("12");

function getDbId(id: number | string) {
  if (typeof id === "string") {
    id.toLowerCase();
  }
}

//array

const data: number[] = [1, 2, 3];
const data2: string[] = ["2"];
const data3: (string | number | boolean)[] = ["2", 3, true];

// the variable only can has this value
let pi: 3.14 = 3.14;
let seatAllotment: "aisle" | "window" | "middle";

function printAge(age: number | string): void {
  console.log(`You are ${age} years old`);
}

function calculateTax(price: number | string, tax: number) {
  if (typeof price === "string") {
    price = parseFloat(price.replace("$", ""));
  }
  return price * tax;
}



//const stuff: (number | string )[]= [1,2,""]




export {};
