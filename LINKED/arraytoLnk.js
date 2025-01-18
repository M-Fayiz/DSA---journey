class Node{
    constructor(data){
        this.data=data
        this.next=null
    }
}

class LinkedList{
    constructor(){
        this.head=null
        this.tail=null
    }

    push(arr){
        if(arr.Lenght<0){
            return 
        }
        const newNode=new Node(arr[0])
        if(this.head===null){
           this.head=newNode
           this.tail=newNode
        }
            let current=this.tail
           
            for(let i=1;i<arr.length;i++){
                current.next=new Node(arr[i])
                current=current.next
            }

        this.tail=current
        
        
    }
    toArray(){
        let current=this.head
        let array=[]
        while(current!==null){
            array.push(current.data)
            current=current.next
        }
        return array
    }

    print(){
        let current=this.tail
        let arr=[]
        while(current){
            arr.push(current.data)
            current=current.next
        }
        console.log(arr)
    }
}
let arr=[1,2,3,4,5]
const create=new LinkedList
create.push(arr)
create.print()
create.toArray()
// console.log(create)