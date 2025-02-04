class Graph{
    constructor(){
        this.Weighted=new Map()
    }

    addVertex(value){
        if(!this.Weighted.has(value)){
            this.Weighted.set(value,[])
        }
    }
    addEdges(From,To,wght){
        if(!this.Weighted.has(From)){
            this.addVertex(From)
        }
        if(!this.Weighted.has(To)){
            this.addVertex(To)
        }
        this.Weighted.get(From).push({node:To,wght})
        this.Weighted.get(To).push({node:From,wght})
    }
   

      removeEdges(from,to){
        let From=this.Weighted.get(from)
        let TO=this.Weighted.get(to)
        if(From){
            this.Weighted.set(from,From.filter(edges=>edges.node!==to))
            this.Weighted.set(to,TO.filter(edges=>edges.node!==from))
        }
        this.Weighted.delete(from)
      }
}

const graph=new Graph
graph.addVertex('A')
graph.addVertex('B')
graph.addVertex('C')
graph.addEdges('A','B',10)
graph.addEdges('C','B',15)
graph.removeEdges('A','B')
console.log(graph.Weighted.entries());
// graph.display()
// console.log(graph);
