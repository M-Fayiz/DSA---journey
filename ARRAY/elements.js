let arr=[10,4,23,65,8,23,43,65,34,65,65]
function find(arr){
    arr.sort((a,b)=>b-a)
    for(let i=1;i<arr.length;i++){
        if(arr[i]!==arr[0]){
            return arr[i]
        }
    }
    return -1
}
// console.time('find')
// console.log(find(arr))
// console.timeEnd('find');


function secondLargest(arr){
    let larg=0
    let second=0
    for(let i=0;i<arr.length;i++){
        if(arr[i]>larg){
            second=larg
            larg=arr[1]
        }else if(arr[i]>second&&arr[i]!==larg){
            second=arr[i]
        }
    }
    return second
}
// console.time('second')
// console.log(secondLargest(arr))
// console.timeEnd('second');

let array=[16, 17, 4, 3, 5, 2,6]

function findLeader(arr){
  let n=arr.length
    let max=arr[n-1]
    let result=[]
     result.push(max)
    for(let i=n-1;i>=0;i--){
        if(arr[i]>max){
            max=arr[i]
            result.push(max)
        }
    }
   result.reverse()
   return result
}
// console.log(findLeader(array));

let sort=[13, 21, 45, 88, 89, 90]
// function checkSort(arr){
//     let n=arr.length
//     for(let i=0;i<n;i++){
//       if(arr[i]>arr[i+1]){
//         return false
//         break 
//       }
//     }
//     return true
// }
// console.log(checkSort(sort));

// function isSort(arr,n){
//     if (n==0||n==1){
//         return true
//     }
//     return arr[n-1]>=arr[n-2]&&isSort(arr,n-1)
// }
// console.log(isSort(sort,sort.length));

let a=[9,2,3,5,6]
let b=[6,5,7,8,9]

function diff(a,b){
    let check=new Set(a)
    let seen=new Set(b)
    let result=[]
    for(let i of b){
        if(!check.has(i)){
            result.push(i)
        }
    }
    return result
}

console.log(diff(a,b));
