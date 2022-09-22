// 1. document 의 자식 노드들 중 두번째 노드를 node1변수에 할당하도록 코드를 작성하세요.
let node1 = docment.childNodes[1];

// 2. node1의 자식 노드들 중 세번째 노드를 node2변수에 할당하도록 코드를 작성하세요.
let node2 = docment.childNodes[3];

// 3. node2의 자식 노드들 중 두번째 노드를 node3변수에 할당하도록 코드를 작성하세요.
let node3 = node2.childNodes[2];

// 4. node1, node2, node3의 이름을 nodeName을 이용해 출력하도록 코드를 작성하세요.
console.log(node1.nodeName);
console.log(node2.nodeName);
console.log(node3.nodeName);



//5. `node2`의 자식 변수들을 모두 출력해봅니다.
