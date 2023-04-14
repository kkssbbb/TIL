# EC2 Instance Purchasing Option

![](data:image/png;base64,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) <br>
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
