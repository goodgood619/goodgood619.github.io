---
title : "Singleton Pattern의 방법 중 가장 많이 쓰이는 방법에 대하여"
excerpt : ""

categories:
    - Design Pattern

tags:
        - Singleton Pattern
        
last_modified_at: 2021-11-05
---

### Singleton Pattern

---

Singleton Pattern은 인스턴스를 단 하나만 만들어서 사용하려는 기법이다. 커넥션 풀, 스레드 풀 등등의 경우 인스턴스를 여러개 만들면 자원의 낭비가 되거나 버그를 발생시킬 수 있으므로 단 하나만 만들어서 실행하는 것을 의미

- 여러가지 방법이 있는데 그중에서 제일 권장되고 자주 쓰는 방법은 `JVM의 Class Load시점을 이용`하는 것이다.
    - 즉, 싱글턴 패턴을 이용해 객체를 생성하는데 있어서 `JVM에게 할일을 떠넘겨서` 생성시키게 하는 것임
    - (내부 코드를 보면서 흐름을 따라가보자)
    - Singleton class 내부에서 SingletonHolder로 직접 접근을 할수가 없다.
    - 즉, 외부에서 getSingletonObject Method를 호출해야 가능하다.
    - 그래서, getSingletonObject Method를 호출 할때 (Runtime)에 내부 클래스 (SingletonHolder)를 JVM에 올리게 된다.
    - 이때, Class를 올리는 Class Loader 시점을 이용하는 것이다.
    - 우리가 원하는 내부 변수인 INSTANCE값에 접근하는 순간, Class Load가 올라간다.
    - Class가 Load하는 시점은 내부에서 Parallel Loader를 이용해서 Thread Safe하게 만들어진다.
    - 동시에, static 키워드를 이용해 단 한번만 초기화가 되게 만든다.
    - 결국은, Class가 Load된 이후, 어느곳에서 호출이 되어도 SingletonHolder.INSTANCE값이 된다.

<br/><br/>

```java

public class Singleton {
		// private 생성자이므로, 외부에서 접근 불가
    private Singleton(){}

    // 여기 class에다가는 static을 왜붙였을까?
    // 내부의 INSTANCE값이 static 이기 때문에, 어쩔수 없이 붙인 거다
    // 안붙이면, 컴파일에러가 나기 때문이다.
    private static class SingletonHolder {
				// class loading 시점에서 생성이 된다.
				// static이므로 한번만 호출이 되서 생성한다
        // 동시에, final 키워드를 사용하여 값의 변경을 막는다. (쓰기를 권장하지만, 사실 뭐 딱히 안써도 된다, 왜냐하면 이미 class loading 시점을 이용했고, static 키워드를 사용했기 때문이다. 그러나, 가급적 쓰기를 권장한다고 한다.)
        private static final Singleton INSTANCE = new Singleton();
    }

	  // 사실상 dynamic dispatching에 의해 getSingletonObject() 메소드를
	  // 부르면 호출이 된다.
    public static Singleton getSingletonObject() {
        return SingletonHolder.INSTANCE;
    }
}

class Main {
    public static void main(String[] args) throws Exception {
        Singleton s1 = Singleton.getSingletonObject();
        Singleton s2 = Singleton.getSingletonObject();
        System.out.println(s1); // s1과 s2는 동일
        System.out.println(s2); // s1과 s2는 동일
    }
}
```

출처 : [https://okky.kr/article/631212](https://okky.kr/article/631212)