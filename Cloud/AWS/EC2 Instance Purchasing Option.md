# EC2 Instance Purchasing Option

![](data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAJYAAABgCAMAAADIFHvUAAAA0lBMVEX////1hjWRQQeMPQHObCSVRAnkey6rVBX1hTL7+PXIdDqQPwD8ijb3kESLOgDLaiS4XRySRBPkgTr19fWJMACBgYG5ZS2QkJD2gyzv7+/f399NTU3R0dFkZGSmpqb2gSbRt6pxcXHNrp/6x6f71LyxsbE3NzdDQ0P27eafWjLkhULp29S8kXv4v53XwbT+7eL2rID5qnaygWqJJAD1fBLUp435omf95NWud1nq0sT3mlqeYkTRnn+USyD+mVPNiV6tYC/OgE32tIzGoY4gICDDw8OMNO5XAAAC+0lEQVRoge3abVfaMBQH8NviXGtnFdKapklaAivgEB/Zpm4+zNnv/5V2A4jC8QjbTh/G8n9Rawnn/Lj30hekACYmJib/bVy3asErGXQOP3UHVSuWMjxqBnYr3R2dVC15mePA9+xmy3JSq06wdmDbmmXVBjYZ9GeWhqWnVcPczmFr5C6wMFF6ViVseH4RNFrp+OHzIgth4y9fK2NdBhrjWNFWY4mFsKgSmHs1gEt/yrJeYWnY9ceS77CDzrf96+7bLD395cKO/cA/cNL39kvWu+1lFsLG5cFc6AS2d2BZq1m6YrfdMmDDo73T788sW2PeYE3usN3CVedBsJMi44nVWMlCmFW0yvU9f+fDXuM3qoWs3cJZ3ozV2K81a60mmmoZ1h+wzGxtAMs00bCKYpnZ2gCWaeIGsEwTDasolpmtDWCZJhpWUSwzWxvAMk1ch1WzHykvAmRt1Y0Fw6Obvds7f87yVrOi9KxwFgC7che2C1awovFZWXtS7QsPWc4auxhRVBoKJ6x9GBxEu/feCha2r+Tdu/bdaHD+9g5ZqZV6kadtzldZJc7UUtp24CErjX74y6xoXOE+uttuBtvpw8nSFrqT4rXKUFOYfuxhgeWkTi0ehVhgOalVcaWeg/exKasuD41M4/5s+nr4ozqhdNzOjb/tjOr2pJQe/to9vmXyr4WttQgDQOJYH9Z6x19GPMZrrOorRYFJPDIV8qxwFagwBIiJYCB0KYQgEAssyOSMETFBk54+ykyvZJDzwlVExpwBl5Qr2otBJajMkl4GklIOIaf9XC/rMTT2Zu/JZeGsLIEwhz4DlUOS6MnhCOCQUcAX8CVB9bJHKUXcn30SLgpncam4gj6BUGgWDSmyVDwh0hwvilAv04WKZ9VSSeEq1mcMuzhnPQJWK0NJrnR/8WKuWaTHsIsqIUQApaTwr2KmPzkViuABsgzCkCoSSoVnCquCF6dN5FKG+E2UMhFcKUkKZpH5n9mZLgQh+p/JjWq+bnaNzE9NTExMTExm+QUGlmO1PsKy7QAAAABJRU5ErkJggg==) <br>
인스턴스 구매 옵션으로는 다양한 종류의 워크로드가 있고 AWS에 필요한 AWS를 지정해 할인을 받고 비용을 최적화 할 수 있다.
<br>
<br>

## 요약정리 (각 제품을 리조트에 비유)

- 온디맨드(On demand)
  - 리조트가 있고, 원할 때 언제나 리조트에 오고 전체 가격을 지불한다.
- 예약(Reserved)
  - 리조트에 1~3년동안 오래 체류할 계획이라면 장기 예약을 해 많은 할인을 받게 된
- 절약 플랜(Saving Plans)
  - 나의 리조트에서 일정한 금액을 지출할 것을 알고 있다
  - 12개월 동안 매월 30만원 지출 예정이다. 따라서 시간이 지나면 객실 타입을 변경할 수 있다
- 스폿 인스턴스 (Spot Instance)
  - 빈객실 마지막 특가
  - 많은 할인률
  - 언제라도 쫒겨날 수 있
- Dedicated Host
  - 나만의 리조트를 받게된다.
- 용량예약(Capacity Reservations)
  - 객실 예약할 예정이 있지만 체류할지는 확실치 않다고 하는것과 같다
  - 체류할 수도 있겠지만, 체류하지 않는 경우에도 그 객실을 예약하는 전체 비용을 지불하게 된다.
    <br>
    <br>

## On-Demand Instances

- 사용한 만큼 비용을 지불하게된다.
- Linux, windows 초단위 청구 다른 운영체제는 시간단위 청구가 이루어진다.
- 비용이 가장 많이 들지만 바로 지불할 금액이없고, 장기적인 약정도 필요없다.
- 따라서 단기적이고 중단없는 워크로드가 필요하거나, 앱플리케이션의 거동을 예측할 수 없을때 추천 된다.
  <br>
  <br>

## Reserved(1 & 3 Years)

Reserved Instances(예약 인스턴스)

- 예약 인스턴스는 온디맨드에 비해 72% 할인을 제공한다.
- 인스턴스 타입, 리전, 테전시,OS들을 예약한다.
- 1~3년의 예약 인스턴스를 사용 할 수 있으며, 장기간의 워크로드를 위한것이다.
- 부분 선결제, 선결제 없음 중에 선택할 수 있다(선결제를 하면 최대 할인을 받을 수 있다.)
- 데이터베이스를 장기간 실행할 계획이라면 예약 인스턴스를 사용하는 것이 좋다.
- 사용량이 일정한 애플리케이션에 예약인스턴스를 사용하는게 좋다(데이터베이)
  <br>
  <br>

## Convertible Reserved Instances(전환형 예약 인스턴스)

- 시간이 지나면 인스턴스 타입을 변경할 수 있다.
- 인스턴스 타입, 인스턴스 패밀리, 운영체계, 범위, 테넌시를 변경할 수 있다.
- 유연성이 큰 대신 할인율이 약간 적다(최대 66% 할인 받을 수 있다.)

<br>
<br>

## Dedicated Hosts

- 물리적 서버 전체를 예약해서 인스턴스 배치를 제어 할 수 있다.
- 전용 인스턴스는 다른 고객이 나의 하드웨어를 공유하지 않는다는 의미이다.
  <br>
  <br>

## Capacity Reservations(EC2 용량예약)

- 원하는 기간동안 특정한 AZ에 용량을 예약할 수 있다. 또 필요 할때마다 그 용량에 접근할 수 있기
- 기간약정,청구할인이없다 따라서 언제라도 용량을 예약하고 취소 할 수 있다.
- 용량을 예약하는게 유일한 목적이다.
  <br>
  <br>

## Savings Plans

- 특정 인스턴스 유형을 약정하지 않고 달러 단위로 특정한 사용량을 약정한다.
- 예약 인스턴스와 마찬가지로 70% 할인 받을 수 있다.
- 사용 한도 초과시 온디맨드 가격으로 청구 한다.
- 특정한 인스턴스와 패밀리, 리전으로 고정된다.
  <br>
  <br>

## Spot Instances

- 할인 폭이 제일 큰 온디맨드에 비해 최대 90%까지 할인이 된다.
- 지정된 스폿 가격이 초과괴면 인스턴스가 손실될 수 있다.
- 스폿 인스턴스는 AWS에서 가장 비용효율적인 인스턴스이며 인스턴스가 고장에 대한 회복력이 있다면 유용하다.
- 짧은 워크로드를 위한 인스턴스
- 언제라도 인스턴스들이 손실될 수 있어서 신뢰성이 낮다.
- 아주 중요한 작업이나 데이터베이스에는 적절하지 않다.
  <br>
  <br>

## Dedicated Instances

- 전용 하드웨어에서 실행되는 인스턴스
- 같은 계정에서 다른 인스턴스와 함께 하드웨어를 공유 할 수 있고, 인스턴스 배치에 대한 통재권이 없다.
- Dedicated Instances vs Dedicated Host
  - 전용인스턴스는 자신만의 인스턴스를 자신만의 하드웨어에 갖는다는 반면에, 전용 호스트는 자신이 갖는 접근권을 갖고 낮은 수준의 하드웨어에 대한 가시성을 제공해 준다는 점이다.
    <br>
    <br>

## EC2 Dedicated Host

- 전용으로 사용되는 EC2인스턴스 용량이 있는 실제 물리서버를 받게 된다
- 온디맨드로 초당 비용을 지불하거나 1년 또는 3년동안 예약할 수 있다.
- 실제 물리 서버를 예약하기 때문에 AWS에서 가장 비싼 옵션이다.
- 활용사례

  - 라이센싱 모델과 함께 제공되는 소프트웨어인 경우

  <br>
  <br>

  #### Reference<br>

  Udemy - **AWS Certified Solutions Architect Associate 시험합격!**
