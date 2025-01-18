function split(arr){
    if(arr.length<2){
        return arr
    }
    let mid=Math.floor(arr.length/2)
    let left=arr.slice(0,mid)
    let right=arr.slice(mid)

    return merge(split(left),split(right))
}

function merge(left,right){
    let sorted=[]

    while(left.length&&right.length){
        if(left[0]<=right[0]){
            sorted.push(left.shift())
        }else{
            sorted.push(right.shift())
        }
    }

    return sorted.concat(left).concat(right)
}

let arr=[3,6,2,8,1,5,4]
console.log(split(arr));
