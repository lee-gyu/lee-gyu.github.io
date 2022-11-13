---
layout: default
title: Event Loop
nav_order: 11
parent: Browser
permalink: /browser/event-loop
---

## Event Loop란?

Javascript의 런타임 모델은 아래 하위 작업을 처리하는 이벤트 루프에 기반한다.

- 자바스크립트 런타임 환경 시각적 표현\
  ![](/assets/img/event-loop-architecture.png)

  - Stack: 함수 호출은 하나의 스택을 가진다.\
    **_NOTE_**: 함수의 인자들과 지역 변수들은 함수 반환 이후에도 계속 존재할 수 있음.

- 이벤트 수집과 처리
- 리큐에 대기 중인 하위 작업 처리

## 참조

- [The event loop - mdn](https://developer.mozilla.org/en-US/docs/Web/JavaScript/EventLoop)
