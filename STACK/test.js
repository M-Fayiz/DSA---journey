function order(arr,n){
    
    for(let i=0;i<n;i++){
        for(let j=i+1;j<n-1;j++){
            if(arr[i]>arr[j]){
                [arr[i],arr[j]]=[arr[j],arr[i]]
    
            }
        }
    }
}
let arr=[2,3,1,4,7,6]

console.log(order(arr,arr.length));
