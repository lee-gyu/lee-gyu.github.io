---
layout: default
title: Rules of React
nav_order: 6
parent: React
permalink: /react/rules
---

## 개요

이 글은 [The Rules of React](https://gist.github.com/sebmarkbage/75f0838967cd003cd7f9ab938eb1958f) 글을 참고하여 작성된 글이다.\
상태 관리와 안정적인 React 컴포넌트 작성을 위해 알아야할 기본 패턴, 지켜야할 규칙들이다.

### 순수(Pure)한 함수는 무엇인가?

리액트에서의 함수들은 순수하다고 가정되었다.\
클래스형 컴포넌트에서는 생성자, getDerivedStateFromProps, shouldComponentUpdate, render 함수가 순수하다고 가정한다.

```js
class MyComponent extends React.Component {
  constructor() {
    // pure
  }

  static getDerivedStateFromProps() {
    // pure
  }

  shouldComponentUpdate() {
    // pure
  }

  render() {
    // pure
  }
}
```

그러나, componentDidMount, componentDidUpdate, componentWillUnmount 그리고 별도의 커스텀 이벤트 핸들러 메소드들은\
순수한 함수로 요구되지는 않는다.

```js
class MyComponent extends React.Component {
  componentDidMount() {
    // not pure
  }
  componentDidUpdate() {
    // not pure
  }
  componentWillUnmount() {
    // not pure
  }
  handleClick = () => {
    // not pure
  };
}
```

함수형 컴포넌트는 render 메소드를 리턴하는 함수라고 취급되므로, 순수하여야 한다.

```jsx
function MyComponent() {
  // pure
  return <div>...</div>;
}
```

### Getters in state

setState는 다른 특별한 제한을 가진다.

### 리액트에서 순수함의 의미

순수함(Pure)은 일반적으로 하나의 명시적인 의미를 가지지만, 정의에 따라 다양하게 변형될 수 있다.\
리액트에서는 멱등법칙의 성질을 가진다는 의미로 대부분 쓰여진다.\
이 말은, 같은 입력이 주어지면 언제나 같은 결과를 출력해야한다는 의미이다.

## 금지된 행위

아래에 해당되는 내용은 하지 말아야하는 것들이다.

-
