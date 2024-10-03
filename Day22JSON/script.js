
let arr = JSON.parse(localStorage.getItem("data")) || []


document.getElementById("Signup").addEventListener("submit",(e)=>{
           e.preventDefault()
           let obj = {
            email : document.getElementById("email").value,
            password : document.getElementById("password").value
           }
           arr.push(obj)
           console.log(arr)
           localStorage.setItem("data",JSON.stringify(arr))
})