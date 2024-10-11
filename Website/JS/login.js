document.getElementById("singup").addEventListener("submit",(e)=>{
    
    e.preventDefault()
    
       let email = document.getElementById("email").value
       let password = document.getElementById("password").value 
   
     
    fetch(`http://localhost:3000/users?email=${email}`)
    .then((res)=>{
        return res.json()
    })
    .then((res)=>{
        if(res[0].password == password){
            alert("Login Successfull")
        }else{
            alert("Login unsuccesfull")
        }
    })
    .catch((err)=>{
        alert("Register First")
        // window.location.href = "signup.html"
    })

})
