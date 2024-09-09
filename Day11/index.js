
let str = "heLLo";
let ans = "" 
for(let x=0; x<str.length; x++){
    if(x == 0){
      ans += str[x].toUpperCase()
    }else{
        ans += str[x].toLowerCase()
    }
}
console.log(ans)