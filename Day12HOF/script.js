

let arr = [1,2,3,4,5];

// let ans = arr.map(function (element,index){
//    if(element % 2 == 0){
//     return element * 2
//    }
// })


// let ans = arr.forEach(function (element){
//     if(element % 2 == 0){
//           return element * 2
//         }else{
//             return element
//         }
// })


// let ans = arr.filter((el,index)=>{
//    if(false){
//      return el;
//    }
// })

let ans = arr.some((el)=>el%2==0)


console.log(ans)