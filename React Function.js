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


// 화살표 함수에서 나머지 매개변수 사용하기
//% 화살표 함수가 일반 함수와 다른 점은 this와 arguments가 바인딩되지 않는다는 것
// => arguments가 필요하다면 나머지 매개변수를 이용
const printLog = {...rest} => console.log(rest);
printLog(1, 2); // [1, 2]


// this 바인딩 때문에 버그가 발생한 경우
const obj = {
	value: 1,
	increase: function() { // increase함수는 일반함수이기에 호출 시 사용된 객체가 this로 바인딩
		this.value++;
	},
};
obj.increase(); // increase 함수는 일반 함수이므로 호출 시 사옹된 객체가 this로 바인딩
console.log(obj.value); // 2
const increase = obj.increase;
increase(); // 객체 없이 호출되는 경우 전역 객체가 바인딩된다. 
// 화살표 함수 안에서 사용된 this와 arguments는 자신을 감싸고 있는
// 가장 가까운 일반 함수의 것을 참조한다. 
// incresse함수를 화살표 함수로 작성했다면 this는 window객체를 가리키기 때문에
// 함수를 호출해도 obj.value는 항상 변하지 않는다.
console.log(obj.value); // 2


// 생성자 함수 내부에서 퐈살표 함수 사용
function Something() {
	this.value = 1;
	this.increase = () => this.value++;
	// 화살표 함수 increase의 this는 가장 가까운 일반 함수인 Something의 this를 참조
}
const obj = new Something();
// new 키워드를 이용해서 생성자 함수를 호출하면 this는 생성되는 객체를 참조한다.
obj.increase(); // increase 함수의 this는 항상 생성된 객체를 참조하고 obj.value는 계속 증가
console.log(obj.value); // 2
const increase = obj.increase;
increase(); // increase 함수의 this는 항상 생성된 객체를 참조하고 obj.value는 계속 증가
console.log(obj.value); // 3


// setInterval 함수에서 this 객체 사용 시 버그 발생
function Something() {
	this.value = 1;
	setInterval(function increase() {
		this.value++;
	}, 1000);
}
const obj = new Something();
// obj.value는 증가하지 않는다. serInterval함수의 임수로 들어간 increase함수는
// 전역환경에서 실행되기에 this는 window 객체를 참조한다.


// setInterval 함수에서 this 객체를 참조하기 위해 편법 사용
function Something() {
	this.value = 1;
	var that = this;
	setInterval(function increase() {
		that.value++;
		// increase함수에서는 closure을 이용해서 미리 저장해둔 that변수를 통해 this객체에 접근
	}, 1000);
}
const obj = new Something();


/*
클로저(Closure) 이란?
함수가 생성되는 시점에 접근 가능했던 변수들을 생성 이후에도 계속해서 접근할 수 있게
해주는 기능이다. 접근할 수 있는 변수는 그 함수를 감싸고 있는 상위 함수들의 
매개변수와 내부 변수들이다.
*/
function makeAddFunc(x) {
	return function add(y) {
		return x + y;
	};
}
const add5 = makeAddFunc(5);
console.log(add5(1)); // 6
const add7 = makeAddFunc(7);
console.log(add7(1)); // 8
console.log(add5(1)); // 6


// setInterval 함수에서 this 객체를 참조하기 위해 화살표 함수 사용
function Something() {
	this.value = 1;
	setInterval(() => {
		this.value++; 
		//화살표 함수를 사용했기 때문에 this는 setInterval의 동작과는 상관없이 obj 참조
	}, 1000);
}
const obj = new Something();










                        


		
