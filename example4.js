"use strict";
// initialization in constructor parameters
class Person4 {
    // name: string;
    // age: number;
    constructor(name, age) {
        this.name = name;
        this.age = age;
        // this.name = name;
        // this.age = age;
    }
}
const p4 = new Person4('seyoung', 27);
console.log(p4); // => Person4 { name: 'seyoung', age: 27 }
