//큐 자료구조란?
//데이터를 넣는 입구와 데이터를 빼는 출구가 같은 형태를 말한다.
//큐는 FIFO(First In First Out) 또는 LILO(Last In Last Out) 방식으로 스택과 꺼내는 순서가 반대다.
//큐는 대기열이나 프린터의 출력 처리 등에 사용된다.
//큐는 배열을 이용해서 구현할 수도 있고 연결 리스트를 이용해서 구현할 수도 있다.
//큐는 배열을 이용해서 구현할 때는 배열의 앞쪽을 삭제하는 것이 비효율적이므로 원형 큐를 사용한다.
//큐는 연결 리스트를 이용해서 구현할 때는 큐의 노드를 추가하는 것이 비효율적이므로 연결 리스트의 뒤쪽에 노드를 추가하는 연결 리스트를 사용한다.

//큐 자료구조 구현
class Node{ 
    constructor(value) {
        this.value = value;
        this.next = null;
    }
}

class Queue {
    constructor() {
        this.first = null;
        this.last = null;
        this.size = 0;
    }
    enqueue(value) {
        let newNode = new Node(value);
        if (!this.first) {
            this.first = newNode;
            this.last = newNode;
        } else {
            this.last.next = newNode;
            this.last = newNode;
        }
        return ++this.size;
    }
    dequeue() {
        if (!this.first) return null;
        let temp = this.first;
        if (this.first === this.last) {
            this.last = null;
        }
        this.first = this.first.next;
        this.size--;
        return temp.value;
    }
}

//시간 복잡도
//삽입 : O(1)
//삭제 : O(1)
//검색 : O(n)
//접근 : O(n)

