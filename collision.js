class Hash{
    constructor(){
        this.table=new Array(25)
    }

    _hash(key){
        let hash=0
        for(let i=0;i<key.length;i++){
            hash+=key.charCodeAt(i)
        }
        return hash%this.table.length
    }

    set(key,value){
        const index=this._hash(key)

        if(!this.table[index]){
            this.table[index]=[[key,value]]
        }else{
            let insert=false
            for(let pair of this.table[index]){
                if(pair[0]===key){
                    pair[1]=value
                    insert=true
                }
            }

            if(insert==false){
                this.table[index].push([key,value])
            }
        }
    }

    display(){
        return this.table
    }
}

const create=new Hash
create.set('apple',10)
create.set('age',19)
create.set(20,'hi')
create.set(30,'hello')

// console.log(create.display());


function palindrom(string){
   
    
    let stack=[]
    for(let i=0;i<string.length;i++){
        stack.push(string[i])
    }
  
    
   let revs=''
    while(stack.length>0){
        revs+=stack.pop()
    }
    return revs
}

console.log(palindrom('racecar'));

