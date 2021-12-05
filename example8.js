"use strict";
// Static Properties & Methods
class Person7 {
    static hello() {
        console.log('안녕하세요', Person7.CITY);
    }
}
Person7.CITY = 'Buchun'; // Static Properties
const p7 = new Person7();
Person7.hello(); // => 안녕하세요 Buchun
