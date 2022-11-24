---
layout: default
title: Syntax
nav_order: 6
parent: Javascript
permalink: /javascript/syntax
---

## 개요

ES2015부터 표준 문법으로 자리 잡은 3가지에 대해서 서술.

### Destructuring

object가 가진 속성이나 array 요소들을 변수로 할당할 때 유용하다.\
필요 없는 소스 코드를 단축시키는 장점이 있음.\
얕은 복사가 수행되므로 데이터 조작 시 유의.\
object에서 사용할 때와 array에서 쓸 때 문법이 약간 달라진다.\

```js
// object
const note = { id: 1, title: "ABC", author: { firstName: "Gyu", lastName: "Lee" } };
const { id, title } = note;
// 다른 별칭을 줄 수 있음.
const { id: idCopy, title: titleCopy } = note;
// firstName, lastName을 식별자로 얻음.
const { id, author, author: { firstName, lastName } } = note;

console.log( firstName, lastName );

// string의 경우 length 속성이 있으므로 아래와 같이 쓸 수도 있음.
const { length } = "asdfasdf";

// array tuple 같은 자료 구조와 같이 쓰기 좋음.
const ary = [2022, 12, 23];
const [year, month, day] = ary;

// 2차원도 가능
const ary2d = [1, 2, [3, 4], 5];
const [first, second, [third, fouth], fifth] = ary2d;
```

### Spread

object 또는 array 내부 요소를 풀어 쓸 때 사용 함.

```js
const ary1 = [1, 2, 3];
const ary2 = [4, 5, 6];
// 기본적으로 Array.concat과 똑같다.
const concat = [ ...ary1, ...ary2 ];

const note = { id: 1, title: "A" }
// 얕은 복사로 처리되니 유의
// 기본적으로 Object.assign 과 같다.
const noteCopy = { ...note }
// 별도의 속성을 재정의 할 수도 있음.
const noteCopy2 = { ...note, title: "B" }
```

함수의 인자 전달에도 쓰일 수 있다.

```js
const func = (a, b, c) => a + b + c;
const args = [1, 2, 3];

console.log( func( ...args ) );
```

### Rest

함수 인자를 가변 인자로 지정할 때 사용.

```js
// args는 배열로 취급된다.
const func = (...args) => args.length;
```

## 참조

- [Understanding Destructuring, Rest Parameters, and Spread Syntax in JavaScript](https://www.digitalocean.com/community/tutorials/understanding-destructuring-rest-parameters-and-spread-syntax-in-javascript)