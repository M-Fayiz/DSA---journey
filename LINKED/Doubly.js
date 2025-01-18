class Node{
    constructor(data){
        this.data=data
        this.prv=null
        this.next=null
    }
}

class Linked{
    constructor(){
        this.head=null
        this.tail=null
        this.size=0
    }
   
    push(data){
        const newNode=new Node(data)
        if(this.head===null){
            this.head=newNode
            this.tail=newNode
        }else{
            this.tail.next=newNode
            newNode.prv=this.tail
            this.tail=newNode
        }
    }

    Unshift(data){
        const newNode=new Node(data)
        if(!this.head){
            this.head=newNode
            this.tail=newNode
            return
        }
       newNode.next=this.head
       this.head.prv=newNode
       this.head=newNode
       return
    }

    Insert(index,data){
        const newNode=new Node(data)
        if(index===1){
            newNode.next=this.head
            this.head.prv=newNode
            this.head=newNode
            return
        }
        let current=this.head
        let i=1
        while(i<index && current.next!==null){
            current=current.next
            i++
        }
    
        if(i===index){
            newNode.next=current
            newNode.prv=current.prv
           if( current.prv) current.prv.next=newNode
            current.prv=newNode
            if(newNode.next===null){
                this.tail=newNode
            }
            return
        }else{
            console.log('invalid')
            return
        }
    }

    Shift(){
        if(!this.head){
            return
        }
        if(this.head===this.tail){
            this.head=null
            this.tail=null
            return
        }
        let temp=this.head
        this.head=this.head.next
        this.head.prv=null
        temp=null
        return
    }

    pop(){
        if(!this.head){
            return
        }
        if(this.head===this.tail){
            this.head=null
            this.tail=null
            return
        }
  
        let temp=this.tail.prv
         temp.next=null
         this.tail=temp
        return
    }

    Splice(index){
        if(this.head===null){
            return this.head
        }
        
        if(index===1){
            this.head=this.head.next
            this.head.prv=null
            return
        }
        let i=1
        let current = this.head
        while(i<index&&current!==null){
            current=current.next
            i++
        }
        if(i===index){
            current.prv.next=current.next
            current.next.prv=current.prv
        }
        return
    }

    Forward(){
        let current=this.head
        let arr=[]
        while(current!==null){
            arr.push(current.data)
            current=current.next
        }
        return arr
    }
    rmSp(data){
        let current=this.head
        let prvs=null
        while(current){
          
            if(current.data==data){
                break
            }else{
                current=current.next
            }
        }
        if(current==null){
            console.log('invalid input')
            return
        }
        current.prv.next=current.next
        current.next.prv=current.prv

    }
    backWord(){
        let current=this.tail
        let arr=[]
        while(current){
            arr.push(current.data)
            current=current.prv
        }
        console.log(arr)

    }
  
}

const create= new Linked
create.push(15)
create.push(26)
create.Unshift(45)
create.Unshift(33)
create.Insert(2,3)
create.Insert(5,10)
// create.Shift()
// create.Shift()
// create.pop()
// create.Splice(2)
// create.backWord()
create.rmSp(34)
console.log(create.Forward())



