class HEAP{
    constructor(){
        this.heap=[]
    }


    getParant(index){
     return Math.floor((index-1)/2)
    }
    leftChild(index){
        return 2*index+1
    }
    rightChild(index){
        return 2*index+2
    }

    swap(index1,index2){
        [this.heap[index1],this.heap[index2]]=[this.heap[index2],this.heap[index1]]
    }
    remove(){
       let root=this.heap[0]

       this.heap[0]=this.heap.pop()

       this.heapifyDown(0)
    }
    heapifyDown(index){
      let large=index
      let left=this.leftChild(index)
      let right=this.rightChild(index)
      let n=this.heap.length
      if(left<n&&this.heap[left]>this.heap[large]){
        large=left
      }
      if(right<n&&this.heap[right]>this.heap[large]){
        large=right
      }

      if(large!==index){
        this.swap(index,large)

        this.heapifyDown(large)
      }
    }
    insert(value){
        this.heap.push(value)
        this.heapifyUp()
    }

    heapifyUp(){
       let index=this.heap.length-1
       let parant=this.getParant(index)
    
       
     while(index>0){

         if(this.heap[index]>this.heap[parant]){
          this.swap(index,parant)
          index=parant
         }else{
            break
         }
      }
     }
}

const newHeap=new HEAP
newHeap.insert(3)
newHeap.insert(9)
newHeap.insert(50)
newHeap.insert(15)
newHeap.insert(10)
newHeap.insert(35)
newHeap.remove()
console.log(newHeap)
