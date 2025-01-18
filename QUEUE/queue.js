// class Queue{
//     constructor(){
//         this.item={}
//         this.front=0
//         this.rear=0
//     }

//     enqueue(data){
//      this.item[this.rear]=data
//      this.rear++  
//     }

//     dequeue(){
//         const shifted=this.item[this.front]
//         delete this.item[this.front]
//         this.front++
//         return shifted
//     }
//     peek(){
//         return this.item[this.front]
//     }
    
//     size(){
//         return this.rear-this.front
//     }
// }

// const make = new Queue
// make.enqueue(10)
// make.enqueue(20)
// make.enqueue(30)
// make.enqueue(40)
// make.enqueue(50)
// console.log(make.dequeue());
// console.log(make.dequeue());

// console.log(make);
// console.log(make.size());

// console.log(make.peek());

class objQueue{
    constructor(){
        this.queue={}
        this.rear=0
        this.front=0
    }

    enqueue(x){
        this.queue[this.rear]=x
        this.rear++
    }

    dequeue(){
        const shifted=this.queue[this.front]
        delete this.queue[this.front]
        this.front++
        return shifted
    }
}

const make=new objQueue
make.enqueue(10)
make.enqueue(20)
make.enqueue(30)
make.enqueue(40)
console.log(make.dequeue());
