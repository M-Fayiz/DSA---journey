function bubble(arr){
    let isSwapped
    let count=0
    for(let i=0;i<arr.length;i++){
        isSwapped =false
        for(let j=0;j<arr.length-i-1;j++){
            if(arr[j]>arr[j+1]){
                [arr[j],arr[j+1]]=[arr[j+1],arr[j]]
            }
            isSwapped=true
            count++
        
        }

        if(!isSwapped)break
    }
    return count

}
let arr=[-2,4,8,2,5,1,9,3]
// console.log(bubble(arr));


//  bubble sorting using recursion 

function sort(arr,n){
    if(n===1){
        return
    }

    let count=0

    for(let i=0;i<n-1;i++){
        if(arr[i]>arr[i+1]){
            [arr[i],arr[i+1]]=[arr[i+1],arr[i]]
            count++
        }
    }
    if(count==0){
        return
    }
    return sort(arr,n-1)
}

sort(arr,arr.length)
console.log(arr);

