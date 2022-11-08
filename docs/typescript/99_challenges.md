---
layout: default
title: Type Challenges
parent: Typescript
nav_order: 99
---

타입첼린지 개인 풀이 모음

## Easy

- <a href="https://github.com/type-challenges/type-challenges/blob/main/questions/00004-easy-pick/README.md" target="lee-gyu-tc">Pick</a>

```ts
type MyPick<T, K extends keyof T> = {
  [key in K]: T[key]
}
```

- <a href="https://github.com/type-challenges/type-challenges/blob/main/questions/00004-easy-pick/README.md" target="lee-gyu-tc">Readonly</a>
  - 참고 자료
  - [typescript-depp-dive](https://radlohead.gitbook.io/typescript-deep-dive/type-system/readonly)
  - [readonly and const](https://www.typescriptlang.org/docs/handbook/typescript-in-5-minutes-func.html#readonly-and-const)

```ts
type MyReadonly<T> = {
  readonly [key in keyof T]: T[key];
};
```
