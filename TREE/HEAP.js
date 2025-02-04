class HEAP{
    constructor(){
        this.heap=[]
    }

    getParent(index){
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

    insert(value){
        this.heap.push(value)
        this.heapifyUp()
    }
    heapifyUp(){
          let index=this.heap.length-1
          
          while(index>0){

         let parent=this.getParent(index)
          if(this.heap[index]>this.heap[parent]){
            this.swap(index,parent)
            index=parent
          }else{
            break
          }
          }
    }

    removeRoot(){
        if(this.heap.length===0) return null

        let root = this.heap[0]
        this.heap[0]=this.heap.pop()

        this.heapifyDown(0)
        return root
    }
    heapifyDown(index){
        let largest=index
        let left=this.leftChild(index)
        let right=this.rightChild(index)
        let n=this.heap.length
        if(left<n&&this.heap[left]>this.heap[largest]){
            largest=left
        }
        if(right<n&&this.heap[right]>this.heap[largest]){
            largest=right
        }
        if(largest!==index){

            this.swap(index,largest)
            this.heapifyDown(largest)
        }

    }
}

const heapMax=new HEAP
heapMax.insert(8)
heapMax.insert(2)
heapMax.insert(15)
heapMax.insert(50)
heapMax.insert(10)
heapMax.insert(40)
heapMax.insert(80)
heapMax.removeRoot()

console.log(heapMax);
