class treeNode{
    constructor(data){
     this.data=data
     this.left=null
     this.right=null
    }
}

class tree{
    constructor(){
        this.root=null
    }

    add(data){
        const newNode=new treeNode(data)
        if(this.root===null){
            this.root=newNode
            return
        }

        let queue=[this.root]
        while(queue.length>0){
            let current=queue.shift()

            if(current.left==null){
                current.left=newNode
                return
            }else{
                queue.push(current.left)
            }

            if(current.right===null){
                current.right=newNode
                return
            }else{
                queue.push(current.right)
            }
        }
    }
//   left -> root -> right
    inOrder(node,result=[]){
        
        if(node!==null){
            this.inOrder(node.left,result)
            result.push(node.data)
            this.inOrder(node.right,result)
        }
        return result
    }

    find(){
        if(this.root===null){
            return false
        }
        
        let queue=[this.root]
        let min=this.root.data
        while(queue.length>0){
       
            let current=queue.shift()
            
            if(current.data<min){
                min=current.data
            }

            if (current.left) {
                queue.push(current.left)
            }
             if(current.right){
                queue.push(current.right)
            }
        }
        return min
    }
}

const create=new tree
create.add(20)
create.add(30)
create.add(100)
create.add(10)
create.add(50)
// create.add(60)

// console.log(create.inOrder(create.root))
// console.log(create.find());

function isBst(root){
       return validate (root,-Infinity,Infinity)
}
function validate(node,min,max){
  
    
    if(!node)return true

    if(node.data<=min||node.data>=max){
        return false
    }

    return(validate(node.left,min,node.data)&&validate(node.right,node.data,max))
}
console.log(isBst(create.root));

// console.log(JSON.stringify(create));
