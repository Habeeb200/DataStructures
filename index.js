class Node{
    constructor(value){
        this.data = value
        this.next = null
    }
}

class LinkedList{
    constructor(value){
        this.head = new Node(value)
        this.tail  = this.head
        this.length = 1
    }
    push(value){
        const newNode = new Node(value)
        if(!this.head){
            this.head = newNode
            this.tail = newNode
        }
        this.tail.next = newNode
        this.tail = newNode
        this.length++
    }
    pop(){
        if(!this.head) return undefined
        let temp= this.head;
        let prev = this.head
        while(temp.next){
            prev = temp
            temp = temp.next
        }
        this.tail = prev
        this.tail.next = null
        this.length--
        if(this.length == 0){
            this.head = null
            this.tail = null
        }
    }
    unshift(value){
        const newNode = new Node(value)
        let prev = this.head
        newNode.next = prev
        this.head = newNode
        this.length++
    }
    shift(){
        //get all the items except from the first
        if(!this.head)return undefined
        let prev = this.head.next
        this.head = prev
        this.length--
        if(this.length == 0){
            this.head = null
            this.tail = null
        }
    }
    getFirst(){
        //get only the first element
        if(!this.head)return undefined
        return this.head
    }
    getLast(){
        let temp = this.head
        let last = this.head
        while(temp.next){
            last = temp.next
            temp = temp.next
        }
        return last
    }
    getElementById(value){
        let i = 0
        let temp = this.head
        let current
        while (i<value && temp.next){
            current = temp.next
            temp = temp.next
            i++
        }
        return current
    }
    getAndSet(index,value){
        let i = 0
        let temp = this.head
        let current
        while (i<index && temp.next){
            current = temp.next
            temp = temp.next
            i++
        }
        current.data = value
        return current
    }
    insert(value,index){
        const newNode = new Node(value)
        const getPlace = this.getElementById(index)
        const oldNext = getPlace.next
        getPlace.next = newNode
        newNode.next = oldNext
        this.length++
    }
    size(){
        let i= 0
        let temp = this.head
        while(temp.next){
            temp = temp.next
            i++
        }
        return i
    }
    clear(){
        this.head = null
        this.tail = null
        this.length =0
    }
    reverseList(){
        let temp = this.head
        let prev = null
        while(temp.next){
            let nextNode = temp.next
            nextNode.next = prev
            // temp = temp.next
        }
    }
}
const myLinkedList = new LinkedList(1)
myLinkedList.push(3)
myLinkedList.push(5)
myLinkedList.unshift(2)
myLinkedList.unshift(5)
// myLinkedList.unshift("x")
// myLinkedList.unshift("y")
// myLinkedList.shift()
// myLinkedList.getFirst()
// myLinkedList.getAndSet(1,10)
// myLinkedList.insert(15,1)
// myLinkedList.clear()
myLinkedList.reverseList()
console.log(myLinkedList)
