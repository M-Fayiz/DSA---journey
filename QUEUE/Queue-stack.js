class queue{
    constructor(){
        this.stack1=[]
        this.stack2=[]
    }

    enqueue(x){
        this.stack1.push(x)
    }

    dequeue(){
        if(this.stack2.length===0){
            while(this.stack1.length>0){
                this.stack2.push(this.stack1.pop())
            }
        }

        return this.stack2.pop()
    }
}

const make=new queue
make.enqueue(10)
make.enqueue(20)
make.enqueue(30)
make.enqueue(40)
console.log(make.dequeue());

