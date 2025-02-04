class Node{
    constructor(data){
        this.data=data
        this.left=null
        this.right=null
    }
}

class BST{
    constructor(){
        this.root=null

    }

    insert(data){
        const newNode=new Node(data)

        if(this.root===null){
            this.root=newNode
        }else{
             this.insertNode(this.root,newNode)
        }
    }
    insertNode(node,newnode){
        if(newnode.data<node.data){
            if(node.left==null)return node.left=newnode
            else return this.insertNode(node.left,newnode)
        }else{
            if(node.right==null)return node.right=newnode
            else return this.insertNode(node.right,newnode)
        }
    }

    MIN(node=this.root){
        if(!node) return null
      while (node.left!==null) {
        node=node.left
      }
      return node.data
    }

    remove(target){
         this.root=this.deleteNode(this.root,target)

         console.log(JSON.stringify(this.root));
         

    }
    deleteNode(node,target){

        // find node
        // Direct delete leaf node
        if(!node) return null
        if(target<node.data){
            node.left=this.deleteNode(node.left,target)
        }else if(target>node.right){
            node.right=this.deleteNode(node.right,target)
        }else{

            // replace node if it has only one child node
            if(!node.left){
                return node.right
            }else if(node.right==null){
                return node.left
            }

            // choose successor node and  replace with corrent node and delete the choosed successor

            node.data=this.MIN(node.right)
            console.log(node.data);
            
            node.right=this.deleteNode(node.right,node.data)
        }
        return node
    }
    
    inOrder(node=this.root,result=[]){
           if(node){
            this.inOrder(node.left,result)
            result.push(node.data)
            this.inOrder(node.right,result)
           }
           return result
    }
    BFS(){
        let queue=[]
        let result=[]
        
        queue.push(this.root)
        while(queue.length){
            let current=queue.shift()
            result.push(current.data)
            if(current.left){
                queue.push(current.left)
            }
            if(current.right){
                queue.push(current.right)
            }
        }
        console.log(result);
        
    }

    secondLarge(node=this.root){
        if(!node&&!node.left&&!node.right){
            return false
        }
        let current=node
        let parent=null
        while (current.right) {
            parent=current
            current=current.right
        }

        if(current.left){
            return this.MIN(current.left)
        }
        return parent.data
    }
    closetValue(target,node =this.root){
        let closest=node.data
        let current=node
        while (current) {
            if(Math.abs(current.data-target)<Math.abs(closest-target)){
                closest=current.data
            }
            if(target<current.data){
                current=current.left
            }else if(target>current.data){
                current=current.right
            }else{
                break
            }
        }
        return closest
    }

    count(node=this.root){
        if(!node){
            return null
        }
        return 1+ this.count(node.left)+this.count(node.right)
    }

    findHeight(node=this.root){
        if(!node){
            return 0
        }
        return Math.max(this.findHeight(node.left),this.findHeight(node.right))+1
    }

}

const bst=new BST
bst.insert(25)
bst.insert(30)
bst.insert(26)
bst.insert(28)
bst.insert(20)
bst.insert(10)
bst.insert(5)
bst.insert(8)
bst.insert(3)
bst.insert(12)
bst.insert(18)
bst.insert(11)
bst.insert(40)
// bst.remove(10)

// console.log(bst.inOrder());
bst.BFS()
//  console.log(bst.secondLarge());
console.log(bst.closetValue(39));

 console.log('height :' ,bst.findHeight());
 
console.log('count',bst.count());

// console.log(bst.MIN());

// console.log(JSON.stringify(bst));
