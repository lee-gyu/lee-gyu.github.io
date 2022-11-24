---
layout: default
title: Type Challenges Easy
parent: Typescript
nav_order: 90
permalink: /typescript/challenges-eay
---

## Type Challenges Easy Solutions

### [Pick](https://github.com/type-challenges/type-challenges/blob/main/questions/00004-easy-pick/README.md)

- 특정 타입(T)에서 특정 key 리스트(K)만을 뽑은 타입 선언
- 참고 자료
- [Mapped Types](https://www.typescriptlang.org/docs/handbook/2/mapped-types.html)

```ts
// T가 가진 key를 K 타입의 집합으로 지정 (K extends keyof T)
type MyPick<T, K extends keyof T> = {
  // K를 key 타입으로 지정
  [key in K]: T[key] // value 타입을 T[key]로 하여 T 타입과 매핑
}
```

### [Readonly](https://github.com/type-challenges/type-challenges/blob/main/questions/00004-easy-pick/README.md)

- 특정 타입(T)이 가진 모든 속성을 `readonly`로 처리하는 타입 선언
- 참고 자료
  - [typescript-depp-dive](https://radlohead.gitbook.io/typescript-deep-dive/type-system/readonly)
  - [readonly and const](https://www.typescriptlang.org/docs/handbook/typescript-in-5-minutes-func.html#readonly-and-const)

```ts
type MyReadonly<T> = {
  // 단순 readonly 제어자를 붙여 처리
  readonly [key in keyof T]: T[key];
};
```

### [Tuple to Object](https://github.com/type-challenges/type-challenges/blob/main/questions/00011-easy-tuple-to-object/README.md)

- 튜플(array)의 값을 `key: value`로 매핑이 되는 타입 선언
- 이때 value 타입은 key 타입과 동일해야함 (key가 "tesla"면 value도 "tesla"로 타입 지정)
- 여기서 key 값은 string 또는 number로 한정 (array나 object 등이 올 수 없도록)

```ts
// Tuple로 올 수 있는 타입을 string, number로 한정
declare type TupleValue = string | number;

type TupleToObject<T extends readonly TupleValue[]> = {
  [key in T[number]]: key;
}
```

### [First of Array](https://github.com/type-challenges/type-challenges/blob/main/questions/00014-easy-first/README.md)

- 배열 index 0의 타입을 가져오기
- 여기서 배열의 length가 0으로 오지 못하도록 `조건부 타입`을 써야함
- 참고 자료
  - [Conditional Types](https://www.typescriptlang.org/docs/handbook/2/conditional-types.html)

```ts
// T의 length가 0이라면 never (타입의 공집합) 아니라면 타입의 0 index의 타입 반환
type First<T extends any[]> = T["length"] extends 0 ? never : T[0];
```

### [Length of Tuple](https://github.com/type-challenges/type-challenges/blob/main/questions/00018-easy-tuple-length/README.md)

- 배열의 길이(length)를 타입으로 계산

```ts
type Length<T extends readonly any[]> = T["length"]
```

### [Exclude](https://github.com/type-challenges/type-challenges/blob/main/questions/00043-easy-exclude/README.md)

- 특정 타입(T)에서 타입(U)에 해당하는 타입 배제

```ts
// 조건부 타입으로 U에 해당하는 타입에 대해 never 처리
type MyExclude<T, U> = T extends U ? never : T;
```

### [Awaited](https://github.com/type-challenges/type-challenges/blob/main/questions/00189-easy-awaited/README.md)

- Promise로 wrapped된 타입의 Promise 반환 타입만 가져오기
- 타입 추론(infer)을 이용하여 `Promise.then` 메소드의 타입을 추론하여 해결
- infer 키워드 이해와 자신의 타입을 재귀적으로 처리하는 부분을 이용
- 참고 자료
  - [Inferring Within Conditional Types](https://www.typescriptlang.org/docs/handbook/2/conditional-types.html#inferring-within-conditional-types)

```ts
// then 메소드를 별도로 처리한 오브젝트가 있으므로, PromiseLike를 이용함
type MyAwaited<T> = T extends PromiseLike<infer U> ? MyAwaited<U> : T;
// 단, 이렇게 작성한 경우 하단의 @ts-expect-error를 통과할 수 없다.
// 핵심은 infer 키워드를 이용한 Promise 내부 반환 타입 추출
// 문제가 then 메소드를 억지로 담은 개체까지 처리해야하는 문제 때문에 혼잡이 있음.
```

### [If](https://github.com/type-challenges/type-challenges/blob/main/questions/00268-easy-if/README.md)

- 조건부 타입으로 해결가능한 문제 (단순 삼항 연산자 처리 느낌)

```ts
type If<C extends boolean, T, F> = C extends true ? T : F;
```

### [Concat](https://github.com/type-challenges/type-challenges/blob/main/questions/00533-easy-concat/README.md)

- 두 배열의 합친 결과 타입을 처리해야 하는 문제
- spread operator로 주어진 배열을 합치면 된다.

```ts
type Concat<T extends readonly any[], U extends readonly any[]> = [ ...T, ...U]
```

### [Includes](https://github.com/type-challenges/type-challenges/blob/main/questions/00898-easy-includes/README.md)

- 배열 내에 요소가 있는지 boolean을 리턴하는 문제
- 각 배열 요소를 First와 Rest로 분리 ([infer First, ...infer Rest]
- 타입을 재귀적 평가 후 각 요소를 순회하여 타입이 동등한지 비교하여 해결

```ts
type Includes<T extends readonly any[], U> = T extends [infer First, ...infer Rest]
  ? Equal<First, U> extends true
    ? true
    : Includes<Rest, U>
  : false;
```

### [Push](https://github.com/type-challenges/type-challenges/blob/main/questions/03057-easy-push/README.md)

- spread operator로 해결

```ts
type Push<T extends any[], U> = [ ...T, U ]
```

### [Unshift](https://github.com/type-challenges/type-challenges/blob/main/questions/03060-easy-unshift/README.md)

- 가장 첫 요소로 삽입하는 타입
- spread를 응용하여 해결

```ts
type Unshift<T extends any[], U> = [ U, ...T ]
```

### [Parameters](https://github.com/type-challenges/type-challenges/blob/main/questions/03312-easy-parameters/README.md)

- 함수의 인자들을 배열로 처리하는 타입 선언
- infer 키워드와 rest 연산자로 해결 (타입 추론을 통해 얻어낼 수 있음)

```ts
type MyParameters<T> = T extends ( ...args: infer R ) => any ? R : never;
```
