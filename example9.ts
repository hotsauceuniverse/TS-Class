// Singletons : static이라는 키워드를 사용해서 데이터를 공유되고 어떻게 사용되는지 이해를 돕기위한 예
// Singletons 패턴 = 어플리케이션이 실행되는 중간에 클래스로 부터 단 하나의 오브젝트만 생성을 해서 사용하는 패턴
class ClassName {
  private static instance: ClassName | null = null;
  public static getInstance(): ClassName {
    // ClassName으로 부터 만든 object가 없으면, 만들어서 return (밑의 if문)
    if (ClassName.instance === null) {
      ClassName.instance = new ClassName();
    }

    return ClassName.instance;
  }

  private constructor() {}
}

const c = ClassName.getInstance();
const d = ClassName.getInstance();

console.log(c === d); // => true
