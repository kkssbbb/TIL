# Docker

- 컨테이너 기반의 가상화ㅣ 플랫폼

가상화 종류

- 컨테이너 기반 가상화
- 하이퍼바이저기반 가상(OS 가상화)
    
  ![도커 vs vm](https://github.com/kkssbbb/MVC-practice/assets/89888075/73f12b7e-d6e5-4507-8e58-b2320cbe2a17)

    
    - **하이퍼바이저 기반 가상화(사진 왼쪽)**
        - Guest OS
            - 가상서버 의미
            - GuestOS는 다양한 os선택이 가능하 게스트OS에서 실행되는 애플리케이션이 호스트 (물리서버의)자원을 사용하기 위해서는 반드시 게스트OS를 거쳐야만 한다.
                - 따라서 속도적인 측면에서 docker기반가상화 보다 상대적으로 느릴 수 있다.
        - Host Operating System
            - 물리서버 의미
        - Hypervisor
            - Guest OS 와 Host Operating System을 연결 해주는 역할
            - 서버 가상화 기술로써 호스트 써버에 설치 되고 호스트와 게스트를 나누는 역할을 하며 각각의 게스트는 Hipervisor에 의해 관되며 시스템 자원을 할당 받게 된다.
            - 하이퍼바이저 기반의 가상화는 격리된 환경에서 또 하나의 가성 서버를 실행하는 기술이라고 생각하면 된다.
    
    - **컨테이너기반 가상화(사진 오른쪽)**
        - 격리된 환경에서 프로세스를 실행하는 기술
        - 앱플리케이션은 도커 자원을 활용해 호스트(물리서버)자원을 사용할 수 있고 구조적으로 GuestOS가 없기 때문에 용량도 매우 가볍다.
        
        - 도커 허브
            - 도커에서 제공하는 이미지 저장소
        - 도커 컴포즈
            - 다중 컨테이너를 정의하고 실행하기 위한 도구
            - YAML 파일을 사용하여 다중 컨테이너를 구성
                - 아래와 같이 yaml 파일을 이용해 web 과 readis 를 다중 컨테이너를 구성한다는 것을 정의 할 수 있다.
                
                ```yaml
                services:
                  web: // web 컨테이너 정의
                    build: .
                    ports:
                      - "8000:5000"
                    volumes:
                      - .:/code
                      - logvolume01:/var/log
                    depends_on:
                      - redis
                  redis: //readis 컨테이너 정의
                    image: redis
                volumes:
                  logvolume01: {}
                ```