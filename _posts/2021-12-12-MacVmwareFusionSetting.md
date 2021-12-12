---
title : "Mac VMWare Fusion 세팅 (Window 11)"
excerpt : ""

categories:
    - tools

tags:
        - VMWare
        - MacOS
        - Window 11
        
last_modified_at: 2021-12-12
---

### mac VmWare Fusion 세팅

---

mac에서 VMWare를 깔아보고 , 최근에 나온 Window11 을 세팅해보겠습니다.

- 먼저, 아래의 VMWARE 사이트를 이동합니다. 계정이 없다면, Create Account를 눌러 계정을 생성하도록 합니다.
    - [https://customerconnect.vmware.com/web/vmware/evalcenter?p=fusion-player-personal](https://customerconnect.vmware.com/web/vmware/evalcenter?p=fusion-player-personal)
    - 이슈
        - 회원가입시, zip or postal code 관련해서 회원가입하는데 애로사항이 생길수 있습니다.
        - Seoul (100 - 011) 을 통해 해결합니다.
- 그 이후 로그인을 하고 나면, Lisence & Download 하위에 License Key와 Download 파일이 나옵니다.
- 또한 Window 11 iso 파일이 필요하므로, 아래의 사이트에서 다운로드 받습니다.
    - [https://www.microsoft.com/ko-kr/software-download/windows11](https://www.microsoft.com/ko-kr/software-download/windows11)
- 그 다음 Install from disc or image에서 iso 파일을 drag 합니다.
- Windows 10 and later x64를 선택합니다.
    
    ![Window11_1](/assets/VMWare(Window11)_1.png)
    
- Secure Boot는 Check하지 않고 넘어갑니다.

![Window11_2](/assets/VMWare(Window11)_2.png)

- Customize Settings를 눌러 이름과 저장 위치를 바꾸고 싶다면 변경합니다.

![Window11_3](/assets/VMWare(Window11)_3.png)

- 상단에 스패너 모양으로 된것을 눌러줍니다.

![Window11_4](/assets/VMWare(Window11)_4.png)

- Processors 와 Memory를 조정합니다.
    - Window 11은 참고로 RAM 4GB, Processor는 2 processors 이상이긴 합니다. (다른 자세한 사양도 있긴함)
        - [https://www.microsoft.com/ko-kr/windows/windows-11-specifications?r=1](https://www.microsoft.com/ko-kr/windows/windows-11-specifications?r=1)
    - 그러나, 우리는 가상머신위에서 동작하기 때문에 크게 지장은 없지만, RAM이랑 Processors 정도는 맞춰 주도록합니다.
- 동작을 시킵니다.
    - 이슈
        - no operating system found 이라는 문구가 떠서 제대로 실행되지 않을 수 있습니다.
        - 저 또한, 관련 문제를 찾아봤지만 제대로 되지 않다가 다음의 방법으로 해결했습니다.
            - 스패너 모양의 기타의 Startup Disk에서 Hard Disk로 Restart를 합니다.
            - 조사를 해보니, 기본값으로 CD/DVD 가 잡히는 경우도 있다고 합니다.
            
            ![Window11_5](/assets/VMWare(Window11)_5.png)
            
- Window 11 공통 이슈
    - 이 PC에서는 Window 11을 설치 할 수 없습니다. 와 같은 문구가 뜨는 경우가 발생합니다.
    - 이 때, 당황하지 말고 Shift + F10 (touch bar의 경우, Fn키 누르고) 을 누릅니다.
    - regedit 을 칩니다.
    - **HKEY_LOCAL_MACHINE\SYSTEM\Setup 파일 위치에 Key를 LabConfig 라는 이름으로 생성합니다.**
    - 그다음, DWORD(32비트)값의 Key를 다음의 이름과 같이 만들어줍니다.
        - BypassTPMCheck
        - BypassSecureBootCheck
        - 값은 16진수의 1로 바꿔 줍니다.
    - 창을 닫은 다음, exit를 눌러 줍니다.
    - 다시, 뒤로 가기 후 설치를 누르면 올바르게 진행됨을 알 수 있습니다.