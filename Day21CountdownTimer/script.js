

let a  = 0
let clear;
document.getElementById("start").addEventListener("click",()=>{
   clear = setInterval(()=>{
     a++;
     document.getElementById("data").innerText = `${a}`
   },1000)
})

document.getElementById("stop").addEventListener("click",()=>{
    clearInterval(clear)
})