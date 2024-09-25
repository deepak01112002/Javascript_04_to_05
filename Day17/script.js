// trycatch 




try{
    function divide(a,b){
        if(b == 0){
            throw new ReferenceError("dont divide by 0")
        }
        return a / b
    }
    divide(4,1)
}catch(error){
    console.log( "sdfgasf" + error)
}