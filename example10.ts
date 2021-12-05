// 상속(Inheritance) : 클래스가 다른 클래스를 가져다가 자신만의 기능을 추가해서 사용하는 것
class Parent {
  constructor(protected _name: string, private _age: number) {}

  public print(): void {
    console.log(`이름은 ${this._name} 이고, 나이는 ${this._age} 입니다.`);
  }
}

const p = new Parent('seyoung', 27);
p.print(); // => 이름은 seyoung 이고, 나이는 27 입니다.

class Child extends Parent {
  public gender = 'male';

  constructor(age: number) { // 파생 클래스의 생성자는 super 호출을 포함해야 합니다.
    super('Sam', age)
  } 
}

const e = new Child(6);
e.print(); // => 이름은 Sam 이고, 나이는 6 입니다.
