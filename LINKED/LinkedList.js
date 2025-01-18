class Node {
    constructor(data) {
        this.data = data;
        this.next = null;
    }
}

class LinkedList {
    constructor() {
        this.head = null
        this.size=0
    }
    //  add value at end of the node
 
    push(data) {
        const newNode = new Node(data);
    if(this.head===null){
        this.head=newNode
       
    }else{
     let current=this.head
     while(current.next!==null){
        current=current.next
     }
     current.next=newNode
     
    }
    this.size++
    }


    unshift(data) {
        const newNode = new Node(data);
        newNode.next = this.head; 
        this.head = newNode;     
        this.size++ 
    }

// consoling all node and its value
    print() {
     
        let current = this.head;
        while (current !== null) {

            console.log(current.data);
            current = current.next;
          
           
        }
    }
// insert a value at a specific index
    Insert(index,data){
        const newNode=new Node(data)
        let current=this.head
        let previous=null
        let i=1
        if(index>this.size){
            return 'prefer small index'
        }
        
        while(i<index && current.next!==null){
             previous=current
             current=current.next
             i++
        }
      
        if(i===index){
            newNode.next=current
            previous.next=newNode
        }
        this.size++
        
    }

    //  remove node from the last index

    pop(){
        let current=this.head

        while(current.next.next !==null){
            current=current.next
          
        }
     const popped=current.next.data
     current.next=null
     this.size--
     return popped  
    
    }

}


const create = new LinkedList();
create.push(10);     
create.push(100);   
create.unshift(200)

create.push(1000)
create.push(111454)
create.Insert(2,10955)

// console.log(create.size)
create.unshift(2345)

console.log( create.pop());
console.log( create.pop());
console.log( create.pop());

console.log(' - - - -')
create.print()
console.log(create); 