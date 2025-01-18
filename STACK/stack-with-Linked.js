class Node{
    constructor(data){
        this.data=data
        this.next=null
    }
}

class Linked{
    constructor(){
        this.top=null
        this.size=0
    }

    push(data){
        const newNode=new Node(data)
        if(this.top!==null){
            newNode.next=this.top
        }
        this.top=newNode
        this.size++
    }
    
    pop(){
        if(this.top==null){
            console.log('underFlow');
            
            return 'underFlow'
        }

        let popped=this.top
        this.top=this.top.next
        console.log(popped.data)
        popped=null
        
    }
    display(){
        let current=this.top
        let result=[]
        while(current){
result.push(current.data)
current=current.next
        }
        console.log(result);
        

    }

    peek(){
       console.log(this.top.data)
        return
    }
}

const hello=new Linked
hello.push(10)
hello.push(20)
hello.push(30)
hello.push(40)
hello.push(50)
// hello.pop()
hello.peek()
hello.display()
console.log(hello);
