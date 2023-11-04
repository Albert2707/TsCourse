function addTwo(num: number): number {
  return num + 2;
  //return "hello";
}

function getUpper(val: string) {
  return val.toUpperCase();
}

function signUpUser(name: string, email: string, isPaid: boolean) {}

//parametros opcionales o con valores por defecto
let loginUser = (name: string, email: string, isPaid: boolean = false) => {};

let myValue = addTwo(5);
getUpper("Albert");
signUpUser("albert", "albert@gmail,com", true);
loginUser("namne", "hola");

/* function getValue(myVal:number):boolean{
if(myVal > 5){
  return true
}
return "200 ok"
} */

const getHello = (s: string): string => {
  return "";
};

const heros = ["thor", "spiderman", "ironman"];
//const heros = [1, 2, 3];

heros.map((hero): string => "hero is " + hero);

//void when de function not return Nothing
function consoleError(errmsg: string): void {
  console.log(errmsg);
}

function handleError(errmsg: string): never {
throw new Error(errmsg);
}
export {};
