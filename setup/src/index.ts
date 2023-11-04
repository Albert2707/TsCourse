/* class User {
  public email: string;
  private name: string;
  private readonly city: string = "Jaipur";
  constructor(email: string, name: string) {
    this.email = email;
    this.name = name;
    this.city;
  }
}
 */

class User {
  protected _courseCount = 1;
  readonly city: string = "Jaipur";
  constructor(
    public email: string,
    public name: string //private userId: string
  ) {}

  private deleteToken() {
    console.log("Token deleted");
  }

  get getAppleEmail(): string {
    return `apple${this.email}`;
  }

  get courseCount(): number {
    return this._courseCount;
  }
  // the setters don't return a type, they just set the value'
  set courseCount(courseNum) {
    if (courseNum <= 1) {
      throw new Error("Course count should be greater than 1");
    }
    this._courseCount = courseNum;
  }
}

class SubUser extends User{
    isFamily: boolean = true;
    changeCourseCount(){
        this._courseCount= 5
    }
}
const albert = new User("albert@gmail", "Albert Joan");
//albert.name
