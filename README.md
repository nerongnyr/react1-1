# react1-1

## 나예린 202230109

### 20240313 강의 내용
### GitHub 사용법


### 20240320 강의 내용

1.1 리액트란?

1. 사용자 인터페이스를 만들기 위한 자바스크립트 라이브러리
2. SPA를 쉽고 빠르게 만들 수 있도록 해주는 도구

1-2 리액트의 장점

1. 빠른 업데이트와 렌더링 속도
2. 재사용성이 높은 컴포넌트 기반 구조
3. 메타(구 페이스북)의 든든한 지원
4. 활발한 지식 공유와 커뮤니티
5. 리액트 네이티브를 통한 모바일 앱 개발 기능

1.3 리액트의 단점

1. 방대한 학습량
2. 높은 상태 관리 복잡도

### 20240327 강의 내용

3.1 JSX(JavaScript XML)란?

Javascript에 XML을 추가한 확장 문법

3.2 JSX의 역할

1. JSX는 내부적으로 XML/HTML 코드를 자바스크립트로 변환
2. React가 createElement함수를 사용하여 자동으로 자바스크립트로 변환해 줌
3. 만일 JS작업할 경우 직접 createElement함수를 사용해야 함
4. 결국 JSX는 가독성을 높여주는 역할을 함

3.3 JSX의 장점

1. 코드가 간결해 짐
2. 가독성 향상
3. 보안에 강함

3.4 JSX 사용법

1. 모든 자바스크립트 문법을 지원
2. 자바스크립트 문법에 XML과 HTML을 섞어서 사용
3. 만일 html이나 xml에 자바스크립트 코드를 사용하고 싶다면 {}괄호를 사용

4.1 엘리먼트에 대해

1. 엘리먼트의 정의

* 엘리먼트는 리액트 앱을 구성하는 요소를 의미
* 공식페이지에는 "엘리먼트는 리액트 앱의 가장 작은 빌딩 블록들"이라고 설명
* 웹사이트의 경우 DOM 엘리먼트이며 HTML요소를 의미

리액트 엘리먼트와 DOM엘리먼트 차이?

* 리액트 엘리먼트는 Virtual DOM형태
* DOM엘리먼트는 페이지의 모든 정보를 갖고 있어 무거움
* 반면 리액트 엘리먼트는 변화한 부분만 갖고 있어 가벼움

2. 엘리먼트 생김새

* 리액트 엘리먼트는 자바스크립트 객체의 형태로 존재
* 컴포넌트(Button 등), 속성(color 등) 및 내부의 모든 children을 포함하는 일반 JS 객체
* 이 객체는 마을대로 변경할 수 없는 불변성을 갖고 있음

3. 엘리먼트 특징

* 리액트 엘리먼트의 가장 큰 특징은 불변성
즉, 한 번 생성된 엘리먼트의 children이나 속성(attributes)을 바꿀 수 없음

만일 내용이 바뀌면?

* 이 떄는 컴포넌트를 통해 새로운 엘리먼트를 생성하면 됨
* 그 다음 이전 엘리먼트와 교체를 하는 방법으로 내용을 바꾸는 것
* 이렇게 교체하는 작업을 하기 위해 Virtual DOM을 사용함

4.2 엘리먼트 렌더링하기

Root DOM node

다음 html코드는 id값이 root인 div태그로 단순하지만 리액트에 필수로 들어가는 아주 중요한 코드이다
이 div태그 안에 리액트 엘리먼트가 렌더링 되며, 이것을 Root DOM node라고 함
<div id="root"></div>

엘리먼트를 렌더링하기 위해서는 다음과 같은 코드가 필요

const element= <h1>안녕, 리액트!</h1>
ReactDOM.render(element, document.getElementById('root'));

4.3 렌더링된 엘리먼트 업데이트하기

### 20240403 강의 내용

5.1 컴포넌트에 대해 알아보기

* 컴포넌트 기반의 구조
* 컴포넌트 구조라는 것은 작은 컴포넌트가 모러 큰 컴포넌트를 구성하고, 다시 이런 컴포넌트들이 모여서 전체 페이지를 구성한다는 것을 의미
* 컴포넌트는 재사용이 가능하기 떄문에 전체 코드의 양을 줄일 수 있어 개발 시간과 유지 보수 비용도 줄일 수 있음

5.2 Props에 대해 알아보기

1. Props의 개념

* props는 prop(property: 속성,특성)의 준말
* 이 props가 바로 컴포넌트의 속성임
* 컴포넌트에 어떤 속성,props를 넣느냐에 따라서 속성이 다른 엘리먼트가 출력됨
* props는 컴포넌트에 전달할 다양한 정보를 담고 있는 자바스크립트 객체임
* 에어비앤비의 예도 마찬가지

2. Props의 특징

* 읽기 전용이다. 변경할 수 없다는 의미
* 속성이 다른 엘리먼트를 생성하려면 새로운 props를 컴포넌트에 전달하면 됨

Pure 함수 vs Impure 함수

* Pure함수는 인수로 받은 정보가 함수 내부에서도 변하지 않는 함수
* Impure함수는 인수로 받은 정보가 함수 내부에서도 변하는 함수

3. Props 사용법

* JSX에서는 key-value쌍으로 props를 구성함

5.3 컴포넌트 만들기

1. 컴포넌트의 종류

* 리액트 초기 버전을 사용할 떄는 클래스형 컴포넌트를 주로 사용했음
* 이후 Hook이라는 개념리 나오면서 최근에는 함수형 컴포넌트를 주로 사용함
* 예전에 작성된 코드나 문서들이 클래스형 컴포넌트를 사용하고 있기 때문에, 클래스형 컴포넌트와 컴포넌트의 생명주기에 관해서도 공부해 둬

2. 함수형 컴포넌트

3. 클래스형 컴포넌트

4. 컴포넌트 이름 짓기

* 이름은 항상 대문자로 시작
* 왜냐하면 리액트는 소문자로 시작하는 컴포넌트를 DOM 태그로 인식하기 떄문. html tag.
* 컴포넌트 파일 이름과 컴포넌트 이름은 같게 함

5. 컴포넌트 렌더링

5.4 컴포넌트 합성

* 컴포넌트 합성은 여려 개의 컴포넌트를 합쳐서 하나의 컴포넌트를 만드는 것임
* 리액트에서는 컴포넌트 안에 또 다른 컴포넌트를 사용할 수 있기 때문에, 복잡한 화면을 여러 개의 컴포넌트로 나누어 구현할 수 있습니다

5.5 컴포넌트 추출

* 복잡한 컴포넌트를 쪼개서 여러 개의 컴포넌트로 나눌 수 있음
* 큰 컴포넌트에서 일부를 추출해서 새로운 컴포넌트를 만드는 것임
* 실무에서는 처음부터 1개의 컴포넌트에 하나의 기능만 사용하도록 설계하는 것이 좋습니다

6.1 state

1. state란?

* state는 리액트 컴포넌트의 상태를 의미함
* 상태의 의미는 정상인지 비정상인지가 아니라 컴포넌트의 데이터를 의미함
* 정확히는 컴포넌트의 변경 가능한 데이터를 의미함
* State가 변하면 다시 렌더링이 되기 때문에 렌더링과 관련된 값만 state에 포함시켜야 함

2. state 특징

* state는 변경은 가능하다고 했지만 직접 수정하면 안 됨
* state를 변경하고자 할 떄는 setstate()함수를 사용함

6.2 생명 주기에 대해 알아보기

* 생명주기는 컴포넌트의 생성 시점, 사용 시점, 종료 시점을 나타내는 것임
* constructor가 실행 되면서 컴포넌트가 생성됨
* 컴포넌트가 소멸하기 전까지 여러 번 렌더링 함
* 랜더링은 props, setState(), forceUpdate() 함수가 호출됨
* 그리고 렌더링이 끝나면 componentDinUpdate()함수가 호출됨
* 마지막으로 컴포넌트가 언마운트 되면 componentWillUnmount()함수가 호출됨

### 20240417 강의 내용

7.1 훅이란 무엇인가?

* 클래스형 컴포넌트에서는 생성자(constructor)에서 state를 정의하고, setState()함수를 통해 state를 업데이트합니다.
* 예전에 사용하던 함수형 컴포넌트는 별도로 state를 정의하거나, 컴포넌트의 생명주기에 맞춰서 어떤 코드가 실행되도록 할 수 없었습니다.
* 함수형 컴포넌트에서도 state나 생명주기 함수의 기능을 사용하게 해주기 위해 추가된 기능이 바로 훅(Hook)입니다
* 함수형 컴포넌트도 훅을 사용하여 클래스형 컴포넌트의 기능을 모두 동일하게 구현할 수 있게 되있습니다.
* Hook이란 'state와 생명주기 기능에 갈고리를 걸어 원하는 시점에 정해진 함수를 실행되도록 만든 함수'를 의미합니다.

7.2 useState

* useState는 함수형 컴포넌트에서 state를 사용하기 위한 Hook입니다

7.3 useEffect

* useState와 함께 가장 많이 사용하는 Hook임
* 이 함수는 사이드 이펙트를 수행하기 위한 것
* 영어도 side effect는 부작용을 의미. 일반적으로 프로그래밍에서 사이드 이펙트는 '개발자가 의도하지 않은 코드가 실행되면서 버그가 발생하는 것'을 말함
* 하지만 리액트에서는 효과 또는 영향을 뜻하는 effect의 의미에 가까움
* 예를 들면 서버에서 데이터를 받아오거나 수동으로 DOM을 변경하는 등의 작업을 의미
* 이 작업을 이펙트라고 부르는 이유는 이 작업들이 다른 컴포넌트에 영향을 미칠 수 있으며, 렌더링 중에는 작업이 완료될 수 없기 때문
* 결국 sideEffect는 렌더링 외에 실행해야 하는 부수적인 코드를 말함
* 예를 들면 네트워크 리퀘스트, DOM 수동 조작, 로깅 등은 정리가 필요없는 경우들입니다
* useEffect()함수는 다음과 같이 사용합니다.
* 첫 번째 파라미터는 이펙트 함수가 들어가고, 두 번쨰 파라미터는 의존성 배열이 들어갑니다.
* 의존성 배열은 이펙트가 의존하고 있는 배열로, 배열 안에 있는 변수 중에 하나라도 값이 변경되었을 때 이펙스 함수가 실행됩니다.
* 이펙트 함수는 청므 컴포넌트가 렌더링 된 이후, 그리고 재 랜더링 이후에 실행됩니다.
* 만약 이펙트 함수가 마운트와 언마운트 될 때만 한 번씩 실행되게 하고 싶으면 빈 배열을 넣으면 됩니다.
* 의존성 배열을 생략하는 경우는 업데이트될 때마다 호출됩니다.

7.4 useMemo

* useMemo() 혹은 Memoizde value를 리턴하는 훅입니다
* 이전 계산값을 갖고 있기 때문에 연산량이 많은 작업의 반복을 피할 수 있습니다.
* 이 훅은 렌더링이 일어나는 동안 실행됩니다
* 따라서 렌더링이 일어나는 동안 실행돼서는 안될 작업을 넣으면 안됩나다.
* 예를 들면 useEffect에서 실행되어야 할 사이드 이팩트 같은 것입니다.
* 의존성 배열을 넣지 않을 경우, 렌더링이 일어날 때마다 매번 함수가 실행됩니다.
* 따라서 의존성 배열을 넣지 않는 것은 의미가 없습니다.
* 만약 빈 배열을 넣게 되면 컴포넌트 마운트 시에만 함수가 실행됩니다.
* 224 Page Note 를 참고하세요

7.5 useCallback

* useCallback() 훅은 useMemo()와 유사한 역할을 합니다.
* 차이점은 값이 아닌 함수를 반환한다는 점입니다
* 의존성 배열을 파라미터로 받는 것은 useMemo와 동일 합니다
* 파라미터로 받은 함수를 콜백이라고 부릅니다
* useMemo와 마찬가지로 의존성 배열 중 하나라도 변경되면 콜백함수를 반환합니다

7.6 useRef

* useRef() 훅은 레퍼런스를 사용하기 위한 훅입니다
* 렌퍼런스란 특정 컴포넌트에 접근할 수 있는 객체를 의미합니다
* useRef() 훅은 바로 이 래퍼런스 객체를 반환합니다
* 레퍼런스 객체에는 .current라는 속성이 있는데, 이것은 현재 참조하고 있는 엘리먼트를 의미합니다.
* 이렇게 반환된 레퍼런스 객체는 컴포넌트의 라이프타임 전체에 걸쳐서 유지됩니다.
* 즉, 컴포넌트가 마운트 해제 전까지는 계속 유지된다는 의미입니다

7.7 훅의 규칙

* 첫 번째 규칙은 무조건 최상의 레벨에서만 호출해야 한다는 것입니다. 여기서 최상위는 컴포넌트의 최상위 레벨을 의미합니다.
* 따라서 반복문이나 조건문 또는 중첩된 함수들 속에서 훅을 호출하면 안 됩니다
* 이 규칙에 따라서 훅은 컴포넌트가 렌더링 될 때마다 같은 순서로 호출되어야 합니다.
* 두 번쨰 규칙은 함수형 컴포넌트에서만 훅을 호츨해야 한다는 것입니다.
* 따라서 일반 자바스크립트 함수에서 훅을 호출하면 안 됩니다.
* 훅은 함수형 컴포넌트 혹은 직접 만든 커스텀 훅에서만 호출할 수 있습니다.

### 20240501 강의 내용

7.8 나만의 훅 만들기

* 필요하다면 직접 훅을 만들어 쓸 수도 있습니다. 이것을 커스텀 훅 이라고 합니다.

8.1 이벤트 처리하기

* 이벤트가 발생했을 때 해당 이벤트를 처리하는 함수를 "이벤트 핸들러" 라고 합니다. 또는 이벤트가 발생하는 것을 계속 듣고 있다는 의미로 "이벤트 리스너" 라고 부르기도 합니다.

이벤트 핸들러 추가하는 방법은?

* 버튼을 클릭하면 이벤트 핸들러 함수인 handleClick()함수를 호출하도록 되어있음
* bind를 사용하지 않으면 this.handleClick은 글로벌 스코프에서 호출되어, undefined으로 사용할 수 없기 떄문
* bind를 사용하지 않으려면 화살표 함수를 사용하는 방법도 있음
* 하지만 클래스 컴포넌트는 이제 거의 사용하지 않기 때문에 이 내용은 참고만 합니다.

<<<<<<< HEAD
### 20240508 강의 내용
=======
8.2 Arguments 전달하기

* 함수를 정의할 떄는 파라미터 혹은 매개변수, 함수를 사용할 떄는 아귀먼트 혹은 인수 라고 부름
* 이벤트 핸들러에 매개변수를 전달해야 하는 경우도 많음

9.1 조건부 렌더링이란?

* 여기서 조건이란 우리가 알고 있는 조건문의 조건이다

9.2 엘리먼트 변수
 
* 렌더링해야 될 컴포넌트를 변수처럼 사용하는 방법이 엘리먼트 변수입니다
* 277,8페이지 코드 처럼 state에 따라 button 변수에 컴포넌트의 객체를 저장하여 return문에서 사용하고 있습니다

9.3 인라인 조건

* 필요한 곳에 조건문을 직접 넣어 사용하는 방법입니다

1. 인라인 if
* if문을 직접 사용하지 않고, 동일한 효과를 내기 위해 && 논리 연산자를 사용한다
* && 는 and 연자로 모든 조건이 참일 떄만 참이 됩니다
* 첫 번쨰 조건이 거짓이면 두 번째 조건은 판단할 필요가 없습니다.단축평가
* 판단만 하지 않는 것이고 결과 값은 그대로 리턴됨(280 위쪽 코드)

2. 인라인 if-else
* 삼항 연산자를 사용합니다
* 문자열이나 엘리먼트를 넣어서 사용할 수도 있습니다

9.4 컴포넌트 렌더링 막기

* 컴포넌트를 렌더링하고 싶지 않을 떄는 null을 리턴합니다

>>>>>>> a9583ea9180e1439398753c8315cccc0b4c6d06d

### 20240522 강의 내용

10.1 리스트와 키란 무엇인가?

* 리스트는 자바스크립트의 변수나 객체를 하나의 변수로 묶어 놓은 배열과 같은 것입니다.
* 키는 각 객체나 아이템을 구분할 수 있는 고유한 값을 의미합니다.
* 리액트에서는 배열과 키를 사용하는 반복되는 다수의 엘리먼트를 쉽게 렌더링할 수 있습니다

10.2 여러 개의 컴포넌트 렌더링하기

* 예의 에어비엔비의 화면처럼 같은 컴포넌트를 화면에 반복적으로 나터내야 할 경우 배열에 들어있는 엘리먼트를 map()함수를 이용하여 렌더링 합니다.

10.3 

10.4 리스트의 키에 대해 알아보기

* 리스트에서의 키는 "리스트에서 아이템을 구별하기 위한 고유한 문자열"입니다
* 이 키는 리스트에서 어떤 아이템이 변경, 추가 또는 제거되었는지 구분하기 위해서 사용됩니다
* 키는 같은 리스트에 있는 엘리먼트 사이에서만 고유한 값이면 됩니다.

11.1 폼이란 무엇인가?

* 폼은 일반적으로 사용자로부터 입력을 받기 위한 양식에서 많이 사용됨

11.2 제어 컴포넌트

* 제어 컴포넌트는 사용자가 입력한 값에 접근하고 제어할 수 있도록 해주는 컴포넌트이다.

### 20240529 강의 내용

11.5 File input 태그

* File input 태그는 그 값이 읽기 전용이기 때문에 리액트에서는 비제어 컴포넌트가 됩니다

11.7 Input Null Value

* 제어 컴포넌트에 value prop을 정해진 값으로 넣으면 코드를 수정하지 않는 한 입력값을 바꿀 수 없습니다.
* 만약 value prop는 넣되 자유롭게 입력할 수 있게 만들고 싶다면 값이 undefined 또는 null 을 넣어주면 됩니다.

### 20240605 강의 내용

12.1 Share State

* Share State는 state의 공유를 의미합니다.
* 같은 부모 컴포넌트의 state를 자식 컴포넌트가 공유해서 사용하는 것입니다.
* 다음 그림은 부모 컴포넌트가 섭씨 온도의 state를 갖고 있고, 이것을 컴포넌트C롸 컴포넌트 F가 공유해서 사용하는 것을 보여줍니다.

12.2 하위 컴포넌트에서 state 공유하기

13.1 합성에 대해 알아보기

* 합성(Composition)은 '여러 개의 컴포넌트를 합쳐서 새로운 컴포넌트를 만드는 것'입니다
* 조합 방법에 따라 합성의 사용 기법은 다음과 같이 나눌 수 있습니다

[1] Containment (담다. 포함하다. 격리하다)

* 특정 컴포넌트가 하위 컴포넌트를 포함하는 형태의 합성 방법
* 컴포넌트에 따라서는 어떤 자식 앨리먼트가 들어올지 미리 예상할 수 없는 경우가 있습니다
* 범용적인 '박스' 역할을 하는 Sidebar 혹은 Dialog와 같은 컴포넌트에서 특히 자주 볼 수 있다
* 이런 컴포넌트에서는 children prop를 사용하여 자식 엘리먼트를 출력에 그대로 전달하는 것이 좋습니다
* 이 떄 children prop은 컴포넌트의 props에 기본적으로 들어있는 children 속성을 사용함
