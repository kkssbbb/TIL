# Linux - directory structure

![사진](https://linuxhandbook.com/content/images/2020/06/linux-directory-structure.png)

사진 출처 - [https://linuxhandbook.com/linux-directory-structure/](https://linuxhandbook.com/linux-directory-structure/)

💡 리눅스 디렉토리 구조 설명 글

-   리눅스 배포판은Linux Foundation에서 유지관리하는 (FHS)[파일시스템 계층구조 표준](https://en.wikipedia.org/wiki/Filesystem_Hierarchy_Standard?ref=linuxhandbook.com) v3.0을 따르기 때문에 거의 모두 동일한 파일 구조를 갖고있다.

# /bin

-   사용자가 실행할 수 있는 명령어 Binary파일들을 모아둔곳 (EX:) cat,touch,ping…)
-   cd /bin

# /etc

-   호스트별 시스템 전체 구성파일이 있으며 프로그램들의 환경 설정을 할수있는 파일들이 있다.
-   EC:) nginx.conf, java.conf, ssg.conf

# /usr

-   주로 시스템 유저가 설치한 소프트웨어와 관련된 파일들이 위치하는 곳으로, 읽기 가능하고 공유 가능한 데이터를 포함합니다. 사용자가 추가로 설치한 프로그램, 라이브러리, 문서 등이 여기에 위치하게 됩니다.
-   시스템의 핵심적인 부분은 /경로에 있고 /usr 은 사용자 환경을 위한 부가적인 내용을 담고 있다.

# /home

-   저장된 파일, 개인 설정 등이 포함된 각각의 사용자들의 홈 디렉토리로 사용할 수 있는 공간.

# /boot

-   부트로더와 관련된 설정이 들어있고 부팅할떄 필요한 이미지들이 있다.
    -   부트로더 : 운영체제를 메모리에 로드하는 프로그램

💡부팅 프로세스

1.  전원공급
2.  BOIS(컴퓨터의 기본 입출력 시스템) or UEFI(통합확장 펌웨어) 실행 →부트로더 실행
3.  부트로더
    -   부트로더는 부팅할 운영체제를 메모리에 로드하고 권한을 운영체제에 넘김
4.  운영체제 실행

# /mnt

-   mount 약자
-   디스크,usb 같은 외부 장치를 mount 했을때 임시로 연결된 경로를 /mnt 에서 확인가능하다.

# /root

-   root 권한을 갖고있는 사용자만이 사용할수있는 공간

# /var

-   시스템이 실행되고 있을떄 로그,캐시,사용자 데이터들이 쌓이는 공간이다.

---

### REF

-   [https://en.wikipedia.org/wiki/Filesystem\_Hierarchy\_Standard?ref=linuxhandbook.com](https://en.wikipedia.org/wiki/Filesystem_Hierarchy_Standard?ref=linuxhandbook.com)
-   [https://linuxhandbook.com/linux-directory-structure/](https://linuxhandbook.com/linux-directory-structure/)
-   [https://tecoble.techcourse.co.kr/post/2021-10-18-linux-file-directory-system/](https://tecoble.techcourse.co.kr/post/2021-10-18-linux-file-directory-system/)