// Static Properties & Methods
class Person7 {
  public static CITY = 'Buchun'; // Static Properties
  public static hello() { // Static Methods
    console.log('안녕하세요', Person7.CITY);
  }
}

const p7 = new Person7();

Person7.hello(); // => 안녕하세요 Buchun

