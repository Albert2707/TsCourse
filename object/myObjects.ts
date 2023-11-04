/* const User = {
  name: "albert",
  email: "albert@gmail.com",
  isActive: true,
};

function createUser({ name: string, isPaid: boolean }) {}

let newUser={ name: "albert", isPaid: false, email:"ssd@.com" }
createUser(newUser);




//for return object from a functions
 function createCourse(): { name: string; price: number } {
  return {
    name: "Typescript",
    price: 399,
  };
}  */

// type aliases
/* type User ={
name:string;
email:string;
isActive: boolean
};
type Mystring =string

function createUser(user:User): User{
return {name:"",email:"",isActive:true}
}
createUser({name:"",email:"",isActive:true})
export {}; */

//readonly type and optional
type User = {
  //the next parameter is readonly
  readonly _id: string;
  name: string;
  email: string;
  isActive: boolean;
  //the next parameter is optional
  creditcardDetails?: number;
};

let myUser: User = {
  _id: "123",
  name: "sd",
  email: "sd",
  isActive: false,
};

type cardNumber = {
  cardnumber: string;
};
type cardDate = {
  cardDate: string;
};

//combine two types
type cardDetails = cardNumber &
  cardDate & {
    cvv: number;
  };

myUser.email = "sdsd@gmail.com";
//myUser._id= ":sd"

/* type Data = {
  id: number;
  name: string;
};
const albert: Data[] = [
  {
    id: 1,
    name: "albert",
  },
]; 

*/

export {};
