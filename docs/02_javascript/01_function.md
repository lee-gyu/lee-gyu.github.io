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

## 차이점

## 결론

## 참조

- [function은 아예 쓰지 마세요](https://www.youtube.com/watch?v=LPEwb5plEoU)
- [5 Differences Between Arrow and Regular Functions](https://dmitripavlutin.com/differences-between-arrow-and-regular-functions/)
- [6 Ways to Declare JavaScript Functions](https://dmitripavlutin.com/6-ways-to-declare-javascript-functions/)
