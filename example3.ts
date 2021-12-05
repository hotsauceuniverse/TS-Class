// 접근 제어자 (Access Modifiers)
class Person3 {
  public name: string = 'seyoung';
  public age!: number;
}

const p3= new Person3();

console.log(p3) // => Person3 { name: 'seyoung' }

// 접근 제어자에는 public, private, protected가 있다.
// 설정하지 않으면 public이다.
// 클래스 내부의 모든 곳에(생성자, 프로퍼티, 메서드) 설정 가능하다.
// private으로 설정하면 클래스 외부에서 접근할 수 없다.