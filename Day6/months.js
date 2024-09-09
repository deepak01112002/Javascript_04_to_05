
let val = 5;
let val2 = 10;

let operator = "-";


switch(operator){
    case "PLUS":
         console.log(val + val2)
         break;
    case "-":
         if(val2 > val){
            console.log(val2-val)
         }else{
            console.log(val - val2)
         }
    default : 
        console.log("Put correct operator + - * /")    
}


