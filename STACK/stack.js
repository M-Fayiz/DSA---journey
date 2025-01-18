class Stack{
    constructor(){
        this.item=[]
    }

    push(data){
        this.item.push(data)
    }

    pop(){
        if(this.item.length===0){
            return 'underflow'
        }
        this.item.pop()
    }

    peek(){
        if(this.item.length===0){
            return 'empty'
        }
        console.log(this.item[this.item.length-1]);
        
        return this.item[this.item.length-1]
    }

    display(){
        if (this.item.length==0) {
            return 'empty'            
        }
        console.log(this.item);
        
    }
}

// const make = new Stack
// make.push(10)
// make.push(20)
// make.push(30)
// make.push(40)
// make.peek()
// make.display()

function palindrom(arr){
    let stack=[]

    for(let i=0;i<arr.length;i++){
        stack.push(arr[i])
    }

    let i=0
    while(stack.length>0){
        if(stack.pop()!==arr[i]){
            return false
        }
        i++
    }
    return true
}
// console.log(palindrom('hello'));
// console.log(palindrom('racecar'));

function reverse(arr){
    let stack=[]

    for(let i=0;i<arr.length;i++){
      stack.push(arr[i])
    }

    let revs=''
    while(stack.length>0){
        revs+=stack.pop()
    }
    return revs
}

console.log(reverse('hello'));

