//     ADJECANCY - MATRIX
//       B
//     /   \
//    A     B

// representation
const adjecancyList={
    'A':['B'],
    'B':['A','B'],
    'C':['b']
}
// console.log(adjecancyList['A']) //[ 'B' ]
//  --  implemetation --
// create a class , and intialise an object in constructor
// then create a function for add vertex (value),
    // make a condition , insert value to the object , the key does not present there for avoind inserting duplicate
    // if not create field  in graph, and add a set for avis adding duplicate edges


class Graph{
    constructor(){
        this.AdjacencyList={}
    }
    addVertex(value){
      if(!this.AdjacencyList[value]){
           //  AdjecaneList{'A':set{}} at initial time
            this.AdjacencyList[value]= new Set()
         }
    }

    addEdge(vertex1,vertex2){
      if(!this.AdjacencyList[vertex1]){
        this.addVertex(vertex1)
      }
      if(!this.AdjacencyList[vertex2]){
        this.addVertex(vertex2)
      }
     
      this.AdjacencyList[vertex1].add(vertex2)
      this.AdjacencyList[vertex2].add(vertex1)

    }

    display(){
        for(let vertex in this.AdjacencyList){
            console.log(vertex,'->',[...this.AdjacencyList[vertex]].join(','));
            
        }
    }

    hasEdges(vertex1,vertex2){
      return (this.AdjacencyList[vertex1].has(vertex2)&&this.AdjacencyList[vertex2].has(vertex1))
    }

    removeEdges(verterx1,vertex2){
      this.AdjacencyList[verterx1].delete(vertex2)
      this.AdjacencyList[vertex2].delete(verterx1)
    }

    deleteVertex(value){
      if(!this.AdjacencyList[value]) return false

      for(let vertex of this.AdjacencyList[value]){
        this.removeEdges(vertex,value) 
      }
      delete this.AdjacencyList[value]
    }
    
    BFS(graph,start){
      let queue=[start]
      let visted=new Set()
      let result=[]
      visted.add(start)
      while (queue.length) {
        let current=queue.shift()
       result.push(current)
        for(let negbore of graph[current]){
             if(!visted.has(negbore)){
              queue.push(negbore)
              visted.add(negbore)
             }
             
        }

      }
      console.log(result.join('->'));
      
    }
    

}

const grapf=new Graph
grapf.addVertex('A')
grapf.addVertex('B')
grapf.addVertex('C')
grapf.addEdge('A','B')
grapf.addEdge('B','C')
grapf.addEdge('B','D')
grapf.addEdge('A','D')
grapf.addEdge('C','F')
// grapf.deleteVertex('B')
// grapf.removeEdges('B','C')
// console.log( grapf.hasEdges('B','C'));

// grapf.display()
grapf.BFS(grapf.AdjacencyList,'A')
// console.log(grapf.AdjacencyList)
// console.log(grapf);
