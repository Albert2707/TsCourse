const nums: Array<number> = [];

const inputEl = document.querySelector<HTMLInputElement>("#username")!;
console.dir(inputEl);
inputEl.value = "sd";

const btn = document.querySelector<HTMLButtonElement>(".btn");

function Numberidentity(item: number): number {
  return item;
}

function stringidentity(item: string): string {
  return item;
}

function booleanidentity(item: boolean): boolean {
  return item;
}

// function identity(item: any): any{

// }

// Generics functions
interface Cat {
  color: string;
  age: number;
}
function identity<T>(item: T): T {
  return item;
}

/* identity<boolean>(true);
identity<number>(7);
identity<string>("as");
identity<Cat>({ color: "negro", age: 2 }); */

const getRandomElement = <T>(list: T[]): T => {
  const randIdx = Math.floor(Math.random() * list.length);
  return list[randIdx];
};

console.log(getRandomElement<string>(["a", "b", "d", "sd"]));
console.log(getRandomElement<number>([1, 2, 3, 4, 5]));

getRandomElement(["a", "b", "d", "sd"]);

function merge<T extends object, U extends object>(object1: T, object2: U) {
  return { ...object1, ...object2 };
}

const comboObj1 = merge({ name: "Albert" }, { pets: ["hello", "legles"] });

const comboObj2 = merge<{ name: string }, { pets: string[] }>(
  { name: "Albert" },
  { pets: ["hello", "legles"] }
);

merge({ namespace: "combo" }, { holas: 23 });

interface Lengthy {
  length: number;
}

const printDoubleLength = <T extends Lengthy>(thing: T): number => {
  return thing.length * 2;
};

//default value for generic functions
const makeList = <T = number>(): T[] => {
  return [];
};

interface Song {
  title: string;
  artist: string;
}
interface Video {
  title: string;
  creator: string;
  resolution: string;
}

class PlayList<T> {
  public queue: T[] = [];
  add(el: T) {
    this.queue.push(el);
  }
}

const songs = new PlayList<Song>();

const videos = new PlayList<Video>();

