// class HashTable{
//     constructor(){
//         this.table=new Array(120)
//         this.size=0
//     }

//     _hash(key){
//         let hash=0
//         for(let i=0;i<key.length;i++){
//             hash+=key.charCodeAt(i)
//         }
//         return hash%this.table.length
//     }

//     set(key,value){
//         const index=this._hash(key)
//         this.table[index]=[key,value]
//         this.size++
//     }

//     get(key){
//         const index=this._hash(key)
//         return this.table[index]
//     }
//     remove(key){
//         const index=this._hash(key)
//         if(index){
//             this.table[index]=undefined
//             this.size--
//             return true
//         }else{
//             return false
//         }
//     }

// }

// const make=new HashTable
// make.set('fayiz',10955)
// make.set('ziyaf',10955)
// make.set('fayiz',10960)
// make.set('sajjad',10980)
// // make.remove('fayiz')

// console.log(make);

class Hassh{
    constructor(){
        this.table=new Array(10)
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
            let inserted=false
            for(let pair of this.table[index]){
                if(pair[0]===key){
                    pair[1]=value
                    inserted =true
                }

            }

            if(inserted==false){
                this.table[index].push([key,value])
            }
        }
    
    }

    get(key){
        const index=this._hash(key)
        if(this.table[index]){
            for(let i of this.table[index]){
                if(i[0]===key){
                    return i[1]
                }
            }
         
        }
        return null
    }

    remove(key){
        let removed
        const index=this._hash(key)
        if(this.table[index]){
           for(let pair of this.table[index]){
             if(pair[0]===key){
              removed=  this.table[index].splice(pair,1)
             }
           }          
           return removed
        }
        return null
    }

    display(){
        return this.table
    }
}

const make=new Hassh
make.set('fayiz',123)
make.set(25,'sajjad')
make.set(32,'aswin')
make.set(49,'amar')
make.set('fayiz',1955)
console.log(make.get(32));
// console.log(make.remove(25));


console.log(make.display())

