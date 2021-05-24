// 비동기 프로그래밍 : "프로미스"

/*
프로미스(Promise) 란?
비동기 상태를 값으로 다룰 수 있는 객체.
비동기 프로그래밍을 할 때 동기 프로그래밍 방식으로 코드를 작성할 수 있다.
*/

// 프로미스가 나오기 전 콜백(callback) 패턴을 많이 사용했었다.
// 콜백 함수의 단점
// 1. 콜백 함수의 중첩 사용
function requestData1(callback) {
	// ... 
	callback(data); // 2번
}
function requestData2(callback) {
	// ...
	callback(data); // 4번
}
function onSuccess1(data) {
	console.log(data);
	requestData2(onSuccess2); // 3번
}
function onSuccess2(data) { // 5번
	console.log(data);
	// ...
}
requestData1(onSuccess1);  // 1번
// 콜백 패턴은 코드의 흐름이 순차적이지 않기 때문에 코드를 읽기에 어려움이 있다.
// 프로미스를 사용하면 직관적인 장점이 있다.


// 간단한 프로미스 코드 => 순차적으로 작성할 수 있다.
requestData1() 
	.then(data => {
		console.log(data);
		return requestData2();
	})
	.then(data => {
		console.log(data);
		// ...
	});
	
	
/*
프로미스의 세 가지 상태
- 대기 중(pending)   : 결과를 기다리는 중 -> 유일히 '이행 됨' 혹은 '거부 됨' 상태로 변경 가능
- 이행 됨(fulfilled) : 수행이 정상적으로 끝났고 결괏값을 가지고 있음
- 거부 됨(rejected)  : 수행이 비정상적으로 끝났음 -> 처리됨(settled) 상태라고 부름 : 더이상 다른 상태로 변경되지 않음
*/

// 프로미스를 생성하는 방법
const p1 = new Promise((resolve, reject) => {
	//...
	// resolve(data)
	// or reject('error message')
	
	// 일반적으로 new 키워드를 사용하면 프로미스가 생성된다. (대기 중 상태이다.)
	// 비동기로 어떤 작업을 수행 후 성공하면 resolve, 실패하면 reject
	// resolve를 호출하면 p1객체는 이행 됨 상태로 변경
	// reject를 호출하면 p1객체는 거부 됨 상태로 변경
	
	// new 키워드를 사용해서 프로미스를 생성하는 순간 생성자의 입력 함수가 실행
	// 만약 API요청을 보내는 비동기 코드가 있다면 프로미스가 생성되는 순간 요청
	
});
const p2 = Promise.reject('error message');
// new 키워드를 사용하지 않고 Promise.reject를 호출하면 거부됨 상태인 프로미스가 생성
const p3 = Promise.resolve(param);
// Promise.resolve를 호출해도 프로미스 생성
// 만약 입력값이 프로미스였다면 그 객체 그대로 반환,
// 아니라면 이행됨 상태인 프로미스 반환



/*
프로미스 이용하기 : then
*/

// Promise.resolve의 반환값
const p1 = Promise.resolve(123);
console.log(p1 !== 123); // true
const p2 = new Promise(resolve => setTimeout(() => resolve(10), 1));
console.log(Promise.resolve(p2) === p2); // true


//then 메서드를 사용한 간단한 코드
requestData().then(onResolve, onReject);
// 처리됨 상태가 되면 onResolve 함수가 호출되고, 거부됨 상태가 되면 onReject 함수가 호출
Promise.resolve(123).then(data => console.log(data); // 123
Promise.reject('err').then(null, error => console.log(error)); // 에러발생


// 연속해서 then 메서드 호출
requestData1()
	.then(data => {
		console.log(data);
		return requestData2();
		// onResolve 또는 onReject 함수에서 프로미스를 반환하면 then 메서드는 그 값 그대로 반환
	})
	.then(data => {
		return data + 1;
		// 만약 프로미스가 아닌 값을 반환하면 then메서드는 이행 됨 상태인 프로미스를 반환
	})
	.then(data => {
		throw new Error('some error');
		// onResolve 또는 onReject 함수 내부에서 예외가 발생하면 then 메서드는 거부 됨
		// 상태인 프로미스를 반환
	})
	.then(null, error => {
		console.log(error);
	});
// 결과적으로 then 메서드는 항상 프로미스를 반환
// 프로미스가 거부됨 상태인 경우에는 onReject 함수가 존재하는 then을 만날때 까지 이동


// 거부 됨 상태가 되면 onReject 함수 호출
Promise.reject('err')
	.then(() => console.log('then 1')) // 코드 불록 생략
	.then(() => console.log('then 2')) // 코드 불록 생략
	// 거부 됨 상태인 프로시므는 처음 만나는 onReject 함수를 호출
	.then(() => console.log('then 3'), => console.log('then 4')) // then 4 출력
	// onReject 함수는 undefined를 결과로 가지면서 이행 됨 상태인 프로미스 생성
	.then(() => console.log('then 5'), => console.log('then 6')); // then 5 출력
// then 메서드의 가장 중요한 특징은 "항상 연결된 순서대로 호출된다."



/*
프로미스 이용하기 : catch
*/
// 같은 기능을 하는 then 메서드와 catch 메서드
Promise.reject(1).then(null, error => {
	console.log(error);
});
Promise.reject(1).catch(error => {
	console.log(error);
});
// 예외 처리는 then 메서드의 onReject 함수보다 catch 메서드를 사용하는 것이 좋다. 
// catch가 가독성이 더 좋음.


// then 메서드의 onReject를 사용했을 경우 문제점
Promise.resolve().then(
	() => { // then 메서드의 onResolve 함수에서 발생한 예외는 같은 then메서드의 onReject 함수에서 처리되지 않는다.
		throw new Error('some error');
	},
	error => { // 처리되지 않는다.
		console.log(error);
	},
); //result : Unhandled promise rejection 발생 
   // -> 거부 됨 상태인 프로미스를 처리하지 않았기 때문
   
   
// onReject 함수를 사용하지 않고 catch를 사용
Promise.resolve()
	.then(() => {
		throw new Error('some error');
	})
	.catch(error => {		
		console.log(error);
	});





	
	