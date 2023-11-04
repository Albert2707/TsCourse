interface User {
  readonly dbId: number;
  email: string;
  userId: number;
  googleId?: string;
  //startTrail: () => string;
  startTrail(): string;
  getCoupon(couponname: string, value: number): number;
}

interface User{
    githubToken: string
}

interface Admin extends User{
role: "admin" | "ta" | "learner"
}

const albert: Admin = {
  dbId: 22,
  email: "as",
  userId: 1,
  role:"admin",
  githubToken:"git hub",
  startTrail: () => "Trial started",
  getCoupon: (name: "albert20", off: 10) => 10,
};

albert.email = "sdfc.com";
// can't modify a readonly property
//albert.dbId =33
