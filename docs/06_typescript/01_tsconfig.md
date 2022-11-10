---
layout: default
title: tsconfig.json
parent: Typescript
nav_order: 1
permalink: /typescript/tsconfig
---

## tsconfig.json

`tsconfig.json` 파일은 타입스크립트를 어떻게 사용할 것인지 설정 사항이 기술된 파일이다.  
아래 커맨드로 자동생성 할 수 있다.

```sh
tsc --init
```

타입스크립트 설정 파일에 따라 타입스크립트를 제대로 활용할 수가 있다.

## compilerOptions

아래는 컴파일 옵션에 해당하는 각 설정을 기술한다.

### strict (default: true)

`true`로 지정할 시, 타입스크립트가 권장하는 옵션으로 다른 옵션들을 엄격하게 설정한다.  
아래 속성들이 영향 받는다.

- alwaysStrict
- strictNullChecks
- strictBindCallApply
- strictFunctionTypes
- strictPropertyInitialization
- noImplicitAny
- noImplicitThis
- useUnknownInCatchVariables

가능하면 `true`로 설정하여 엄격한 검사를 권장하나, 단계적으로 타입스크립트를 반영하는  
프로젝트의 경우 `false`로 비활성화하여 한 단계씩 엄격한 부분을 적용해나가는 것을 권장한다.

### noImplicitAny (default: true)

이 옵션은 타입을 명시하지 않을 경우, 암묵적으로 `any` 타입이 지정이 되는 것을 허용하는지 지정한다.  

이 옵션을 `false`로 지정하면 아래의 코드는 허용된다.

```ts
// a, b 인자 값에 타입을 명시하지 않아 any로 취급됨.
const add = (a, b) => a + b;
```

가능하면 `true`로 설정하여 암묵적 `any`를 피하는 것이 좋다.  
`any` 타입은 타입스크립트를 쓰는 의미를 사라지게 하며, 동적 언어의 장점을 사용하겠다는 의미도 있다.  
이는 타입스크립트의 문법으로 타입을 조금 더 넓게 선언하여 활용하는 편이 좋다.

### stickNullChecks (default: true)

모든 타입에 기본적으로 `null`과 `undefined`를 허용할지 지정하는 옵션이다.  
`false`로 지정하는 경우, 엄격한 `null`과 `undefined` 검사를 하지 않게 한다.  
`true`로 설정 시, 코드 작성에서 엄격함이 요구되어 어려움이 있으나,  
프로젝트가 커질 시 발생할 레퍼런스 오류를 방지하기 위해 `true`로 설정하는 것이 좋다.  
이 설정으로 타입 처리가 모호한 일부 코드에서는 타입 단언(`as`)을 이용하여 해결할 수 있다.

## 참조

- [tsconfig 공식 문서](https://www.typescriptlang.org/ko/tsconfig#types)
- [Effect Typescript p.10](https://effectivetypescript.com/)
