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
class Node { 
    constructor(value) { 
        this.value = value; 
        this.left = null; 
        this.right = null; 
    } 
}

class BinarySearchTree {
    constructor() {
        this.root = null;
    }
    insert(value){
        const newNode = new Node(value);
        if(this.root === null){
            this.root = newNode;
        } else {
            let currentNode = this.root;
            while(true){
                if(value === currentNode.value) return undefined;
                if(value < currentNode.value){
                    //Left
                    if(!currentNode.left){
                        currentNode.left = newNode;
                        return this;
                    }
                    currentNode = currentNode.left;
                } else {
                    //Right
                    if(!currentNode.right){
                        currentNode.right = newNode;
                        return this;
                    }
                    currentNode = currentNode.right;
                }
            }
        }
    }
    contains(value){
        if(this.root === null) return false;
        let currentNode = this.root;
        while(currentNode){
            if(value < currentNode.value){
                currentNode = currentNode.left;
            } else if(value > currentNode.value){
                currentNode = currentNode.right;
            } else {
                return true;
            }
        }
        return false;
    }
    BFS(){
        let node = this.root;
        let data = [];
        let queue = [];
        queue.push(node);
        while(queue.length){
            node = queue.shift();
            data.push(node.value);
            if(node.left) queue.push(node.left);
            if(node.right) queue.push(node.right);
        }
        return data;
    }
    // 깊이 우선 탐색 - 전위 순회
    // 1. 루트 노드를 방문한다.
    // 2. 왼쪽 서브 트리를 전위 순회한다.
    // 3. 오른쪽 서브 트리를 전위 순회한다.
    DFSPreOrder(){
        let data = [];
        let current = this.root;
        function traverse(node){
            data.push(node.value);
            if(node.left) traverse(node.left);
            if(node.right) traverse(node.right);
        }
        traverse(current);
        return data;
    }
    // 깊이 우선 탐색 - 후위 순회
    // 1. 왼쪽 서브 트리를 후위 순회한다.
    // 2. 오른쪽 서브 트리를 후위 순회한다.
    // 3. 루트 노드를 방문한다.
    DFSPostOrder(){
        let data = [];
        let current = this.root;
        function traverse(node){
            if(node.left) traverse(node.left);
            if(node.right) traverse(node.right);
            data.push(node.value);
        }
        traverse(current);
        return data;
    }
    // 깊이 우선 탐색 - 중위 순회
    // 1. 왼쪽 서브 트리를 중위 순회한다.
    // 2. 루트 노드를 방문한다.
    // 3. 오른쪽 서브 트리를 중위 순회한다.
    DFSInOrder(){
        let data = [];
        let current = this.root;
        function traverse(node){
            if(node.left) traverse(node.left);
            data.push(node.value);
            if(node.right) traverse(node.right);
        }
        traverse(current);
        return data;
    }

}

//시간 복잡도
//삽입 : O(logN)
//탐색 : O(logN)
//삭제 : O(logN)


