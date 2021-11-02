---
title : "Builder Pattern이 나오기 까지의 과정과 기본개념"
excerpt : ""

categories:
    - Design Pattern

tags:
        - Builder Pattern
        - Java Bean Pattern
        - Lombok
        
last_modified_at: 2021-10-31
---

### Builder Pattern

---

객체 일관성이 깨진다 : 한번 객체를 생성할때, 그 객체가 변할 여지가 존재한다는 뜻이다

- 객체 생성을 깔끔하고 유연하게 하기위한 기법
1. 점층적 생성자 패턴
- 필수 인자를 받는 필수 생성자를 하나 만든다
- 1개의 선택적 인자를 받는 생성자 추가
... 반복
장점 :
    - 특정 인자값만 다르고, 나머지 인자값의 디폴트 값이 동일한 객체 생성이 빈번한 경우 유용
    
    단점 : 
    
    - 인자가 추가되는 일이 발생하면 코드를 수정하기 어렵다(추가될때마다 의존성이 있는 코드들은 일일이 수정을 해줘야함)
    - 코드 가독성이 떨어진다(인자수가 많을때, 호출 코드만 보면, 뭐가 호출이 되는지 알수없다)

```java
Test(String name) {
	this(name,"디폴트","디폴트");
}
```

<br/>
<br/>

2.  자바빈 패턴(점층적 생성자 패턴의 대안)
`setter메소드를 이용`해서 객체 생성 코드를 읽기 좋게 만들자!!

- 장점 : 확실히 각 인자의 의미 파악이 쉬워짐, 여러개 생성자를 만들필요가없음
- 단점 : 객체 일관성이 깨짐, 어디서든 setter메소드를 이용해서 접근이 가능하므로, 객체가 변경될수있음
    - 한번 생성된 객체에 setter 메소드를 이용해 데이터를 계속 교체하고있다
    - setter 메소드 때문에 변경 불가능(immutable)한 클래스를 만들수 없다

<br/><br/>

3. 빌더 패턴(자바빈 패턴의 대안)

- 장점 : setter 메소드 없어서 immutable한 클래스 만들수있음(자바빈 패턴의 단점보완)
    - 한 번에 객체를 생성해서 객체 일관성이 깨지지않음(자바빈 패턴 단점 보완)
    - 각 인자가 어떤의미인지 알기쉬워짐(점층적 생성자 패턴 단점 보완)
    - 인터페이스를 작성하여, Generic하게 타입이 들어왔을때도 유연하게 객체 생성하는것에 도움을 줄 수 있음
- 단점? :
    - 많은 코드양을 유발할수 있음
    - 그리고 Builder라는 객체에 맞게 다시 매핑을 해줘야 하기때문에 Builder라는 객체가 하나 더필요하게 되고,
    - 때에 따라서는 성능이 낮아질수 있다
    - class.<T>builder()-> classBuilder().build을하게 되면 class가 된다


<br/>

Lombok의 @Builder : Effective Java Style과 비슷한 빌더 패턴 코드가 빌드됨

<br/>

출처 : [https://johngrib.github.io/wiki/builder-pattern/](https://johngrib.github.io/wiki/builder-pattern/)