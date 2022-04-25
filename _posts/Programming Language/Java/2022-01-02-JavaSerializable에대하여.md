---
title : "Java Serializable 관련 정리 from 이것이 자바다(책)"
excerpt : ""

categories:
    - Java

tags:
        - Java
        - Serializable
last_modified_at: 2022-01-02
---

### Java Serializable

---

다음은 직렬화(Serializable)에 대해 설명을 하려고 한다. 

- 직렬화라는 것은 말그대로,
- 데이터들을 일렬로 길게 바이트 데이터로 변환하는 것을 말한다.
- 그리고 다음과 같은 형태로 쓰여야 직렬화를 할수 있습니다.
    - Serializable Interface를 상속받아야 가능함

```java
public class XXX implements Serializable {}
```

### 주의 사항

---

- 일반적으로, static과 transient가 붙어있는 경우를 제외하고는 모든 필드가 직렬화 대상이 가능하다.
- 그러나, 클래스내의 필드 멤버 변수가 변경이 될때, 직렬화나 역직렬화가 잘 안될수 있다.
- 왜냐하면, serialVersionUID 필드가 다를수 있기 때문이다.
- 이것은 직렬화 그리고 역직렬화할 클래스의 UID가 동일해야 한다는 조건이 필요하다.
- 사실 선언하지 않아도, 컴파일시 내부적으로 자동으로 만들어주지만,
- 클래스의 멤버 필드가 변경이 되고나서 컴파일을 다시 하면 UID가 달라지고,
- 역직렬화할 클래스의 UID가 달라지기 때문에, 제대로 역직렬화가 안될수 있다는 것이다.

### 용도 및 주의 사항

---

- 이렇게 직렬화의 경우는 외부 API를 통해 데이터를 주고받을 경우 편하게 값을 직렬화하거나 역직렬화 할 용도로 쓰입니다.
- 그러나 ,왠만하면 다음과 같은 경우를 자제해야 합니다.
    1. 클래스의 변경이 빈번한 경우
    2. 외부에 보관할 경우(DB에 보관을 말함)

다음의 관련한 링크에서 serializable에 대해 깊게 설명이 되고있으니, 참고바랍니다

[https://woowabros.github.io/experience/2017/10/17/java-serialize2.html](https://woowabros.github.io/experience/2017/10/17/java-serialize2.html)