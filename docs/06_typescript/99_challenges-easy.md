---
layout: default
title: Type Challenges Easy
parent: Typescript
nav_order: 99
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

```ts
```
