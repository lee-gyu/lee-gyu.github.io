---
layout: default
title: Performance
nav_order: 10
parent: Browser
permalink: /browser/performance
---

## 과거 브라우저 렌더링 메인 플로우

DOM / CSSOM > Render Tree > Layout > Paint

### HTML Parser

DevTools Records

HTML Parsing > HTML 내용을 파싱해서 DOM Tree 생성

DOM Tree Model을 만들어 개체 조작을 쉽게 하도록 함.

Bytes > Characters > Tokens > Nodes > DOM

한번에 처리하지 않고, 데이터를 받는 족족 incremental 처리함

### Javascript Engine

HTML 내부 script 태그, 사용자 입력, RAF(Request Animate Frame)

v8 방식

source code > parser > syntax tree > bytecode generator > JIT Compiler > Execution

Byte code vs machine code

JIT의 단점 machine code를 만드는데에 시간이 소요됨

대부분의 자바스크립트 엔진이 개선됨

### Recalculate Style

파싱된 CSS(CSSOM) 결과를 Render Tree에 적용하는 과정 (width, height, offsetLeft 등)\
CSSOM 역시 JS API를 가짐 (DOM API처럼)

### Render Tree

Recalculate Style의 결과\
Render Tree = DOM Tree + CSSOM Tree\
DOM Tree와 Render Tree는 1:1 관계가 아님\
화면에 보이는 요소 중심 구성 (display: none이거나 head 태그 내부 요소는 포함되지 않는다.)

### Layout 단계

- 좌표 계산 과정 (Box Model, Visual formatting model 기반)
- 박스의 크기와 위치를 계산하는 과정
- Global and incremental layout

#### Layout 알고리즘

- 각 박스의 넓이는 (viewport) 기준
- 높이는 contents (fonts) 기준
- 윈도우 사이즈 변경 또는 폰트 변경 시 Global Layout 발생
  - Global Layout: 전체 레이아웃 재계산 발생
  - Incremental Layout: 부분적 레이아웃 재계산

#### Block / Inline

- Block: 아래 위로만 쌓임.
- Inline: 옆으로 쌓이다가 부모 너비를 초과하면 아래로 쌓임.
- 기본적으로 block
  - html, address, blockquote, body, dd, div, dl, dt, fieldset, etc...

### Paint

- 각 요소에 필요한 색상을 그리는 작업

## 신규 브라우저 main flow

```mermaid
flowchart LR;
    JS-->Recalc. Style;
    Recalc. Style-->Layout;
    Layout-->Update Layer Tree;
    Update Layer Tree-->Paint;
    Paint-->Composite;
```

- 신규 단계

  - Update Layer Tree
    - Layer란? 브라우저가 출력하기 위한 하나의 레이어
    - position을 주거나 overflow 등등,,, 다른 레이어와 겹칠 수 있는 속성이 있는 경우
    - z-index overlapping
    - scrollbar도 별도의 내부 internal 레이어가 생김
  - Composite: 모든 레이어들 간의 합성으로 최종 출력할 한 장의 화면을 그림
    - 보이지 않는 레이어 부분을 처리하지 않기 위해 Tile로 나누어 렌더 처리함

- Paint 과정은 비용이 비싸다 (픽셀이 많음.)
- Layer를 나누어 성능 최적화 고려 필요

## 브라우저는 어떻게 frame을 만드는가?

- VSync란? 60hz의 모니터가 16.6ms로 framebuffer 처리.. 디스플레이 주사율에 맞게 화면 업데이트
- VSync 되지 않은 경우, 하지 않아도 될 paint 작업을 하게 될 수도 있음.
  - 어차피 화면은 1초에 60번만 깜빡이므로
- 16.6m 마다 아래 과정 수행하면 VSynz된 것
  - JS > Recalc. Style > Layout > Update Layer Tree > Paint > Composite

### 예전 Main Thread Rendering

기본적으로 모든 작업은 Main Thread에서만 처리됨...\
Main Thread가 blocking 되는 경우,,, 화면이 멈춤!

#### Why?

각 부분을 병렬로 처리할 수 없는 구조\
다른 Thread로 위임해서 처리되는 구조가 아님..

### 현재 크롬 엔진이 해결한 방법 Multi Threads

#### Compositor Thread 분리 (Composite 부분)

가능한 이유: 다른 Thread로 복사할 정보량이 많지 않음.

화면 Scrolling 처리를 Compositor Thread에 위임 가능

zoom, scroll, animation의 과정에서 Main Thread의 blocking이 발생하지 않게 됨

### Raster Threads

기존 Paint 과정을 다른 Thread에 위임하기 위해 나온 쓰레드

Replay and drawing

그래픽 관련 작업을 버퍼에 쌓아서 main thread에서는 처리할 작업만 buffer에 담고,\
Raster Thread에서 해당 작업을 처리함.

- SKIA 회사 (Canvas의 그래픽 처리 구조)

## VSync Based 브라우저

- 멀티 프로세스 아키텍처
- Browser Process (크롬 메인 프로세스)
- Renderer Process (탭당 하나)
  - Sandbox 되어 있음 (다른 메모리 영역이랑 격리됨)
- 사용자 Input과 VSync 충돌 문제
  - VSync 중에 사용자 Input 들어올 수 있음.
  - input tick
  - vsync tick
- 좌표 계산 전에 rAF를 먼저 처리함
- DOM Timer vs rAF 중에 어떤 것이 애니메이션 API가 유리함?
  - rAF가 유리함 (VSync 전에 rAF queue을 처리하므로)
- Idle 타임에 무엇을?
  - Idle GC task
  - Idle callback task (JS Callback)
  - 노는 시간에 다른 작업을 처리함

## Main Thread busy

Main Thread에 걸린 작업이 많아 frame 처리를 20ms 후에 하는 경우.

## 최적화 팁

- 전체 파이프라인 중 어디를 수정?
  - JS > Layout (width, height, font) > Paint (color) > Composite (opacity, transform)
  - 각 수정 코스트를 알아두기
  - transforms, web animation 효율
  - GPU Rasterization 기법 (GPU 통해서 처리 GraphicsLayer will-change 등)
  - Layer가 너무 많으면 메모리를 많이 사용하고 많이 느려짐

## chrome://tracing (성능 처리 과정을 추적)

devtools 보다 디테일하게 웹 처리 과정을 확인할 수 있음

## 결론

### VSync

웹의 렌더링에 대한 과정을 이해하고

## 참조

- [웹 성능 최적화에 필요한 브라우저의 모든 것]()
