class Graph{
    constructor(){
        this.AdjecantList={}
    }

    addVertex(value){
        if(!this.AdjecantList[value]){
            this.AdjecantList[value]=new Set()
        }
    }

    addEdges(vertex1,vertex2){
        if(!this.AdjecantList[vertex1]){
            this.addVertex(vertex1)
        }
        if(!this.AdjecantList[vertex2]){
            this.addVertex(vertex2)
        }

        this.AdjecantList[vertex1].add(vertex2)
        this.AdjecantList[vertex2].add(vertex1)
    }

    display(){
        for(let vertex in this.AdjecantList){
            console.log(vertex+' > '+[...this.AdjecantList[vertex]])
        }
    }

    removeEdges(vertex1,vertex2){
        if(!this.AdjecantList[vertex1]){
            return false
        }
        if(!this.AdjecantList[vertex2]){
            return false
        }
        this.AdjecantList[vertex1].delete(vertex2)
        this.AdjecantList[vertex2].delete(vertex1)
    }
    findNeighbore(vertex){
        if(!this.AdjecantList[vertex]){
            return null
        }

        return [...this.AdjecantList[vertex]]
    }

}

const graph=new Graph
graph.addVertex('A')
graph.addVertex('B')
graph.addVertex('C')
graph.addEdges('A','C')
graph.addEdges('A','B')
graph.addEdges('C','B')
// graph.removeEdges('A','C')
console.log(graph.findNeighbore('A'));

// graph.display()
// console.log(graph)