---
layout: default
title: Type Challenges Medium
parent: Typescript
nav_order: 91
permalink: /typescript/challenges-medium
---

## Type Challenges Medium Solutions

### [Get Return Type](https://github.com/type-challenges/type-challenges/blob/main/questions/00002-medium-return-type/README.md)

- 함수가 반환하는 타입 얻기
- infer 키워드로 해결하면 된다.

```ts
type MyReturnType<T> = T extends (...args: any[]) => infer T2 ? T2 : never;
```
