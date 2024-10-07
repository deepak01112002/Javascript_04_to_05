
let arr = JSON.parse(localStorage.getItem("products")) || []
document.getElementById("Form").addEventListener("submit",(a)=>{
     a.preventDefault()
     console.log(document.getElementById("men").checked)
     let obj = {
        title : document.getElementById("title").value,
        price : document.getElementById("price").value,
        des : document.getElementById("des").value,
        img : document.getElementById("img").value,
        gender :  document.getElementById("men").checked == true ? "men" : "Women"
     }
     arr.push(obj)
     localStorage.setItem("products",JSON.stringify(arr))
})