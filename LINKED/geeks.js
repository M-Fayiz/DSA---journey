class Node{
    constructor(data){
        this.data=data
        this.next = null
    }
}

class LinkedLIst{
    constructor(){
        this.head=null
        this.size=0
    }

    push(data){
   const newNode=new Node(data)
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

   unShift(data){
    const newNode=new Node(data)
    newNode.next=this.head
    this.head=newNode
    this.size++
   }

   Insert (index,data){
    const newNode=new Node(data)
    let i=1
    let current=this.head
    let previouse=null

    while(i<index&& current!==null){
        previouse=current
        current=current.next
        i++
    }
    if(i===index){
        previouse.next=newNode
        newNode.next=current
    }
    this.size++
}

   Print(){
    let current=this.head
   let arr=[]
    while(current!==null){
       arr.push(current.data)
        current=current.next
    }
    return arr
   }

   shift(){
    const temp=this.head
    this.head=this.head.next
    temp=null
   }
   afterBefor(data,insert){
    const newNode=new Node(data)
    
    let current=this.head
    let prvs=null
    while(current.data!==insert){
          prvs=current
          current=current.next
         
    }
    prvs.next=newNode
    newNode.next=current
    const after=new Node(data)
    after.next=current.next
    current.next=after
    return
   }

   pop(){
    if(this.head===null){
        return
    }
    if(this.head.next===null){
        this.head=null
        return
    }

    let current=this.head
    while(current.next.next!==null){
        current=current.next     
    }
    current.next=null
   }

   splice(index){
      if(!this.head){
        return this.head
      }

      if(index===1){
        this.head=this.head.next
        return
      }
      let i=1
      let current=this.head
      let prvs=null
      while(i<index&&current!==null){
        prvs=current
        current=current.next
        i++
      }


      if(index===i){
         prvs.next=current.next
         return
      }

   }

//    deleteDuplicate(){
//     let current=this.head
//     while()
//    }

   reverse(node=this.head){
   
    if(node===null){
        return 
    }
    this.reverse(node.next)
    console.log(node.data)
   }
}

// const Create=new LinkedLIst
// Create.push(20)
// Create.push(24)
// Create.push(80)
// console.time()
// Create.push(10)
// console.timeEnd()

// Create.unShift(200)
// Create.Insert(2,300)
// Create.Insert(3,1000)
// Create.shift()

// Create.pop()
// Create.splice(3)
// Create.afterBefor(34,80)
// Create.afterBefor(55,24)
// console.log(Create.Print())
// Create.reverse()

// console.log("Linked LIst LEngth :",Create.size)

class NewNode{
    constructor(data){
        this.data=data
        this.next=null
    }
}

class Link{
    constructor(){
        this.head=null
        this.tail=null
        this.size=0
    }

    push(data){
        const newNode=new NewNode(data)
        if(!this.head){
            this.head=newNode
            this.tail=newNode
        }else{
            this.tail.next=newNode
            this.tail=newNode
        }
        this.size++
    }

    remove(data){
        let current=this.head
        let prvs=null
        while(current.data!==data){
            prvs=current
            current=current.next
        }
        if(!current){
            console.log('invalide Data')
            return
            
        }
        if(current){
           prvs.next=current.next
           return
        }
    }
    // reverse(node=this.head){
    //     if(node==null){
    //         return 
    //     }

    //     this.reverse(node.next)
    //     console.log(node.data)
    // }
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
    findMidle(){
        let length=Math.floor(this.size/2)
        let i=1
        let current=this.head
        while(i<=length&&current){
            current=current.next
            i++
        }
        return current.data
    }

    index(){
        let current=this.head
        let prvs=null
        let next
        while(current){
            next=current.next
            current.next=prvs
            prvs=current
            current=next
        }
        return prvs
    }
    mid(){
        let slow=this.head
        let fast=this.head
        let prvs=null
        while(fast&&fast.next!==null){
            prvs=slow
            fast=fast.next.next
            slow=slow.next
        }
        prvs.next=slow.next
        
    }

    print(){
        let current=this.head
        let result=[]
        while(current!==null){
            result.push(current.data)
            current=current.next
        }
        console.log(result)
    }

}

const make=new Link
make.push(22)
make.push(33)
make.push(44)
make.push(55)
make.push(66)
// make.push(77)
// make.remove(33)
// console.log(make.index()) 

// console.log( make.findMidle());

// make.reverse()

// console.log(make.isCycle())

// console.log(make.mid())



// make.print()
console.log(JSON.stringify(make));

// function findFactorial(n){
//     if(n===0){
//         return 1
//     }
    
//    return n*findFactorial(n-1)
// }
// console.log(findFactorial(5))