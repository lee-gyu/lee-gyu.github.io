---
layout: default
title: Rendering
parent: Browser
nav_order: 1
permalink: /browser/rendering
---

## 브라우저 렌더링 과정

```mermaid
flowchart LR;
    NETWORK-->HTML;
    NETWORK-->JAVASCRIPT;
    NETWORK-->CSS;
    HTML-->DOM;
    CSS-->CSSOM;
    DOM-->RENDER-TREE;
    CSSOM-->RENDER-TREE;
    JAVASCRIPT-->RENDER-TREE;
    RENDER-TREE-->LAYOUT;
    LAYOUT-->PAINT;
    PAINT-->COMPOSITE;
```

### 1. Network

### 2. HTML / CSS / JAVASCRIPT

### 3. Render Tree

## 참조

- [렌더러 프로세스의 내부 동작](https://d2.naver.com/helloworld/5237120)
