"use strict";
class Player {
  static description = "Player In Out Game";
  //set privatee field with # simbol
  #score = 0;
  #numLives = 10;
  constructor(first, last) {
    this.first = first;
    this.last = last;
    this.#secret();
  }

  static randomPlayer() {
    return new Player("Andy", "Samberg");
  }
  //getter
  get fullName() {
    return `${this.first} ${this.last}`;
  }

  //setters
  set fullName(newName) {
    const [first, last] = newName.split(" ");
    this.first = first;
    this.last = last;
  }

  // getter
  get score() {
    return this.#score;
  }

  //setters
  set score(newScore) {
    if (newScore < 0) throw new Error("Score must be positive");
    this.#score = newScore;
  }
  updateScore(newScore) {
    //this function is to set a value of private field
    this.#score = newScore;
  }

  taunt() {
    console.log("BOOYAH!");
  }

  loseLife() {
    this.numLives -= 1;
  }

  // simbol # become private any method;
  #secret() {
    console.log("secreet");
  }
}

class AdminPlayer extends Player {
  constructor(first, last,powers) {
    super(first, last);
    this.powers = powers;
  }
  isAdmin = true;
}

const admin = new AdminPlayer("Albert", "Agramonte",["delete","update"]);
/* const player1 = new Player("blue", "steele");
player1.taunt();
console.log(player1.first);
console.log(player1.last);
player1.updateScore(10);
player1.score;
player1.fullName = "Albert Joan";
 */
/* const player2 = new Player("Chasrlie","brown");
player2.taunt();
 */
