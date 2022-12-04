---
layout: default
title: HTML5
nav_order: 1
parent: Web
permalink: /web/html5
---

## HTML?

- HyperText: 링크를 클릭해 다른 문서나 사이트로 이동할 수 있는 기능을 가진 텍스트
- Markup: 태그(tag)를 사용하여 문서의 구조를 기술함

### <!doctype html>

현재 문서가 html 유형이라는 것을 알리는 header\
HTML4에서는 별도의 선언이 필요했음.

### html 태그

웹 문서 시작을 알리는 태그\
lang 속성을 이용해서 사용할 언어를 지정할 수 있음. (언어 코드는 ISO 639-1 표준 키워드를 따름)

### head 태그

실제 화면에 출력되지 않고, 브라우저에게 알릴 정보들을 정의하는 태그\
주로 아래의 항목들을 선언한다.

- `<title>`: 문서의 제목을 나타냄 (탭)
- `<meta>`: 문자 인코딩, 문서 키워드, 요약 정보 등 검색 엔진 최적화 힌트
  - 문자 인코딩은 기본적으로 utf-8을 사용하여 모든 국자 언어를 커버할 수 있도록 한다. (`<meta charset="utf-8"/>`)
- `<style>`: 현재 페이지에서 쓰일 스타일 태그
- `<link>`: 현재 페이지에서 쓰일 리소스 링크 태그 (주로 css를 링크 시킴)
  - css 스타일 시트 링크
  - icon 링크
  - 각 미디어 별(핸드폰, 태블릿, PC)등에 따라 로드할 리소스 분기
  - 속성 `rel`에 `preload` `prefetch`를 이용하여 요청의 우선 순위를 조정 (이때 `as` 속성을 같이 사용해야함
  - onload, onerror 콜백 처리 가능

### body 태그

실제 브라우저에 출력될 태그 요소

- text 출력 관련 태그 (block)
  - h1, h2, ...: 제목
  - p: 단락
  - br: 줄 바꾸기
  - hr: 수평선 삽입
  - blockquote: 인용
  - pre: 작성한 Text 그대로 모두 출력

- inline 레벨 태그
  - strong
  - b
  - em
  - i
  - q: 인용 내용 표시 (blockquote와 유사하나 inline 레이아웃)
  - mark
  - span
  - ruby: 동아시아 문자 주석 표시 (rt 태그와 같이 사용)
  - abbr
  - cite
  - code: 소스 코드 표시
  - kbd: 키보드 키 또는 음성 명령 같은 내용
  - small: 작게 표시
  - sub
  - sup
  - s: 취소선
  - u: 밑줄

- 목록을 만드는 태그
  - ul > li
    - 순서 없는 목록 생성.
    - 불릿 스타일은 list-style-type을 이용해 수정
  - ol > li
    - 순서가 있는 목록 생성
    - type 속성을 이용해서 불릿 스타일 조정
    - start, reversed 속성 이용
  - dl, dt, dd 태그
    - dl: 목록 (dt와 dd를 담는 컨테이너)
    - dt: 제목
    - dd: 설명

- 표를 만드는 태그
  - table
  - thead
  - tbody
  - tfoot
  - colgroup > col: 열별 스타일 지정
  - caption: 표의 제목
  - figcaption: figure 태그와 함께 사용
  - tr
  - td, th
    - td: 내용 셀
    - th: 제목 셀
    - rowspan, colspan
    -  

### html에서의 특수 문자 사용

- [참조](https://html.spec.whatwg.org/multipage/named-characters.html#named-character-references)

## 참조

- <https://ko.wikipedia.org/wiki/%ED%95%98%EC%9D%B4%ED%8D%BC%ED%85%8D%EC%8A%A4%ED%8A%B8>
- <https://ko.wikipedia.org/wiki/%EB%A7%88%ED%81%AC%EC%97%85_%EC%96%B8%EC%96%B4>
- [mdn - link element](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/link)
