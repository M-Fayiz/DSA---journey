class Node{
       
    constructor(data){
        this.data=data
        this.next=null
    }
     
}

class Linked{
    constructor(){
        this.head=null
        this.tail=null
    }
    push(data){
        const newNode=new Node(data)
        if(!this.head){
            this.head=newNode
            this.tail=newNode
        }else{
            this.tail.next=newNode
            this.tail=newNode
        }
    }

    remove(){
        let current=this.head

        while(current&&current.next){
            if(current.data===current.next.data){
                current.next=current.next.next
            }else{
                current=current.next
            }
        }
    }

    print(){
        let current=this.head
        let result=[]
        while(current){
           result.push(current.data)
           current=current.next
        }
        console.log(result)
    }
}

const create=new Linked
create.push(2)
create.push(2)
create.push(2)
create.push(1)
create.push(3)
create.push(4)
create.push(4)
create.remove()
create.print()