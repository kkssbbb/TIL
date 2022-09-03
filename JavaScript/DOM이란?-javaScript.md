# DOM이란?

자바스크립트는 웹문서(HTML의 요소나 컨테스등)를 제어하기 위해 만들어진 언어이다.

그렇다면 웹문서를 어떻게 자바스크립트로 제어 할 수 있는 걸까?

브라우저 안에는 웹문서를 해석 할 수 있는 "렌더링엔진"이 있다.

>ex) 크롬:블링크  파이어폭스:게코  사파리:웹킷
## DOM(DocumentObjectModel 문서 객체 모델)<Br>
브라우저로 HTML파일을 열게 되면 각 웹브라우저의 렌더링엔진이 html문서를 한 줄씩 해석후 해석이 끝나면 문서를 객체화 하여 자바스크립트로 접근 할 수있도록 한다. 이렇게 "**객체화된 html문서를 DOM이라고 한다.**"

## mdn에서 알려주는 DOM이란?
문서 객체 모델(The Document Object Model, 이하 DOM) 은 HTML, XML 문서의 프로그래밍 interface 이다. DOM은 문서의 구조화된 표현(structured representation)을 제공하며 프로그래밍 언어가 DOM 구조에 접근할 수 있는 방법을 제공하여 그들이 문서 구조, 스타일, 내용 등을 변경할 수 있게 돕는다. DOM 은 nodes와 objects로 문서를 표현한다. 이들은 웹 페이지를 스크립트 또는 프로그래밍 언어들에서 사용될 수 있게 연결시켜주는 역할을 담당한다.

웹 페이지는 일종의 문서(document)다. 이 문서는 웹 브라우저를 통해 그 내용이 해석되어 웹 브라우저 화면에 나타나거나 HTML 소스 자체로 나타나기도 한다. 동일한 문서를 사용하여 이처럼 다른 형태로 나타날 수 있다는 점에 주목할 필요가 있다. DOM 은 동일한 문서를 표현하고, 저장하고, 조작하는 방법을 제공한다. DOM 은 웹 페이지의 객체 지향 표현이며, 자바스크립트와 같은 스크립팅 언어를 이용해 DOM 을 수정할 수 있다.<br>
[mdn dom 설명](https://developer.mozilla.org/ko/docs/Web/API/Document_Object_Model/Introduction)
<br>
<br>



<br>
<br>

## DOM Tree

![돔트리](https://poiemaweb.com/img/dom-tree.png)

돔은 위와같이 돔트리구조로 되어있으며 가각의 요소를 노드라고 불른다.

돔트리는 4가지 종류가 있다.
### 문서 노드(Document Node)
    트리의 최상위에 존재하며 각각 요소, 어트리뷰트, 텍스트 노드에 접근하려면 문서 노드를 통해야 한다. 즉, DOM tree에 접근하기 위한 시작점(entry point)이다.
### 요소 노드(Element Node)
    요소 노드는 HTML 요소를 표현한다. HTML 요소는 중첩에 의해 부자 관계를 가지며 이 부자 관계를 통해 정보를 구조화한다. 따라서 요소 노드는 문서의 구조를 서술한다고 말 할 수 있다. 어트리뷰트, 텍스트 노드에 접근하려면 먼저 요소 노드를 찾아 접근해야 한다. 모든 요소 노드는 요소별 특성을 표현하기 위해 HTMLElement 객체를 상속한 객체로 구성된다. (그림: DOM tree의 객체 구성 참고)
### 어트리뷰트 노드(Attribute Node)
    어트리뷰트 노드는 HTML 요소의 어트리뷰트를 표현한다. 어트리뷰트 노드는 해당 어트리뷰트가 지정된 요소의 자식이 아니라 해당 요소의 일부로 표현된다. 따라서 해당 요소 노드를 찾아 접근하면 어트리뷰트를 참조, 수정할 수 있다.
### 텍스트 노드(Text Node)
    텍스트 노드는 HTML 요소의 텍스트를 표현한다. 텍스트 노드는 요소 노드의 자식이며 자신의 자식 노드를 가질 수 없다. 즉, 텍스트 노드는 DOM tree의 최종단이다.
>ref https://poiemaweb.com/js-dom






>ref https://www.youtube.com/watch?v=aTGhKjoZeao&ab_channel=%EC%A7%90%EC%BD%94%EB%94%A9%EC%9D%98CODINGGYM