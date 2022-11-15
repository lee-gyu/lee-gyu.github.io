---
layout: default
title: Layout (1)
parent: Browser
nav_order: 5
permalink: /browser/layout1
---

## Positioning

`top`, `left`, `right`, `bottom`을 통해 요소를 배치할 위치를 정하는 레이아웃 속성.\
어떤 `position` 값을 지정했는지에 따라 지정한 좌표의 기준 위치가 달라진다.

- `position`: `static`
  - [Normal Flow](https://developer.mozilla.org/en-US/docs/Learn/CSS/CSS_layout/Normal_Flow)에 따라 요소를 배치한다.
  - top, left, right, bottom을 지정해도 레이아웃에 영향을 주지 않는다.

- `position`: `relative`
  - Normal Flow에 따라 배치되고, 해당 위치에서 상대적으로 좌표를 조정한다.\
    *기존 요소의 레이아웃은 차지한다.
  - relative를 지정하고, z-index를 auto로 지정하지 않으면 새로운 `Stacking Context`를 생성한다.
  - `table-*-group`, `table-row`, `table-column`, `table-cell`, `table-caption`의 display 속성에서는 작동 방식이 정의되어 있지 않다.

- `position`: `absolute`
  - 이 요소가 지정되면, Normal Flow 레이아웃에서 공간을 차지 하지 않고 배치되게 된다.
  - 초기 위치는 상대적으로 배치되어야 할 위치에서 시작한다.
  - `z-index`가 auto가 아닌 경우 새로운 Stacking Context를 생성한다.
  - 여백은 다른 여백과 겹치지 않는다.

- `position`: `fixed`

- `position`: `sticky`
  - 구형 브라우저에서는 동작이 정의되지 않을 수 있음!

### Stacking Context

z축을 사용하는 HTML 요소의 3차원 개념이다.\
각 레이어의 렌더링 순서를 처리하는 개념이다.

아래에 해당하는 경우 `Stacking Context` 레이어가 생성된다.

- 문서의 루트 요소 `<html>`
- position이 absolute, relative이고 z-index가 auto가 아닌 경우
- position이 fixed 또는 sticky인 요소
- flexbox 컨테이너의 자식 요소 중 z-index가 auto가 아닌 요소
- opacity가 1보다 작은 요소 (하위 레이어 출력)
- [mix-blend-mode](https://developer.mozilla.org/ko/docs/Web/CSS/mix-blend-mode)가 normal이 아닌 요소
- 아래 css style 중 하나라도 none이 아닌 요소
  - transform
  - filter
  - perspective
  - clip-path
  - mask / mask-image / mask-border
- [isolation](https://developer.mozilla.org/ko/docs/Web/CSS/isolation)이 isolate인 요소
- [-web-kit-overflow-scrolling](https://developer.mozilla.org/ko/docs/Web/CSS/-webkit-overflow-scrolling)이 touch인 요소
- [will-change](https://developer.mozilla.org/ko/docs/Web/CSS/will-change)의 값으로 Stacking Context를 생성하는 속성을 지정한 요소
- [contain](https://developer.mozilla.org/ko/docs/Web/CSS/contain)이 layout 또는 paint 둘 중하나를 포함하는 값

*자식의 `z-index` 값은 부모의 Stacking Context 맥락 안에서만 유효하다.

## Margin Collapsing



## 참조

- [Positioning](https://developer.mozilla.org/ko/docs/Web/CSS/position)
- [Stacking Context](https://developer.mozilla.org/ko/docs/Web/CSS/CSS_Positioning/Understanding_z_index/The_stacking_context)
- [Mastering margin collapsing](https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_Box_Model/Mastering_margin_collapsing)