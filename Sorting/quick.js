function quick(arr){

    if(arr.length<2){
        return arr
    }
    let pivot=arr[arr.length-1]
    let left=[]
    let right=[]
    for(let i=0;i<arr.length-1;i++){
      if(pivot>arr[i]){

          left.push(arr[i])
      }else{
        right.push(arr[i])
      }
    }

    return [...quick(left),pivot,...quick(right)]
}
let arr=[5,6,3,2,7,1,8,4]
console.log(quick(arr));
