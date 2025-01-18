function findElement(arr, t) {
   let left = 0
   let right = arr.length
   while(left<=right){
    let mid=Math.floor((left+right)/2)
    if(arr[mid]===t){
        return mid
    }else if(arr[mid]>t){
        right=mid-1
    }else{
        left=mid+1
    }
   }
   return -1
}

let arr = [1, 2, 4, 5, 6, 7, 8, 9];
console.log(findElement(arr, 4)); 
