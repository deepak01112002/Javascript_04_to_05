


// throw
// new 



function divide(a,b){
   if(b == 0){
      throw new SyntaxError("We didn't divide any number by zero")
   }else{
    console.log(a/b)
   }
}

divide(4,2)
divide(4,0)
