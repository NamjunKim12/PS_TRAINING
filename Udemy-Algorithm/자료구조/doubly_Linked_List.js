//다중 연결 리스트
//이중 연결 리스트는 노드가 두 개의 포인터를 가지고 있는 연결 리스트이다.
//이중 연결 리스트는 이전 노드와 다음 노드를 가리키는 포인터를 가지고 있다.
//이중 연결 리스트는 양방향으로 탐색이 가능하다.
//이중 연결 리스트는 노드를 추가하거나 삭제할 때 앞 노드와 뒤 노드의 포인터를 변경해야 한다.
//이중 연결 리스트는 노드를 추가하거나 삭제할 때 노드의 위치를 찾아야 한다.


class Node {
    constructor(val) {
        this.val = val;
        this.next = null;
        this.prev = null;
    }
}

class DoublyLinkedList {
    constructor() {
        this.head = null;
        this.tail = null;
        this.length = 0;
    }

    // 노드 추가
    push(val){
        let newNode = new Node(val);
        if(!this.head){
            this.head = newNode;
            this.tail = newNode;
        } else {
            this.tail.next = newNode;
            newNode.prev = this.tail;
            this.tail = newNode;
        }
        this.length++;
        return this;
    }
    pop(){
        if(!this.head) return undefined;
        let poppedNode = this.tail;
        if(this.length === 1){
            this.head = null;
            this.tail = null;
        } else {
            this.tail = poppedNode.prev;
            this.tail.next = null;
            poppedNode.prev = null;
        }
        this.length--;
        return poppedNode;
    }
    shift(){
        if(!this.head) return undefined;
        let oldHead = this.head;
        if(this.length === 1){
            this.head = null;
            this.tail = null;
        } else {
            this.head = oldHead.next;
            this.head.prev = null;
            oldHead.next = null;
        }
        this.length--;
        return oldHead;
    }
    unshift(val){
        let newNode = new Node(val);
        if(!this.head){
            this.head = newNode;
            this.tail = newNode;
        } else {
            this.head.prev = newNode;
            newNode.next = this.head;
            this.head = newNode;
        }
        this.length++;
        return this;
    }
    get(index){
        if(index < 0 || index >= this.length) return null;
        let count, current;
        if(index <= this.length/2){
            count = 0;
            current = this.head;
            while(count !== index){
                current = current.next;
                count++;
            }
        } else {
            count = this.length-1;
            current = this.tail;
            while(count !== index){
                current = current.prev;
                count--;
            }
        }
        return current;
    }
    set(index, val){
        let foundNode = this.get(index);
        if(foundNode !== null){
            foundNode.val = val;
            return true;
        }
        return false;
    }
    insert(index, val){
        if(index < 0 || index > this.length) return false;
        if(index === 0) return !!this.unshift(val);
        if(index === this.length) return !!this.push(val);

        let newNode = new Node(val);
        let beforeNode = this.get(index-1);
        let afterNode = beforeNode.next;

        beforeNode.next = newNode, newNode.prev = beforeNode;
        newNode.next = afterNode, afterNode.prev = newNode;
        this.length++;
        return true;
    }
    remove(index){
        if(index < 0 || index >= this.length) return undefined;
        if(index === 0) return this.shift();
        if(index === this.length-1) return this.pop();

        let removedNode = this.get(index);
        removedNode.prev.next = removedNode.next;
        removedNode.next.prev = removedNode.prev;
        removedNode.next = null;
        removedNode.prev = null;
        this.length--;
        return removedNode;
    }
    reverse(){
        let node = this.head;
        this.head = this.tail;
        this.tail = node;
        let next;
        let prev = null;
        for(let i=0; i<this.length; i++){
            next = node.next;
            node.next = prev;
            node.prev = next;
            prev = node;
            node = next;
        }
        return this;
    }
    print(){
        let arr = [];
        let current = this.head;
        while(current){
            arr.push(current.data);
            current = current.next;
        }
        console.log(arr);
    }
}


//시간 복잡도
// 삽입 : O(1)
// 삭제 : O(1)
// 검색 : O(N) or O(N/2)
// 접근 : O(N)

//장점
// 양방향으로 연결되어 있어서 양쪽으로 탐색이 가능하다.
// 삽입, 삭제가 쉽다.

//단점
// 노드를 탐색하기 위해서는 앞, 뒤에서부터 차례대로 탐색해야 한다.

//사용처
// 양방향으로 탐색이 필요한 경우
// 삽입, 삭제가 빈번한 경우

// 단일 연결 리스트와 이중 연결 리스트의 차이
// 단일 연결 리스트는 노드가 하나의 포인터를 가지고 있고, 이중 연결 리스트는 노드가 두 개의 포인터를 가지고 있다.
// 단일 연결 리스트는 노드를 탐색하기 위해서는 앞에서부터 차롈대로 탐색해야 하지만, 이중 연결 리스트는 앞, 뒤에서부터 차례대로 탐색할 수 있다.
