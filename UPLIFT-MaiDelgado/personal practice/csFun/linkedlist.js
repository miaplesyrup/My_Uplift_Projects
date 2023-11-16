class Node{
    constructor(value){
        this.value = value;
        this.next = null;
    }
}

// let first = new Node("Hello");
// first.next = new Node("World");
// first.next.next = new Node("!");

class LinkedList{
    constructor(){
        this.head = null;
        this.tail = null;
        this.length = 0;
    }
    /*
    - This function should accept a value
    - Create a new node using the value passed to the function
    - If there is no head property on the list, set the head and tail to be the newly created node
    - Otherwise set the next property on the tail to be the new node and set the tail 
      property on the list to be the newly created node
    - Increment the length by one
    - Return the linked list
    */
    push(value){
        let newNode = new Node(value);
        if(!this.head){
            this.head = newNode;
            this.tail = newNode;
        }else{
            this.tail.next = newNode;
            this.tail = newNode;
        }
        this.length ++;
        return this;
    }
    /*
        - If there are no nodes in the list, return undefined
        - Loop through the list until you reach the tail
        - Set the tail to be the 2nd to last node
        - Set the next property of the 2nd to last node to be null
        - Decrement the length of the list by 1
        - Return the value of the node removed
    */
    //remove at the end of list
    pop(){
        if(!this.head) return undefined;
        let current = this.head; //31, 45, 2
        let prev = current; //31, 31, 45
        while (current.next) {
            prev = current;
            current = current.next; 
        }
        this.tail = prev;
        this.tail.next = null;
        this.length--;
        return current;
    }
    /*
        - If there are no nodes, return undefined
        - Store the current head property in a variable
        - Set the head property to be the current head's next property
        - Decrement the length by 1
        - Return the value of the node removed
    */
    //remove head
    shift(){
       if(!this.head) return undefined; 
        let currentHead = this.head;
        this.head = this.head.next;
        this.length--;
        return currentHead;
    }
    /*
        - This function should accept a value
        - Create a new node using the value passed to the function
        - If there is no head property on the list, set the head and tail to be the newly created node
        - Otherwise set the newly created node's next property to be the current head property on the list
        - Set the head property on the list to be that newly created node
        - Increment the length of the list by 1
        - Return the linked list
    */
   
}

let list = new LinkedList();