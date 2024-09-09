
let number = 5;
let count = 0
for(let x=1; x<=number; x++){
    if(number % x == 0){
       count++ 
    }
}

if(count == 2){
    console.log(`${number} is a prime Number`)
}else{
    console.log(`${number} is not a prime Number`)
}
