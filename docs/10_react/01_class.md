---
layout: default
title: Class Component
nav_order: 1
parent: React
permalink: /react/class-component
---

## 개요

리액트의 근본 컴포넌트 선언 기법.\
현재는 함수형 컴포넌트에 관련 선언 기법의 사용 사례들이 줄고 있음.

개체지향 패러다임(OOP) 관점에서 주로 사용될 수 있는 컴포넌트 정의 방법.\
주요 라이프사이클 메서드를 이해하는 것이 중요하다.\
클래스 컴포넌트와 함수형 컴포넌트는 100% 호환이 가능하나,\
클래스 컴포넌트에서 가능한 모든 기능을 함수형 컴포넌트에서 지원하지는 않는다.\
그러니 클래스 컴포넌트의 여러 부분도 알고 있어야 한다.

클래스 컴포넌트는 아래와 같이 정의된다.

```jsx

class Button extends React.Component {

  constructor(props) {
    super(props);

    // 상태 정의
    this.state = { counter: 0 };
  }

  render() {
    return (
      <button>{this.props.label}</button>
    )
  }
}

```

## Class Component의 문제점

현재 함수형 컴포넌트로 대부분의 컴포넌트들이 대체되어 가고 있다.\
그러한 이유는 무엇인가?\

### 함수형 패러다임이 리액트 철학에 더욱 가까운 패러다임

첫 번째 이유로는 리액트라는 것은, 데이터 흐름에 반응하는(Reactive)\
UI 컴포넌트를 작성하는 것이다.\
이는 단순하게 살펴보면, 상태라는 것이 변경이 되었을 때,\
변경에 대한 이벤트가 전파되고(push), 그 이벤트에 종속성이 있는 컴포넌트들이\
re-render를 호출받게 된다.

여기서 멱등성에 만족하는 함수형 컴포넌트 구성이\
이러한 push 기반 UI 구성에 유리하고,\
테스팅을 작성하거나 독립적인 UI 컴포넌트를 만드는데에 더욱 만족하는 기법을 유도한다.

개체지향형 패러다임으로 UI 컴포넌트를 구성하는 것은 이러한 방법보다는\
다른 전역 상태나 멱등성에 어긋나는 코딩을 유도하여 리액트 철학에 맞지 않는 사례들로\
개발자들이 코딩하기 쉽다는 부분이 있을 것으로 보인다.

### js 언어 상의 문제

이벤트를 바인딩하는 것이 그 예라고 볼 수 있다.\
javascript의 함수에 실행 context를 지정해주어야 이벤트 호출 시\
현재 인스턴스의 this를 바라볼 수 있다.

그래서 아래와 같은 문제처럼, 클래스 멤버 메소드를 bind로 다시 지정해야하는 번거로움이 있다.

```jsx

class App extends React.Component {

  constructor(props) {
    super(props);

    this.state = { counter: 0 };

    this.handleClick = this.handleClick.bind(this);

  }

  handleClick() {
    this.setState(prevState => ( { counter: prevState.counter + 1 } ))
  }

  render() {
    return (
      <div>
        <p>{this.state.counter}</p>
        <button onClick={this.handleClick}>Increase counter!</button>
      </div>
    )
  }
}
```

물론 아래처럼 arrow function을 이용하면 bind를 쓰는 번거로움을 줄일 수 있지만,\
매 render마다 함수가 생성되는 이슈가 있다.

```jsx
class App extends React.Component {

  constructor(props) {
    super(props);

    this.state = { counter: 0 };
  }

  handleClick() {
    this.setState(prevState => ( { counter: prevState.counter + 1 } ))
  }

  render() {
    return (
      <div>
        <p>{this.state.counter}</p>
        <button onClick={() => this.handleClick()}>Increase counter!</button>
      </div>
    )
  }
}
```

### 클래스 컴포넌트의 디테일함

함수형 컴포넌트의 hook API 구성에 비해서 클래스 컴포넌트는\
re-render 시 호출되는 구성 요소가 세부적이고 더 많다.\
물론 함수형은 패러다임 상, Lifecycle 구성을 더 복잡하게 할 필요가 없기에\
크게보면, useEffect 정도만 알아도 대부분의 문제를 해결하기에 충분하다.

## Lifecycle Member Method

## vs Functional Component
