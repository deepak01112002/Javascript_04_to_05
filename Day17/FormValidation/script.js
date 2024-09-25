
let arr = []

document.getElementById("goToLogin").addEventListener("click",()=>{
    document.querySelector("#loginDiv").style.display = "block"
    document.querySelector("#signupDiv").style.display = "none"
})

document.getElementById("goToSignup").addEventListener("click",()=>{
    document.querySelector("#loginDiv").style.display = "none"
    document.querySelector("#signupDiv").style.display = "block"
})

document.querySelector("#signupForm").addEventListener("submit",(e)=>{
      let isValid = true;

      e.preventDefault()
       
      document.getElementById("wrongUsername").innerText = ""
      document.getElementById("wrongEmail").innerText = ""
      document.getElementById("wrongPassword").innerText = ""

      let username = document.querySelector("#username").value
      let email = document.querySelector("#emailID").value
      let password = document.querySelector("#password").value
      if(username.length == 0){
        document.getElementById("wrongUsername").innerText = "Username Manadotry"
        isValid = false
      }
      var validRegex = /[A-Za-z0-9\._%+\-]+@[A-Za-z0-9\.\-]+\.[A-Za-z]{2,}/

      if(email.length == 0 || !validRegex.test(email)){
        document.getElementById("wrongEmail").innerText = "Email Compulsory"
        isValid = false
      }
      let regex =  /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@.#$!%*?&^])[A-Za-z\d@.#$!%*?&]{8,15}$/

      console.log(regex.test(password))


      if(password.length < 8  ||  !regex.test(password)){
        document.getElementById("wrongPassword").innerText ="Password character must be 8"
        isValid = false
      }
      let obj = {
        username,
        email,
        password
      
      }
      if(isValid == true){
      arr.push(obj)
      
      }
      console.log(arr)
})


document.querySelector("#loginForm").addEventListener("submit",(e)=>{
          e.preventDefault()
          let loginEmail = document.getElementById("loginemailID").value
          let loginPass = document.getElementById("loginpassword").value
          console.log(loginEmail,loginPass)
          let flag = false;
          arr.forEach((el)=>{
              if(el.email == loginEmail && el.password == loginPass){
                 flag = true;
              }
          })
          console.log(flag)
          if(flag == true){
            alert("Login successfull")
          }else{
            alert("Login unsuccessfull")
          }
})