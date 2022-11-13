---
layout: default
title: Function
nav_order: 1
parent: Javascript
permalink: /javascript/function
---

## 개요

하나의 `function`은 여러 번 호출 될 수 있는 정의된 코드의 매개 변수 블록이다.\
`javascript`에서 하나의 `function`은 아래 영향 받는 요소들로 구성된다.

- 함수의 body (javascript code block)
- 매개변수 목록
- `lexical scope`에 접근 가능한 변수
- 반환 값
- `this` 컨텍스트
- `function object`가 가진 변수
- `arguments` (단, `arrow function`은 이것을 가지지 않음)

---

javascript에서 `function`을 선언하는 방법이 6가지가 있다.

- `function`

  ```js
  function foo() {
    console.log('Hello World!');
  }
  ```

---

- `function expression`

  ```js
  const foo = function () {
    console.log('Hello World!');
  };
  ```

- `method`

  ```js
  const foo = {
    foo() {
      console.log('Hello World!');
    },
  };
  ```

- `arrow function`

  ```js
  const foo = () => {
    console.log('Hello World!');
  };
  ```

- `generator function`

  ```js
  function* generator() {
    yield 0;
  }
  const foo = function* () {
    yield 0;
  };
  const bar = {
    *generator() {
      yield 0;
    },
  };
  ```

- `new function`

  ```js
  const func = new Function('a', 'b', 'return a + b;');

  func(3, 5);
  ```

---

## Nested Function과 Closure

함수 내에 다른 함수를 선언하는 것.\
이렇게 선언된 함수는 클로저를 형성한다.\
클로저는 현재 Scope의 참조들과 결합하는 환경을 가질 수 있는 표현이다.

클로저를 통해 아래의 이점을 얻는 코드 구조를 작성할 수 있다.

- 외부 함수의 내부 함수의 인수와 변수 접근을 막고, 클로저가 형성된 함수에서는 해당 참조를 이용할 수 있다.

### 변수의 보존

중첩된 내부 함수가 반환하여 클로저가 형성될 때 외부 함수의 인수가 보존되는 점을 알 수 있다.

### 다중 중첩 함수

아래는 다중 중첩 함수 구조를 가진다.

```js
function A(x) {
  function B(y) {
    function C(z) {
      console.log(x + y + z);
    }

    C(3);
  }

  B(2);
}

A(1);
```

### 이름 충돌

변수 또는 함수의 이름, 즉 식별자가 같은 경우 가장 안쪽 범위에 있는 식별자를 가장 높은 우선 순위로 처리한다.\
이를 찾는 로직은 Scope Chaining을 통해 찾게 된다.\
현재 블록에서 먼저 찾고, 없는 경우 상위 블록에서 찾는 형식이다.

아래 코드에서 inside 함수 입장에서 outside의 10보다, 현재 자신의 인자로 온 x 식별자가 높은 우선순위를 갖게 되어 20을 반환하게 된다.

```js
function outside() {
  const x = 10;

  function inside(x) {
    return x;
  }

  return inside;
}
result = outside()(20); // returns 20 instead of 10
```

## 클로저 (Closure)

함수 내부에 함수를 정의하여 내부 함수에서 외부 함수 안에서 정의된 변수를 접근할 수 있도록 해주고, 내부에서 정의된 변수 및 함수들을 외부에서 접근할 수 없는 일종의 캡슐화를 제공하는 것을 말한다.

이렇게 클로저가 형성되면, 클로저 내부에 형성된 변수와 함수는 조금 더 오랜 수명을 가지게 된다.

클로저를 이용한 프로그래밍 패턴은 외부와의 복잡성을 낮추게 되어 코드를 더 단순화 시키고 유지보수 성을 높이는 코딩을 만들 수 있음.

### 클로저 주의 사항

식별자 이름이 충돌되는 경우, 충돌된 식별자를 참조할 방법이 없음.

## argument 개체

현재 함수 호출에 사용된 매개 변수 목록을 반환한다. (배열과 비슷하나, 완전한 배열은 아니다.)

이 개체는 몇개의 인자가 넘겨질지 모르는 동적인 상황에서 쓰임.

> **_NOTE_**: arrow function에서는 사용할 수 없음.

## Function.prototype.call

this 바인딩을 할 개체와 함께 함수를 실행한다.

```js
function printAge() {
  console.log(this.age);
}

func.call({ age: 52 });
```

## Function.prototype.bind

this 바인딩을 지정한 함수 개체를 반환한다.

```js
function printAge() {
  console.log(this.age);
}

const func = printAge.bind({ age: 100 });

func();
```

## Function.prototype.apply

call과 흡사하나, 인자를 넘기는 부분에서 배열을 반환한다는 점이 다르다.\
조금 더 동적인 환경에서 사용할 수 있음. (rest operator로 인자가 설정된 함수 등)

## 결론

## 참조

- [function은 아예 쓰지 마세요](https://www.youtube.com/watch?v=LPEwb5plEoU)
- [5 Differences Between Arrow and Regular Functions](https://dmitripavlutin.com/differences-between-arrow-and-regular-functions/)
- [6 Ways to Declare JavaScript Functions](https://dmitripavlutin.com/6-ways-to-declare-javascript-functions/)
- [함수 - mdn](https://developer.mozilla.org/ko/docs/Web/JavaScript/Guide/Functions#%EC%A4%91%EC%B2%A9%EB%90%9C_%ED%95%A8%EC%88%98%EC%99%80_%ED%81%B4%EB%A1%9C%EC%A0%80)
