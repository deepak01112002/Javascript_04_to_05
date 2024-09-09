// * * * * *
// * *      *
// *        *
// *       *
// * * * * *

let n  = 10
for(let x=0; x<n; x++){
    let str = ""
    for(let i=0; i<n; i++){
        if(x == 0 || x== n - 1 || i == 0 || i == n-1){
            str += "* "
        }else{
            str+="  "
        }
    }
    console.log(str)
}