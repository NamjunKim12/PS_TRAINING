//단일 연결 리스트
//노드가 다음 노드를 가리키는 포인터를 가지고 있다.
//노드는 데이터와 다음 노드를 가리키는 포인터로 구성되어 있다.
//마지막 노드는 null을 가리킨다.
//단일 연결 리스트는 노드를 추가하거나 삭제할 때 효율적이다.
//단일 연결 리스트는 노드를 탐색할 때 효율적이지 않다.
//단일 연결 리스트는 노드를 탐색할 때 처음부터 끝까지 순회해야 한다.
//단일 연결 리스트는 노드를 탐색할 때 노드의 인덱스를 알고 있어야 한다.


class Node{
    constructor(val){
        this.val = val;
        this.next = null;
    }
}

class SinglyLinkedList{
    constructor(){
        this.head = null;
        this.tail = null;
        this.length = 0;
    }
    push(val){
        var newNode = new Node(val);
        if(!this.head){
            this.head = newNode;
            this.tail = this.head;
        } else {
            this.tail.next = newNode;
            this.tail = newNode;
        }
        this.length++;
        return this;
    }
    pop(){
        if(!this.head) return undefined;
        var current = this.head;
        var newTail = current;
        while(current.next){
            newTail = current;
            current = current.next;
        }
        this.tail = newTail;
        this.tail.next = null;
        this.length--;
        if(this.length === 0){
            this.head = null;
            this.tail = null;
        }
        return current;
    }
    shift(){
        if(!this.head) return undefined;
        var currentHead = this.head;
        this.head = currentHead.next;
        this.length--;
        if(this.length === 0){
            this.tail = null;
        }
        return currentHead;
    }
    unshift(val){
        var newNode = new Node(val);
        if(!this.head){
            this.head = newNode;
            this.tail = this.head;
        } else {
            newNode.next = this.head;
            this.head = newNode;
        }
        this.length++;
        return this;
    }
    get(index){
        if(index < 0 || index >= this.length) return null;
        var counter = 0;
        var current = this.head;
        while(counter !== index){
            current = current.next;
            counter++;
        }
        return current;
    }
    set(index, val){
        var foundNode = this.get(index);
        if(foundNode){
            foundNode.val = val;
            return true;
        }
        return false;
    }
    insert(index, val){
        if(index < 0 || index > this.length) return false;
        if(index === this.length) return !!this.push(val);
        if(index === 0) return !!this.unshift(val);
        var newNode = new Node(val);
        var prev = this.get(index-1);
        var temp = prev.next;
        prev.next = newNode;
        newNode.next = temp;
        this.length++;
        return true;
    }
    remove(index){
        if(index < 0 || index >= this.length) return undefined;
        if(index === 0) return this.shift();
        if(index === this.length-1) return this.pop();
        var previousNode = this.get(index-1);
        var removed = previousNode.next;
        previousNode.next = removed.next;
        this.length--;
        return removed;
    }
    reverse(){
        var node = this.head;
        this.head = this.tail;
        this.tail = node;
        var next;
        var prev = null;
        for(var i = 0; i < this.length; i++){
            next = node.next;
            node.next = prev;
            prev = node;
            node = next;
        }
        return this;
    }
    print(){
        var arr = [];
        var current = this.head
        while(current){
            arr.push(current.val);
            current = current.next;
        }
        console.log(arr);
    }
}

//시간복잡도
//삽입: O(1)
//삭제: O(1) or O(n)
//검색, 접근: O(n)

//장점
//삽입, 삭제가 쉽다.
//데이터가 연속적으로 저장되어 있지 않아도 된다.

//단점
//검색, 접근이 느리다.
//데이터가 연속적으로 저장되어 있지 않아서 메모리를 효율적으로 사용하지 못한다.

//사용처
//삽입, 삭제가 많은 경우
//검색, 접근이 적은 경우

// 다중 연결 리스트와의 차이점
// 다중 연결 리스트는 노드가 이전 노드를 가리키는 포인터를 가지고 있지만, 단일 연결 리스트는 이전 노드를 가리키는 포인터를 가지고 있지 않다.