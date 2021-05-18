// Objects and Arrays

// 단축 속성명을 사용해서 객체 생성
const name = 'mike';
const obj = {
	age: 21,
	name, // 위에 정의가 되어있기에 단순히 변수만 적어주면 된다.
	getName() { return this.name; }, 
	//속성값이 함수이면 function키워드 없이 함수명만 적어도 된다. 
	//속성명은 함수명과 같아진다.
};


// 단축 속성명을 사용하지 않은 코드와 사용한 코드 비교
function makePerson1 (age, name) {
	return { age: age, name: name }; //단축 속성명 미사용
}

function makePerson2 (age, name) {
	return { age, name }; //단축 속성명 사용
}


// 계산된 속성명을 사용해서 컴포넌트 상탯값 변경
class MyComponent extends React.Component {
	state = {
		count1: 0,
		count2: 0,
		count3: 0,
	};
	// ...
	onClick = index => {
		const key = `count${index}`;
		const value = this.state[key];
		this.setState({ [key]: value + 1 }); // setState 호출 시 계산된 속성명 사용 가능
	};
}



/*
전개연산자
=> 배열이나 객체의 모든 속성을 풀어놓을 때 사용
*/
// 전개 연산자를 이용해서 함수의 매개변수 입력
Math.max(1, 3, 7, 9); // 동적으로 매개변수를 전달할 수 없다.
const numbers = [1, 3, 7, 9];
Math.max(...numbers); // 전개연산자를 사용하면 동적으로 함수의 매개변수 전달 가능


// apply 함수를 이용해서 동적으로 함수의 매개변수 입력
const numbers = [-1, 5, 11, 3];
Math.max.apply(null, numbers);
 
 
// 전개연산자를 이용해서 배열과 객체를 복사하기
const arr1 = [1, 2, 3];
const obj1 = { age: 23, name: 'mike' };
const arr2 = [...arr1]; // 전개연산자를 사용하여 새로운 객체 와 배열 생성
const obj2 = { ...obj1 }; // 전개연산자를 사용하여 새로운 객체 와 배열 생성
arr2.push(4); // 전개연산자를 사용해서 새로운 객체가 생성되었기에 속성을 추가하거나 변경해도 원래 객체에 영향 안줌
obj2.age = 80; // 전개연산자를 사용해서 새로운 객체가 생성되었기에 속성을 추가하거나 변경해도 원래 객체에 영향 안줌


// 배열에서 전개연산자를 사용하면 순서 유지됨
[1, ...[2, 3], 4]; // [1, 2, 3, 4]
new Date(...[2020, 6, 24]); // 2020년 6월 24일


// 전개연산자를 이용해서 두 객체 병합
const obj1 = { age: 21, name: 'mike' };
const obj2 = { hobby: 'soccer' };
const obj3 = { ...obj1, ...obj2 };
console.log(obj3); // { age: 21, name: 'mike', hobby: 'soccer' }
// 속성 명이 같은 객체를 병합하면 ES5까지는 에러 발생, ES6부터는 중복된 속성명 허용


// 객체 리터럴에서 중복된 속성명 사용 가능
const obj1 = { x: 1, x: 2, y: 'a' }; // { x: 2, y: 'a' }
//중복된 속성명 사용 시 최종 결과는 마지막 속성명의 값이 된다.
const obj2 = { ...obj1, y: 'b' }; // { x: 2, y: 'b' }




/*
배열의 비구조화 : 배열의 여러 속성값을 변수로 쉽게 할당할 수 있는 문법
*/
// 배열 비구조화를 사용한 코드
const arr = [1, 2];
const [a, b] = arr; // 배열의 속성값이 왼쪽의 변수에 순서대로 들어감
console.log(a); // 1
console.log(b); // 2


// 배열 비구조화로 이미 존재하는 변수에 값을 할당
let a, b;
[a, b] = [1, 2];


// 배열 비구조화에서의 기본값
const arr = [1]; 
const [a = 10, b = 20] = arr; // arr의 첫 번째 변수의 속성값 존재하여 10은 사용 안됨
console.log(a); // 1
console.log(b); // 20


// 배열 비구조화를 이용하여 변수의 값 교환
let a = 1;
let b = 2;
[a, b] = [b, a];
console.log(a); // 2
console.log(b); // 1


// 쉼표를 이용해서 일부 속성값 건너뛰기
const arr = [1, 2, 3];
const [a, , c] = arr;
console.log(a); // 1
console.log(c); // 3


// 나머지 값을 별도의 배열로 만들기
const arr = [1, 2, 3];
const [first, ...rest1] = arr; 
//배열 비구조화 시 마지막에 ...와 함게 변수명을 입력하면 나머지 모든 속성값이 새로운 배열로 만들어짐
console.log(rest1); // [2, 3]
const [a, b, c, ...rest2] = arr;
console.log(rest2); // []





/*
객체 비구조화로
*/
// 객체 비구조화를 이용한 코드
const obj = { age: 21, name: 'mike' };
const { age, name } = obj; // 객체 비구조화에서는 중괄호 사용
console.log(age); // 21
console.log(name); // mike


// 객체 비구조화에서는 속성명이 중요!!
const obj = { age: 21, name: 'mike' };
const { age, name } = obj; // const { name, age } = obj;와 결과 같다.
const { name, age } = obj; 
const { a, b } = obj; // undefined : 속성명이 존재하지 않기 때문


//% 객체 비구조화에서는 속성명과 다른 이름으로 변수 생성 가능
//% 중복된 변수명을 피하거나 좀 더 구체적인 변수명을 만들 때 좋다.


// 객체 비구조화에서 별칭 사용하기
const obj = { age: 21, name: 'mike' };
const { age: theAge, name } = obj; // 속성명 age의 값을 theAge변수에 할당
console.log(theAge); // 21
console.log(age); //참조 에러 => theAge라는 이름의 변수만 할당되고 age변수는 할당 안됨


// 객체 비구조화에서의 기본값
const obj = { age: undefined, name: null, grade: 'A' };
const { age = 0, name = 'noName', grade = 'F' } = obj;
console.log(age); // 0 => 속성값이 undefined의 경우에만 기본값이 들어간다.
console.log(name); // null => null일 경우는 들어가지 않는다.
console.log(grade); // A


// 기본값과 별칭 동시에 사용하기
const obj = { age: undefined, name: 'mike' };
const { age: theAge = 0, name } = obj;
console.log(theAge) // 0


// 함수를 이용한 기본값
function getDefaultAge() {
	console.log('hello');
	return 0;
}
const obj = { age: 21, grade: 'A' }
const { age = getDefaultAge(), grade } = obj; // hello 출력되지 않음
// age의 속성값이 undefined가 아니므로 기본값이 사용되지 않고 함수도 호출되지 않는다.
console.log(age) // 21


// 객체 비구조화에서 나머지 속성들을 별도의 객체로 생성
const obj = { age: 21, name: 'mike', grade: 'A' };
const { age, ...rest } = obj; // 나머지 속성들을 별도의 객체로 분리
console.log(rest); // { name: 'mike', grade: 'A' }


// for 문에서 객체 비구조화를 활용한 코드
const people = [{ age: 21, name: 'mike' }, { age: 51, name: 'sara' }];
for (const { age, name } of people) {
	//...
}


// (심화) 중첩된 객체의 비구조화 사용한 코드
const obj = { name: 'mike', mother: { name: 'sara' } };
const {
	name,
	mother: { name: motherName }, // motherName이라는 이름의 변수만 생성된다.
} = obj;
console.log(name); // mike
console.log(motherName); // sara
console.log(mother); // 참조 에러


// 기본값은 변수 단위가 아니라 패턴 단위로 적용
const [{ prop: x } = { prop: 123 }] = []; 
//{ prop: x }는 배열의 첫 번째 원소를 가리킴 so, { prop: 123 }은 기본값을 정의, x에는 기본값에서 정의된 123이 들어감
console.log(x); // 123
const [{ prop: x } = { prop: 123 }] = [{}]; 
// 첫 번째 원소가 존재하므로 기본값 할당 불가, 첫 번째 원소에는 prop라는 이름의 속성명이 존재하지 않는다. x에는 undefined가 할당
console.log(x); // undefined


// 객체 비구조화에서 계산된 속성명 사용
const index = 1;
const { [`key${index}`]: valueOfTheIndex } = { key1: 123 };
// 별칭에 단순히 변수명만 입력할 수 있는 것은 아니다.
console.log(valueOfTheIndex); // 123


// 별칭을 이용해서 다른 객체와 배열의 속성값 할당
const obj = {};
const arr = [];
({ foo: obj.prop, bar: arr[0] } = { foo: 123, bar: true });
// 객체 비구조화를 이용해서 obj객체의 prop라는 속성과 배열의 첫 번째 원소에 값 할당
console.log(obj); // {prop:123}
console.log(arr); // [true]

