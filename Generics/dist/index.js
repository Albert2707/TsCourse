"use strict";
const nums = [];
const inputEl = document.querySelector("#username");
console.dir(inputEl);
inputEl.value = "sd";
const btn = document.querySelector(".btn");
function Numberidentity(item) {
    return item;
}
function stringidentity(item) {
    return item;
}
function booleanidentity(item) {
    return item;
}
function identity(item) {
    return item;
}
/* identity<boolean>(true);
identity<number>(7);
identity<string>("as");
identity<Cat>({ color: "negro", age: 2 }); */
const getRandomElement = (list) => {
    const randIdx = Math.floor(Math.random() * list.length);
    return list[randIdx];
};
console.log(getRandomElement(["a", "b", "d", "sd"]));
console.log(getRandomElement([1, 2, 3, 4, 5]));
getRandomElement(["a", "b", "d", "sd"]);
function merge(object1, object2) {
    return Object.assign(Object.assign({}, object1), object2);
}
const comboObj1 = merge({ name: "Albert" }, { pets: ["hello", "legles"] });
const comboObj2 = merge({ name: "Albert" }, { pets: ["hello", "legles"] });
merge({ namespace: "combo" }, { holas: 23 });
const printDoubleLength = (thing) => {
    return thing.length * 2;
};
//default value for generic functions
const makeList = () => {
    return [];
};
class PlayList {
    constructor() {
        this.queue = [];
    }
    add(el) {
        this.queue.push(el);
    }
}
const songs = new PlayList();
const videos = new PlayList();
