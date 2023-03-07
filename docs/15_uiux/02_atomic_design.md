---
layout: default
title: Atomic Design
parent: UI/UX
nav_order: 2
permalink: /ui-ux/atomic-design
---

## 개요

brad frost의 아토믹 디자인은 화학적 관점에서 영감을 얻은 디자인 시스템이다.\
모든 것은 atom(원자)으로 구성되고, 그것들이 결합하여 molecule(분자)이 되고,\
이것들은 organism(유기체)로 경합하여 궁극적으로 물질을 생성한다.

아토믹 디자인에서는 이 개념을 차용하여 atom > molecule > organism > template > page\
5가지 레벨로 나눈다.

각 단계별로 기준을 가지고 있으며, 이 과정을 통해 확장하고 최종 컨텐츠를 보여줄 수 있다.

![atomic-design](/assets/img/atomic-design-flow.png)

## Atom

atom은 더 이상 분해할 수 없는 기본 컴포넌트\
모든 기본 스타일을 한눈에 보여줌.\
label, input, button과 같은 기본 HTML 요소 혹은 글꼴, 애니메이션, 컬러 팔렛, 레이아웃 등 추상적인 요소

## Molecule

여러 atom들을 결합하여 고육한 특성을 가짐

## Organism

Navigator, Header, Footer 등

## Template

구조를 잡는 와이어 프레임.\
실제 컨텐츠가 없는 수준의 스켈레톤

## Page

template의 인스턴스라고 볼 수 있다.\
실제 유저가 볼 수 있는 컨텐츠, 구현을 담음.

## 참조

- <https://fe-developers.kakaoent.com/2022/220505-how-page-part-use-atomic-design-system/>
- <https://atomicdesign.bradfrost.com/chapter-2/>
