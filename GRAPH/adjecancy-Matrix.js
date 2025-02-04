//       ADJECANCY - MATRIX

// # an adjecancy matrix is 2d arrayof size V * V , where V is number of vertices in the graph
// # each column and row represanted a VERTEX
// # if the Value of an element says , MATRIX[i][j] is 1 , 
//     it represent there is an edge connecting vertex i and vertex j

        //    B            
        //  /   \ 
        // A     C

        // |   A |  B |  C   
        // |A  0 |  1 |  0
        // |B  1 |  0 |  1
        // |C  0 |  1 |  0

 const adjecancyMatrix=[
    [ 0 ,  1 ,  0],
    [ 1 ,  0 ,  1],
    [ 0 ,  1 ,  0]
 ]       

 console.log(adjecancyMatrix[0][0])// A has no connection with itsef for 0
 console.log(adjecancyMatrix[1][2]) // B has connection with A and C for 1   





