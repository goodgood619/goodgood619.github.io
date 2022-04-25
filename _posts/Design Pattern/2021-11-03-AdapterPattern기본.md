---
title : "Adapter Pattern 기본"
excerpt : ""

categories:
    - Design Pattern

tags:
        - Adapter Pattern
        
last_modified_at: 2021-11-02
---

### Adapter Pattern

---

용도 : 

- 다른곳에서 개발한것을 바로 사용을 할수 없는 경우,
- 그때 중간에 adapter역할을 해주는 (convert라고 봐도 된다.)
- 클래스를 만들어서 다른곳에서 개발한것도 사용할수 있게 해주기 위함
- 현재 있는 클라이언트는 그대로 사용이 가능함
- 향후 클라이언트가 가리키는 인터페이스가 바뀌더라도, 실질적인 변경 내용은 Adapter 클래스에 있으니 상관이 없음

<br/><br/>

![Adapter](/assets/Adapter.png)

<br/><br/>

여기서 

- Adapter는 TurkeyAdapter 클래스,
- Adaptee는 WildTurkey일것이고
- Target Interface는 기존 원래의 Duck 클래스를 의미한다.

상황은 기존에 쓰던 Duck쪽이 아니라 , Turkey쪽을 가리키고 싶은데, 클라이언트는 여전히 Duck 인터페이스를 가리키게 해야 하는 상황이다. 

- 그러므로, Duck Interface를 implement하는 Adapter를 만든 후에,
- Turkey Interface를 구체화하는 WildTurkey class의 메소드로 가리키게 만들면 된다.

그래서 Adapter에는 Turkey 인터페이스가 들어가게 되어있고, 구현체는 실제적으로 구현이 되어야할 class가 자리잡게 된다.

코드를 보는것이 더빠를것이다.

```java
public static void main(String[] args) throws IOException {
        MallardDuck duck = new MallardDuck();
        WildTurkey turkey = new WildTurkey();
        Duck turkeyAdapter = new TurkeyAdapter(turkey); // turkey는 WildTurkey class를 가리킴
        System.out.println("The Duck Says..");
        testDuck(duck);

        System.out.println("The TurkeyAdapter Says...");
        testDuck(turkeyAdapter); // 실제로는 

    }
    public static void testDuck(Duck duck) {
        duck.quack();
        duck.fly();
    }
```

```java
public interface Duck {
    void quack();
    void fly();
}
```

```java
public interface Turkey {
    void gobble();
    void fly();
}
```

```java
public class MallardDuck implements Duck{
    @Override
    public void quack() {
        System.out.println("Quack");
    }

    @Override
    public void fly() {
        System.out.println("I'm flying");
    }
}
```

```java
public class WildTurkey implements Turkey{
    @Override
    public void gobble() {
        System.out.println("Gobble Gobble");
    }

    @Override
    public void fly() {
        System.out.println("I'm flying a short distance");
    }
}
```

```java
public class TurkeyAdapter implements Duck {
    Turkey turkey; 
    public TurkeyAdapter(Turkey turkey) { // TurkeyAdapter에 turkey 주입
        this.turkey = turkey;
    }
    @Override
    public void quack() {
        turkey.gobble();
    }

    @Override
    public void fly() {
        turkey.fly();
    }
}
```

<br/><br/>

위의 방법은 객체 adapter 방식이라고 한다.

- Target(interface)을 바라보고, Adapter는 Target을 implement한다
- Adapter는 Adaptee와 직접 연관이 되고, Adaptee의 method를 호출한다.

참고 : [https://jusungpark.tistory.com/22](https://jusungpark.tistory.com/22)