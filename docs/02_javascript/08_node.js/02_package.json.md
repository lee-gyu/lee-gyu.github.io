---
layout: default
title: package.json
nav_order: 2
parent: node.js
grand_parent: Javascript
permalink: /javascript/node-js/package-json
---

## 개요

node.js 기반의 프로젝트는 패키지를 기본 단위로 모듈을 공개한다.\
패키지를 통해 다른 라이브러리를 모듈로서 식별하고,\
패키지의 정보를 나타내는 `package.json` 파일의 구조를 이해하는 것이\
내부 구조와, 배포되는 내용을 이해하는 것이다.

이 파일에 대한 json scheme은 npm 버전에 따라 구조가 변경될 수 있다.\
현재 `9.2.0` 기준으로 작성되었다.

## package.json

json 형식으로 작성된 패키지를 나타내는 javascript object이다.\
아래는 각 멤버 속성을 기술한다.

- name: 패키지를 배포할 때 식별되는 이름으로, 다른 패키지와 중복되어서는 안된다.\
  만약, 패키지를 배포할 계획이 없다면 패키지 이름은 대충 지어도 괜찮다.\
  아래와 같은 규칙과 제약 사항이 권장된다.
  - 214자 이하여야 한다.
  - 범위가 지정된 패키지에 한해서 이름은 .(dot) 또는 _(underscore)로 시작될 수 있다.
  - 대문자를 포함하지 않는다.
  - 이름은 URL이나 폴더의 일부가 되므로, URL에 제약이 있는 문자는 포함할 수 없다.
  - node core 모듈의 이름을 사용하면 안된다.
  - node나 js 등을 포함하지마라. (js 파일처럼 보이며, node 버전은 engines 속성에서 명시한다.)
  - 명확하고 의미있는 이름을 지어라.
  - 이미 공개된 패키지 이름은 사용하지마라.
- version: semantic versioning을 기반으로한 버전 정보 명시 (`semver` 패키지 참조)
- description: 패키지에 대한 간략한 설명. (npm search를 통해 표시)
- keywords: 검색을 위한 연관 키워드 배열 (npm search를 통해 표시)
- homepage: 관련 프로젝트의 웹 사이트 URL
- bugs: 연관된 이슈에 대해 리포트할 링크나 개발자 이메일을 표시.\
  오브젝트로서 아래의 속성이 있다.
  - email: 메인 개발자 이메일
  - url: 보통 github issues 페이지를 명시\
    * `npm bugs`를 통해 확인 가능
- license: 해당 패키지의 라이선스를 명시. (SPDX 라이선스 식별 명명 규칙을 사용)
  - 오브젝트로서도 사용 가능함.
- author: 프로젝트 개발자 명시 (여러 명일 경우, contributors에 배열로 명시 가능)
- contributors: 프로젝트에 기여한 사람 목록 명시
- funding: 프로젝트 후원/기부를 받기 위한 정보 입력
- files: 선택적인 항목이며, 이 패키지가 설치될 때 필요한 의존성 파일 목록을 나열.\
  root 경로의 `.npmignore` 파일로도 연관 파일 정보를 제공할 수 있음.
  - 기본적으로 제공되는 파일
    - package.json
    - README
    - LICENSE / LICENCE
    - main 속성의 파일
  - 기본적으로 무시되는 파일
    - .git
    - CVS
    - .svn
    - .hg
    - .lock-wscript
    - .wafpickle
    - .npmrc
    - node_modules
    - packge-lock.json
    - etc...
- main: 패키지의 주 entry point 스크립트 파일 경로를 명시한다.  
  이 경로는 import, require등의 모듈을 참조할 때 기본으로 로드할 파일이 된다.
- browser: 브라우저에서 구동되는 패키지의 경우 main 대신 사용하는 필드
- bin: 패키지에 실행 가능한 명령을 설정할 때 쓴다. 이를 통해 패키지의 CLI 호출을 구현
- man:  

정리 중...

## 참조

- [package.json](https://docs.npmjs.com/cli/v9/configuring-npm/package-json)
- [알고 쓰자 package.json](https://hoya-kim.github.io/2021/09/14/package-json/)
