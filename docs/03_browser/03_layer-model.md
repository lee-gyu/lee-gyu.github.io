---
layout: default
title: Layer Model
parent: Browser
nav_order: 3
permalink: /browser/layer-model
---

## 개요

`Layer Model`은 웹 표준이 아니며, 브라우저 구현에 의존적인 개념이다.\
Layer는 크게 2가지로 나뉜다. (`webkit` / `blink` 브라우저 엔진 기준)

- `Render Layer`: 하드웨어 가속 처리를 위해 사용하는 논리적인 레이어\
  아래 특성을 가지면 Layer가 생성된다.

  - 페이지의 root 요소
  - 명시적인 position 특성을 가지는 경우 (relative, absolute, fixed, sticky 등)
  - opacity가 1미만인 경우 (투명도를 가짐)
  - filter, mask, transform, mix-blend-mode를 가지는 경우
  - auto가 아닌 column-count, column-width 속성을 가진 경우
  - relection 속성을 가진 경우
  - video 엘리멘트

- `Graphics Layer`: 하드웨어 가속 처리를 위한 레이어 (GPU에게 텍스처 처리를 위임)\
  아래 특성을 가지면 `GraphicsLayer`로 승격된다.
  - `video` 또는 `canvas` 태그
  - 하드웨어 가속 플러그인 사용
  - 3d transform 속성 존재
  - 하드웨어 가속된 2D canvas
  - transition, animation 속성이 있는 경우
  - will-change를 설정한 경우

## 하드웨어 가속 주의할 점

- 추가적인 레이어 생성으로 메모리 발생
- RAM의 요소들을 VRAM으로 전달하는 과정이 필요함

즉, 모든 요소를 `GraphicsLayer`로 처리하면 오히려 성능이 저하된다.

## Compositing

레이아웃 재계산 없이 GPU에서 처리되는 속성 (애니메이션 처리에 유리)

- transform
- opacity

### `GraphicsLayer` 만들기

```css
#make-graphics-layer {
  transform: translateZ(0);
  transform: translate3d(0, 0, 0);
  will-change: transform;
}
```

## 결론

reflow / repaint와 레이어 비용을 고려해서 선택.\
너무 많은 레이어를 만드는 것은 성능 하락이 있다. (리스트, 테이블 셀 등)

## 참조

- [Layer Model](https://www.slideshare.net/Sn0wLe0pard/layer-model)
- [하드웨어 가속](https://d2.naver.com/helloworld/2061385)
- [코딩하는 경제학도](https://ssocoit.tistory.com/259)
- [웹 성능 최적화에 필요한 브라우저의 모든 것](https://tv.naver.com/v/4578425)
- [프론트엔드 성능 최적화](https://www.alibabacloud.com/blog/front-end-performance-optimization-with-accelerated-compositing-part-1_594194)
- [크롬 렌저링 성능 인자 이해](https://cwdoh.com/workshop/2014/06/14/understanding-rendering-performance-matters-in-chrome/)
- [Layer Model by im-d-team](https://github.com/im-d-team/Dev-Docs/blob/master/Browser/Layer_Model.md)
