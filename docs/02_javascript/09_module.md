---
layout: default
title: Module
nav_order: 9
parent: Javascript
permalink: /javascript/module
---

## 개요

대부분의 프로그램 소스 코드는 재사용을 위해 코드를 잘게 쪼개어 호출하여 사용한다.\
같은 프로젝트 내라면 단순히 해당 프로젝트에서 제공하는 모듈 import / export로 코드를 호출할 수 있다.

하지만, 다른 프로젝트에서의 API를 호출하려면 어떻게 해야할까?\
이를 위해 프로젝트를 어떻게 모듈화를 하는가에 대한 다양한 방안이 있다.\
불행하게도, javascript 환경은 무구히 많은 세월동안 다양한 모듈 방법론이 서로 싸워왔고,\
그 결과 다양한 모듈 방법이 공개되어 주니어 개발자에게 큰 혼란을 주고 있다.\
사용하려는 프로젝트 유형에 따라 어떤 방법으 모듈을 제공할지 선택을 해야한다.\
아무런 생각 없이 모듈화 방법을 채택하면 프로젝트 미래에 큰 영향을 받을 수 있다.

## CJS (CommonJS)

CJS는 Node.js 기반 런타임 환경의 서버 사이드에서 넓게 사용된다.\
`require()` 함수와 `module.exports`를 이용하여 구성된다.

CJS의 모듈 import는 동기적으로 처리되며, 각각 순차적으로 모듈을 로드할 때 적합하다.\
CJS는 기본으로 브라우저에서 쓸 수 있는 방식이 아니므로, Babel 같은 트랜스파일러와 같이 사용했음.

## AMD (Asynchronous Module Definition)

모듈 로더를 이용하여 사용되는 방식. (RequireJS 같은 것)\
CJS 방식에서 비동기적 모듈 로딩을 지원하기 위해 나왔다.\
주로 브라우저 단에서 쓰인다.

`define` 메소드로 필요한 모듈을 정의하고, `require` 메소드로\
모듈이 로드되었을 때 처리할 로직을 호출할 수 있다. (비동기)\
주로 핵심 모듈을 비동기적으로 로드하여 브라우저 상에서 빠른 응답을 처리 하기 위해\
고려할 수 있다.

## UMD (Universal Module Definition)

AMD, CJS 모든 환경에서 쓸 수 있도록 설계된 모듈이다. (서버, 브라우저 모두)\
호환성에 집중한 방식이며, 가장 많이 사용되는 방식이다.\
대신 생성하는 코드가 복잡하다. (트랜스파일러가 AMD, CJS, ESM 모두 지원하는 코드를 생성한다.)

## ESM (ES2015)

ES2015 공식 표준으로 자리 잡은 모듈 방식이다.\
브라우저 단에서 넓게 쓰이고 있으며, 타입스크립트의 기본 모듈 방식이기도 하다.\
Node 환경에서는 v16부터 공식 지원한다. (일부 v12, v14버전도 지원하긴 하다.)\

비동기 모듈 로딩을 지원하는 dynamic import는 ES2020부터 지원한다.\
브라우저에서는 스크립트 태그의 type 속성을 module로 지정해주어야 스크립트 내에서 문법이 활성화된다.

## System Module

UMD는 ESM 코드를 생성하지 않으므로, 해당 부분까지 지원하는 모듈 로더이다.\
CJS, AMD, ESM 모두를 지원하므로 훨씬 호환성이 좋다.

## IIFE (Immediately Invoked Function Expression Module)

일종의 모듈이라기 보다는 javascript 패턴의 일종으로\
self-executing function라고도 알려져있다.\
하나의 응용프로그램 번들을 실행할 때 사용할 수도 있고,\
namespace로 취급하여 내부를 캡슐화하여 사용할 수 있다.

만약, 모듈로 사용한다면 namespace 방식으로 쓰는 것이 적합하다.

## 참조

- [What Are CJS, AMD, UMD, ESM, System, and IIFE?](https://medium.com/better-programming/what-are-cjs-amd-umd-esm-system-and-iife-3633a112db62)
