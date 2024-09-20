let buttons = document.querySelectorAll("button")

// console.log(buttons)
let str = ""
buttons.forEach((el)=>{
    el.addEventListener("click",()=>{
         
       if(el.innerText != "="){
          str+= el.innerText
          document.getElementById("value").innerText = str
       }else{
          document.getElementById("value").innerText = eval(str)
          str = ""
       }






    })
})