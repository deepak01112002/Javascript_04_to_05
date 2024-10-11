
document.getElementById("singup").addEventListener("submit",(e)=>{
    
    e.preventDefault()
    let obj = {
        email : document.getElementById("email").value,
        password : document.getElementById("password").value 
    }
     
    fetch(`http://localhost:3000/users`,{
         method : "POST",
         headers : {
            "Content-Type" : "application/json"
         },
         body : JSON.stringify(obj)
    })
    .then((res)=>{
        return res.json()
    })
    .then((res)=>{
        console.log(res)
    })
    .catch((err)=>{
        console.log(err)
    })

})

