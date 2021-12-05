"use strict";
// 상속(Inheritance) : 클래스가 다른 클래스를 가져다가 자신만의 기능을 추가해서 사용하는 것
class Parent {
    constructor(_name, _age) {
        this._name = _name;
        this._age = _age;
    }
    print() {
        console.log(`이름은 ${this._name} 이고, 나이는 ${this._age} 입니다.`);
    }
}
const p = new Parent('seyoung', 27);
p.print(); // => 이름은 seyoung 이고, 나이는 27 입니다.
class Child extends Parent {
    constructor(age) {
        super('Sam', age);
        this.gender = 'male';
    }
}
const e = new Child(6);
e.print(); // => 이름은 Sam 이고, 나이는 6 입니다.
