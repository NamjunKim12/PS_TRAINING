//트리 자료구조
//트리는 노드와 노드를 연결하는 간선으로 이루어진 자료구조이다.
//트리는 부모 노드와 자식 노드의 관계로 표현된다.
//트리는 부모 노드에서 자식 노드로 내려가는 방향으로만 탐색이 가능하다.
//트리는 계층적이고 비선형적이다.
//트리는 그래프의 한 종류이다.
//트리는 이진 트리, 이진 탐색 트리, AVL 트리, 힙 등이 있다.


//이진 트리
//이진 트리는 각 노드가 최대 두 개의 자식 노드를 가지는 트리이다.
//이진 트리는 이진 탐색 트리, AVL 트리, 힙 등이 있다.

//이진 탐색 트리
//이진 탐색 트리는 이진 트리의 일종이다.
//이진 탐색 트리는 왼쪽 자식 노드의 키 값이 부모 노드의 키 값보다 작고, 오른쪽 자식 노드의 키 값이 부모 노드의 키 값보다 크다.
//이진 탐색 트리는 탐색에 있어서 O(logN)의 시간 복잡도를 가진다.
//이진 탐색 트리는 이진 탐색 알고리즘을 구현하기 위해 만들어졌다.

//AVL 트리
//AVL 트리는 이진 탐색 트리의 일종이다.
//AVL 트리는 왼쪽 자식 노드의 키 값이 부모 노드의 키 값보다 작고, 오른쪽 자식 노드의 키 값이 부모 노드의 키 값보다 크다.
//AVL 트리는 왼쪽 서브 트리와 오른쪽 서브 트리의 높이 차이가 1 이하이다.
//AVL 트리는 탐색에 있어서 O(logN)의 시간 복잡도를 가진다.
//AVL 트리는 이진 탐색 트리의 높이가 너무 커지지 않도록 균형을 맞춰주기 위해 만들어졌다.

//힙
//힙은 이진 트리의 일종이다.
//힙은 완전 이진 트리이다.
//힙은 최대 힙과 최소 힙이 있다.
//최대 힙은 부모 노드의 키 값이 자식 노드의 키 값보다 크거나 같다.
//최소 힙은 부모 노드의 키 값이 자식 노드의 키 값보다 작거나 같다.
//힙은 탐색에 있어서 O(logN)의 시간 복잡도를 가진다.
//힙은 우선순위 큐를 구현하기 위해 만들어졌다.
