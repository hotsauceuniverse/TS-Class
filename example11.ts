// Abstract Classes 
// 완전하지 않은 클래스를 표현할 수 있으며 완전하지 않은 클래스는 new를 이용하여 개체를 만들어 낼 수 없다. 
// 완전하지 않은 개체를 상속과 같은 기능을 이용해서 완전하게 만든다음에 사용할 수 있다.
abstract class AbstractPerson {
  protected _name: string = 'seyoung';

  abstract setName(name: string): void;
}

new AbstractPerson() // 추상 클래스의 인스턴스를 만들 수 없습니다.

class Person8 extends AbstractPerson {
  setName(name: string): void {
    this._name = name;
  }
}

const f = new Person8();
f.setName('seyoung');
console.log(f); // => Person8 { _name: 'seyoung' }