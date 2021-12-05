"use strict";
// Index Signatures in class
// class => object생성
// object가 생성이 되었는데 프로퍼티로 학생이름을 받고 성별을 지정해준다.
// 1반 : {Mark: 'male', Jade: 'male'}
// 2반 : {Anna: 'female', Alex: 'male', Sam: 'female'}
class Students {
}
const a = new Students();
a.Mark = 'male';
a.Jade = 'male';
console.log(a); // => Students { Mark: 'male', Jade: 'male' }
const b = new Students();
b.Anna = 'female';
b.Alex = 'male';
b.Sam = 'female';
console.log(b); // => Students { Anna: 'female', Alex: 'male', Sam: 'female' }
