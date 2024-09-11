class Node{
    constructor(value){
        this.data = value
        this.next = null
        this.prev = null
    }
}
class DoublyLinkedList{
    constructor(value){
        this.head = new Node(value)
        this.tail = this.head
        this.length = 1
    }
    push(value){
        const newNode = new Node(value)
        this.tail.next = newNode
        newNode.prev = this.tail
        this.tail = newNode
        this.length++
    }
    pop(){
        let temp = this.head
        let last = this.head
        while(temp.next){
            temp = temp.next
            last = temp.prev
        }
        last.next = null
        this.tail = last
        this.length--
        return last
    }
    unshift(value){
        const newNode = new Node(value)
        newNode.next = this.head
        this.head.prev = newNode
        this.head = newNode
        this.length++
    }
    shift(){
       let newFirst =  this.head.next
       newFirst.prev = null
       this.head = newFirst
       this.length--
    }
    //get First Node
    getFirst(){
        return this.head
    }
    //get Last node
    getLastNode(){
        let temp = this.head
        let last
        while(temp.next){
           temp =  temp.next
           last = temp
        }
        return last
    }
    switchHeadandTail(){
        let firstNode = this.getFirst()
        let lastNode = this.getLastNode()
        lastNode.prev.next = firstNode
        firstNode.prev = lastNode.prev
        lastNode.next = firstNode.next
        lastNode.prev = null
        this.head = lastNode
        this.tail = firstNode

        //reverse the arrows
        let temp = this.head
        while(temp.next){
            temp.next = temp.prev
        }
    }
}

const doublyLinkedList = new DoublyLinkedList(2)
doublyLinkedList.push(3)
doublyLinkedList.push(5)
doublyLinkedList.unshift(7)
doublyLinkedList.pop()
doublyLinkedList.unshift(7)
doublyLinkedList.unshift(9)
doublyLinkedList.switchHeadandTail()
// doublyLinkedList.shift()
// doublyLinkedList.shift()
console.log(doublyLinkedList)
