// 스택이란? 
// 삽입과 삭제가 한쪽 끝에서만 일어나는 자료구조
// LIFO(Last In First Out)의 구조를 가지고 있음
// 가장 마지막에 넣은 데이터가 가장 먼저 나옴

class Stack {
    constructor() {
        this.first = null;
        this.last = null;
        this.size = 0;
    }
    push(value) {
        let newNode = new Node(value);
        if (!this.first) {
            this.first = newNode;
            this.last = newNode;
        } else {
            let temp = this.first;
            this.first = newNode;
            this.first.next = temp;
        }
        return ++this.size;
    }
    pop() {
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


class Node {
    constructor(value) {
        this.value = value;
        this.next = null;
    }
}

//시간 복잡도
//삽입 : O(1)
//삭제 : O(1)
//검색 : O(n)
//접근 : O(n)