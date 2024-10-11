fetch("https://fakestoreapi.com/products")
.then((res)=>{
    return res.json()
})
.then((a)=>{
    console.log(a)
   document.getElementById("box").innerHTML = view(a)
})
.catch((Err)=>{
    console.log(Err)
})


function view(arr){
  return  arr.map((el)=>{
        return `<div id="card">
                   <div>
                      <img src="${el.image}" alt="${el.title}" width="150px">
                   </div>
                   <div></div>
              </div>`
    }).join("")

}