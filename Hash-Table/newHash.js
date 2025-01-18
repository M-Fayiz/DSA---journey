
class HashTable{
    constructor(){
        this.table=new Array(50)
        this.size=0
    }

    _hash(key) {
        let hash = 0;
        for (let i = 0; i < key.length; i++) {
            hash += key.charCodeAt(i);
        }
        return hash % this.table.length;
    }

    set(key,value){
        
        
       const index=this._hash(key)

       if(!this.table[index]){
        this.table[index]=[]
       }
       this.table[index].push([key,value])
    }

    get(key){
        const index=this._hash(key)
        if(this.table[index]){
            console.log(this.table[index]);
            
        //    for(let pair of this.table[index]){
        //    if(pair[0]===key){
        //     return pair[1]
        //    }
            
        //    }
            
        }
        return undefined
    }
}

const make=new HashTable
make.set('fruits','apple')
make.set('veg','tomato')
make.set('meat','beef')
make.set('fruits','grapse')
console.log( make.get('fruits'));

// console.log(make);
