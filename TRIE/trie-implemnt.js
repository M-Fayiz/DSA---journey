class TRIE{
    constructor(){
        this.child={}
        this.isEnd=false
    }
}

class CreateTrie{
    constructor(){
        this.root=new TRIE

    }

    insert(word){
   let current = this.root
   for(let char of word){
    if(!current.child[char]){
        current.child[char]=new TRIE
    }
    current=current.child[char]
   }
   current.isEnd=true

    }

    search(word){
        let current=this.root
        for(let char of word){
            if(!current.child[char]) return false

            current=current.child[char]
        }
        return current.isEnd

    }

    startWith(word){
        let current=this.root

        for(let char of word){
            if(!current.child[char]) return false
            current=current.child[char]
        }

        return true
    }

    listed(){
        let result=[]
        const dfs=(node,prefix)=>{
                 if(node.isEnd){
                    result.push(prefix)
                 }
                 for(let char in node.child){
                    dfs(node.child[char],prefix+char)
                 }
        }
        dfs(this.root,'')
        return result
    }

    count(){
        let count=0
        const dfs=(node)=>{
            if(node.isEnd){
                count++
            } 
            for(let char in node.child){
                dfs(node.child[char])
            }
        }
        dfs(this.root)
        return count
    }
}

const newTrie=new CreateTrie
newTrie.insert('inter')
newTrie.insert('internet')
newTrie.insert('hello')
// console.log(newTrie.search('hello'));
// console.log(newTrie.startWith('ha'));
// console.log(newTrie.listed());
console.log(newTrie.count());




