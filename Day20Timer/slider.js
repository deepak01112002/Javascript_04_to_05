


 let arr = [
    "https://rukminim2.flixcart.com/fk-p-flap/1600/270/image/19371d44541a02ab.jpg?q=20",
    "https://rukminim2.flixcart.com/fk-p-flap/1600/270/image/47d5fca6c7bba538.jpeg?q=20",
    "https://rukminim2.flixcart.com/fk-p-flap/1600/270/image/5448938c117980ac.jpeg?q=20",
    "https://rukminim2.flixcart.com/fk-p-flap/1600/270/image/3140ca2fbd2e4d2e.png?q=20"
 ]
 let a = 0
  let b = setInterval(()=>{
    if(a > 2){
      a = 0
    }else{
      a++
    }
    if(a == 0){
        clearInterval(b)
    }
    document.getElementById("box").innerHTML = `<img src="${arr[a]}"/>`
  },2000)

 