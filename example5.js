"use strict";
// Getters & Setters (얻음 & 변경)
class Person5 {
    constructor(_name, age) {
        this._name = _name;
        this.age = age;
    }
    get name() {
        console.log('get');
        return this._name;
    }
    set name(n) {
        console.log('set');
        this._name = n;
    }
}
const p5 = new Person5('seyoung', 27);
console.log(p5.name); // get을 하는 함수 getter => get seyoung
p5.name = "A"; // set을 하는 함수 setter => get seyoung set
console.log(p5.name); // => get seyoung set get A
