
// const arr = [3, 4, 6, 1, 2, 0, 5, 7];
let n = arr.length;
let comparisons = 0; // Counter for comparisons
let swaps = 0;       // Counter for swaps

console.log("Visualizing Comparisons and Swaps:");
for (let i = 0; i < n; i++) {
    for (let j = i + 1; j < n; j++) {
        comparisons++;
        console.log(`Comparing arr[${i}] (${arr[i]}) and arr[${j}] (${arr[j]})`);
        if (arr[j] < arr[i]) {
            swaps++;
            console.log(`Swapping arr[${i}] (${arr[i]}) and arr[${j}] (${arr[j]})`);
            let temp = arr[i];
            arr[i] = arr[j];
            arr[j] = temp;
        }
    }
}

console.log("\nSorted Array:", arr);
console.log(`Total Comparisons: ${comparisons}`);
console.log(`Total Swaps: ${swaps}`);

let a=[1,2,3,4,5]
function sum(a){
    let sui=a.length
    let he=0
    for(let i=0;i<sui;i++){
        he+=i
    }
    return he
}
console.time()
console.log(sum(a))
console.timeEnd()

function sumof(a){
    let sum=a.length
    return kum=sum*(sum-1)/2
}
console.time()
console.log(sumof(a))
console.timeEnd()

let arr=[2,6,4,1,3,5]
function findsecond(arr){
let k=0,m=0
for(let i=0;i<arr.length;i++){
    if(arr[i]>k){
        m=k
        k=arr[i]  
    }else if(arr[i]>m&&arr[i]!==k){
        m=arr[i]
    }
}
return m
}
console.time('findsecond')
console.log(findsecond(arr))
console.timeEnd('findsecond')

function forsecond(arr){
    const inq=Array.from(new Set(arr))
    const rev=inq.sort((a,b)=>b-a)
    return rev[1]
}
console.time('forsecond')
console.log(forsecond(arr))
console.timeEnd('forsecond')

