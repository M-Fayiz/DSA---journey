// function insertion(arr){
//     for(let i=1;i<arr.length;i++){
//         let key=arr[i]
//         let j=i-1

//         while(j>=0&&arr[j]>key){
//             arr[j+1]=arr[j]
//             j-=1
//         }
//       arr[j+1]=key
//     }
// }

let arr=[5,6,3,2,7,1,8]
// insertion(arr)
// console.log(arr);

function sorting(arr){
    for(let i=1;i<arr.length;i++){
        let key=arr[i]
        let j=i-1

        while(j>=0&&arr[j]>key){
            arr[j+1]=arr[j]
          j-=1
        }
        arr[j+1]=key
    }
    return arr
}


console.log(sorting(arr));
