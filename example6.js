"use strict";
// readonly properties
class Person6 {
    constructor(_name, age) {
        this._name = _name;
        this.age = age;
        this.name = 'seyoung';
        this.country = 'Korea';
        // this.country = 'Korea'
    }
    hello() {
        this.country = 'USA'; // 읽기전용 속성이므로 country에 할당할 수 없습니다.
    }
}
const p6 = new Person6('seyoung', 27);
console.log(p6.name); // => seyoung
p6.name = "A"; // 읽기전용 속성이므로 name에 할당할 수 없습니다.
// readonly 키워드가 달려있는 경우에는 public이던 private이던 초기화되는 영역에서만 값을 셋팅할 수 있고 다른곳에는 다른 값으로 바꿀수 없다.
