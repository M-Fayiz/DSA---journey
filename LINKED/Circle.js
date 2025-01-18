class Node{
    constructor(data){
        this.data=data
        this.next=null
    }
}

class Linked_LIST {
    constructor(){
        this.head=null
        this.tail=null
    }
        
    push(data){
        const newNode=new Node(data)

        if(!this.head){
            this.head=newNode
            this.tail=newNode
            newNode.next=this.head
        }else{
            this.tail.next=newNode
            this.tail=newNode
            this.tail.next=this.head
        }

    }
    unShift(data){
        const newNode=new Node(data)

        if(!this.head){
            this.head=newNode
            this.tail=newNode
            newNode.next=this.head
            return
        }
      
        newNode.next=this.head
        this.head=newNode
        this.tail.next=this.head
        return
    }

    insert (index,data){
        const newNode=new Node(data)
        if (!this.head){
            this.head=newNode
            this.tail=newNode
            newNode.next=this.head
            return
        }
        if(index===1){
            newNode.next=this.head
            this.head=newNode
            this.tail.next=this.head
            return
        }
        let current=this.head
        let prvs=null
        let i=1
        while(i<index&&current!==null){
              prvs=current
              current=current.next
              i++
        }
        if(i===index){
            prvs.next=newNode
            newNode.next=current
            if(current===this.head){
                this.tail=newNode
                this.tail.next=this.head
               
            }
            return
        }
    }
    
    pop(){
        if(!this.head){
            return this.head
        }
        if(this.head===this.tail){
            this.head=null
            this.head=null
            return 
        }
        let current=this.head
        while(current.next!==this.tail){
            current=current.next
        }
        current.next=this.head
        this.tail=current
        return
    }
    reverse(node=this.head){
     if(node===this.tail)return
     this.reverse(node.next)
     console.log(node.data)
    }

    isCycle(){
        let slow=this.head
        let fast=this.head
        while(fast&& fast.next){
            slow=slow.next
            fast=fast.next.next
            if(slow===fast){
                return true
            }
        }
        return -1
    }
  
    Print(){
        let current=this.head
        let arr=[]
        do{
            arr.push(current.data)
            current=current.next
        }while(current !==this.head)
            console.log(arr)
    }
}

const create = new Linked_LIST
create.push(40)
create.push(50)
create.push(60)
create.unShift(35)
create.unShift(100)
create.insert(4,200)
create.pop()
create.Print()
create.reverse()
console.log(create.isCycle())