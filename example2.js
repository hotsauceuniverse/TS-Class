"use strict";
// constructor & initialize
class Person2 {
    constructor() {
        this.name = 'seyoung'; //속성 name은 이니셜라이저가 없고 생성자에 할당되어 있지 않습니다. => 이름을 할당해 주면된다.
    }
}
const p2 = new Person2();
console.log(p2); // => Person2 { name: 'seyoung' }
p2.age = 27;
console.log(p2.age); // => 27
// 생성자 함수가 없으면, 디폴트 생성자가 불린다.
// 프로그래머가 만든 생성자가 하나라도 있으면, 디폴트 생성자는 사라진다.
// strict모드에서는 프로퍼티를 선언하는 곳 또는 생성자에서 값을 할당해야 한다.
// 프로퍼티를 선언하는 곳 또는 생성자에서 값을 할당하지 않는 경우에는 !를 붙여서 위험을 표현한다.
// 클래스의 프로퍼티가 정의되어 있지만, 값을 대입하지 않으면 undefined이다.
// 생성자에는 async를 설정할 수 없다.
