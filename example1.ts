// class
class Person {
  name; //this.name에서 name에 대한 속성이 없기 때문에 작성해준다. 

  constructor(name: string) {
    this.name = name;
  }
}

const p1 = new Person('seyoung'); //Person의 문자열을 받지 못하기 때문에 위에서 constructor(name: string)을 실행해준다.

console.log(p1); // => Person { name: 'seyoung' }

// class키워드를 이용하여 클래스를 만들 수 있다.
// class 이름은 보통 대문자를 이용한다.
// new를 이용하여 class를 통해 object를 만들 수 있다.
// constructor를 이용하여 object를 생성하면서 값을 전달할 수 있다.
// this를 이용해서 만들어진 object를 가르킬 수 있다.
// JS로 컴파일되면 es5의 경우 function으로 변경된다. (상위버전으로 하면 class그대로 나오게 된다.)