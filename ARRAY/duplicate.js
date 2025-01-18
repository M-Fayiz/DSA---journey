let arr=[1,2,3,2,3,4,5,5]
function unique(arr){
    let check=new Set()
    let indx=0

    for(let i=0;i<arr.length;i++){
       if(!check.has(arr[i])){
        check.add(arr[i])
        arr[indx]=arr[i]
        indx++
       }
    }
    arr.length=indx
    return arr
}
console.log(unique(arr))