let product = JSON.parse(localStorage.getItem("products")) || [];
let editIndex = localStorage.getItem("editIndex")

if(editIndex != null){
    document.getElementById("title").value = product[editIndex].title
    document.getElementById("price").value = product[editIndex].price
    document.getElementById("img").value = product[editIndex].img
    document.getElementById("des").value = product[editIndex].des
    if(product[editIndex].gender == "men"){
        document.getElementById("men").checked = true
    }else{
        document.getElementById("women").checked = true
    }
}

document.getElementById("Form").addEventListener("submit",(e)=>{
     e.preventDefault()
     let obj = {
        title : document.getElementById("title").value,
        price : document.getElementById("price").value,
        des : document.getElementById("des").value,
        img : document.getElementById("img").value,
        gender :  document.getElementById("men").checked == true ? "men" : "Women"
     }
    product[editIndex] = obj
    localStorage.setItem("products",JSON.stringify(product))
    localStorage.removeItem("editIndex")
    window.location.href="product.html"
})