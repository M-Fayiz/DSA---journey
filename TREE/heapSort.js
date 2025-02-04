function heapify(arr,n,i){
    let larg=i
    let left=2*i+1
    let right=2*i+2
    if(left<n&&arr[left]>arr[larg]){
        larg=left
    }
    if(right<n&&arr[right]>arr[larg]){
        larg=right
    }
console.log('check array :',arr);

    if(i!==larg){
        [arr[i],arr[larg]]=[arr[larg],arr[i]]

        heapify(arr,n,larg)
    }
}
function sorting(arr){
    let n=arr.length
    for(let i=Math.floor(n/2)-1;i>=0;i--){
        heapify(arr,n,i)
    }

    for(let i=n-1;i>0;i--){
        [arr[0],arr[i]]=[arr[i],arr[0]]

        heapify(arr,i,0)
    }
    return arr
}

const array = [12, 11, 13, 5, 6, 7];
console.log(sorting(array));