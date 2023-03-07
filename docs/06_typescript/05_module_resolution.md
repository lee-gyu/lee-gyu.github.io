---
layout: default
title: Module Resolution
parent: Typescript
nav_order: 5
permalink: /typescript/module-resolution
---

## 개요

타입스크립트는 import할 Module을 어떻게 찾는가?

### Node.js가 상대 경로의 모듈을 찾는 흐름

아래와 같은 코드가 있다고 가정하자.

```js
const module = require("./module-api");
```

1. 해당 파일의 경로의 `module-api.js`를 찾는다.
2. `module-api` 폴더를 찾는다.
   1. 해당 폴더의 `package.json`을 찾는다.
   2. `package.json`이 있는 경우, 해당 파일의 `main` 속성 값을 보고, 해당 js를 불러온다.
3. `module-api/index.js`를 찾는다.

위 3단계를 거쳐, 해당 모듈을 import하게 된다.

### 절대 경로의 모듈을 찾는 흐름


### Typescript는 모듈을 어떻게 찾는가?

타입 스크립트의 경우 `ts`, `tsx`, `d.ts` `package.json`의 `types` 속성 등을 사용한다.

## 경로 매핑

### paths

### rootDirs

## --noResolve

타입스크립트는 컴파일 단계 전에 import된 모든 모듈을 로드하려고 한다.\
이는 중간에 import 할 수 없는 모듈이 있는지 검사하기 위해서다.\
--noResolve를 하면, 런타임에 해당 부분에서 에러가 출력되며 타입스크립트 컴파일 단계에서는 오류가 무시된다.

## 참조

- <https://www.typescriptlang.org/docs/handbook/module-resolution.html>
- <https://nodejs.org/api/modules.html#modules_folders_as_modules>
- <https://nodejs.org/api/modules.html#modules_file_modules>
- <https://nodejs.org/api/modules.html#modules_loading_from_node_modules_folders>