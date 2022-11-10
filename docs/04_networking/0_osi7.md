---
layout: default
title: OSI 7 Layer
parent: Networking
nav_order: 0
permalink: /networking/osi7
---

## OSI 7 Layer

네트쿼으 통신에서 일어나는 과정을 7단계로 개념화하여 나타낸 것.

### 1. User Mode (Application)

Process 수준

- Socket: TCP를 User Mode App 프로세스가 접근할 수 있도록 파일 형식으로 추상화한 인터페이스

- L7 (Application)

- L6 (Presentation)

- L5 (Session)

### 2. Kernel Mode (System S/W)

TCP/IP

Device Driver

- L4 (Transport: 전송 계층)
  - 식별자: Port 번호

- L3 (Network)
  - 식별자: IP주소

### 3. H/W - Access

NIC

- L2 (DataLink)

- L1 (Physical)
  - 식별자: MAC

## OSI 7 Layer 개념적 내용

## Abstraction Implementation

## 결론

## 참조

[네트워크를 배우려는 사람들을 위해 - 널널한 개발자 TV](https://www.youtube.com/watch?v=k1gyh9BlOT8&list=PLXvgR_grOs1BFH-TuqFsfHqbh-gpMbFoy)