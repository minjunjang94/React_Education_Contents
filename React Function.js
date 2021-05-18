// React Function

/*
매개변수
*/
// 매개변수에 기본값 주기
function printLog(a = 1) {
	console.log({ a });
}
printLog(); // { a: 1 }
// 기본값이 정의된 매개변수에 undefined를 입력하면 정의된 기본값 1이 사용된다.


//매개변수 기본값으로 함수 호출 사용
function getDefault() {
	return 1;
}
function printLog( a = getDefault()) {
	console.log({ a });
}
printLog(); // { a: 1 }


// 매개변수 기본값을 이용해서 필숫값을 표현
function required() {
	throw new Error('no parameter');
}
function printLog(a = required()) {
	console.log({ a });
}
printLog(10); // { a: 10 }
printLog(); // 에러 발생 : no parameter
// 매개변수의 값이 없으면 required 함수에서 예외가 발생한다. so, 매개변수 a는 필수값이 된다.


// 나머지 매개변수를 사용
function printLog(a, ...rest) {
	console.log({ a, rest });
}
printLog(1, 2, 3); // { a: 1, rest: [2, 3] }


// arguments 키워드로 나머지 매개변수 따라 표현
function printLog(a) {
	const rest = Array.from{arguments}.splice(1);
	console.log({ a, rest });
}
printLog(1, 2, 3); // { a: 1, rest: [2, 3] }


// 명명된 매개변수의 사용 여부에 따른 가독성 비교
const numbers = [10, 20, 30, 40];
const result1 = getValues(numbers, 5, 25);
// 함수 호출 시 매개변수의 이름이 보이지 않아 인수가 의미하는 바를 알기 어렵다.
const result2 = getValues({ numbers, greaterThan: 5, lessThan: 25 });
// 명명된 매개변수를 이용하면 매개변수의 이름이 노출되어 의미하는 바가 알기 쉽다.


// 명명된 매개변수의 사용 여부에 따른 선택적 매개변수 코드 비교
const result1 = getValues(numbers, undefined, 25);
// 필요 없는 매개변수 자리에 undefined를 넣으면 된다. 하지만 개수가 많아지면 관리가 힘들어진다.
const result2 = getValues({ numbers, greaterThan: 5 });
const result3 = getValues({ numbers, lessThan: 25 });
// 명명된 매개변수를 이용하면 필요한 인수만 넣어주면 되기에 매개변수가 늘어나도 별 문제가 없다.





/*
화살표 함수
*/
// 화살표 함수 사용 코드
const add = ( a, b ) => a + b;
// 화살표 함수를 중괄호로 감싸지 않으면 오른쪽의 계산 결과가 반환, return을 따로 작성하지 않아도 된다.
console.log(add(1, 2)); // 3
const add5 = a => a + 5;
// 매개변수가 하나라면 매개변수를 감싸는 소괄호도 생략할 수 있다.
console.log(add5(1)); // 6
const addAndReturnObject = (a, b) => ({ result: a + b });
// 객체를 반환해야한다면 소괄호로 감싸야 한다.
console.log(addAndReturnObject(1, 2).result); // 3


// 코드가 두 줄 이상인 화살표 함수
// 전체를 중괄호로 묶고, 반환값에는 return 키워드를 사용
const add = (a, b) => {
	if(a <= 0 || b <= 0) {
		throw new Error('must be positive number');
	}
	return a + b;
};



		
