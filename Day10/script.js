//  5  
// 2 3 5 7 11 13


function isPrime(num){
   let count = 0;
   for(let x=1; x<=num; x++){
      if(num % x == 0){
        count++
      }
   }
   return count == 2
}

let a = 1
let b = 0

while(a<=5){
    if(isPrime(b)){
        console.log(b)
        a++
    }
    b++
}