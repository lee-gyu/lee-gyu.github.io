---
layout: default
title: Typescript
nav_order: 6
has_children: true
permalink: /typescript
---

## 타입스크립트와 자바스크립트 관계

타입스크립트는 자바스크립트의 `슈퍼셋`[^1]이라고 한다.

[^1]: 상위집합, 초집합 개념. 자바스크립트는 타입스크립트의 `서브셋`이라고 볼 수 있다.

그러므로 타입스크립트는 모든 자바스크립트를 실행할 수 있다.  

## 타입스크립트의 'Type'

타입스크립트는 자바스크립트와 다르게 타입을 명시하는 추가적인 문법을 가진다.  
자바스크립트에서 타입을 명시한다면 그것은 타입스크립트 영역에 들어선다.  
아래 코드를 그대로 자바스크립트 엔진에서 실행 시 오류를 출력한다.

```ts
const print = (msg: string) => console.log(msg);
```

```text
SyntaxError: Unexpected token :
```

## 타입 체커

타입스크립트의 타입 체커는 문제점을 찾아내어, 프로그래머의 실수를 미연에 찾아낼 수 있다.  
또한 타입 추론 기능을 통해 어떤 타입을 사용하는지 추론하여 개발에 도움을 준다.  
타입스크립트의 목표 중 하나는 런타임에 오류를 발생시킬 코드를 미리 찾아 내는 것이다.  
'정적' 타입 시스템이라는 것은 이런 특징을 말하며, 모든 오류를 찾아낼 수는 없다.

타입스크립트를 한다는 것은, 조금 더 엄격한 환경에서 자바스크립트를 다루게 하며  
이는 취향의 차이이며 어떤 것이 더 좋다고 말할 내용이 아니다.

## 타입은 집합

타입을 집합의 개념으로 생각하자.\
해당 집합에 속하면 타입으로 지정될 수 있다.

```ts
// 공집합
declare type NoneType = never;
// 모든 숫자 집합
declare type Num = number;
// {1, 2, 3} 집합
declare type Num2 = 1 | 2 | 3;
// {1, 2} 집합
declare type Num3 = 1 | 4 | 5;
// {1, 2, 3, 4, 5} 합집합
declare type NumUnion = Num2 | Num3;
// {1} 교집합
declare type NumIntersection = Num2 & Num3;
// {2, 3} 차집합
declare type NumSubtraction = Num2 extends infer R ? R extends Num3 ? never : R : Num2;
// {2, 3, 4, 5} 베타적 논리합
declare type NumXOR = (Num2 | Num3) extends infer R2 ? R2 extends (Num2 & Num3) ? never : R2 : never;

// NumXOR에 집합에 속하는 것만 값으로 지정 가능
const a: NumXOR = 2;
```

## 참조

- [Effect Typescript p.2](https://effectivetypescript.com/)
- [타입스크립트 딥 다이브](https://radlohead.gitbook.io/typescript-deep-dive)
