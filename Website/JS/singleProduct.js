

let a = new URLSearchParams(window.location.search)
let id = a.get("id")


function FetchingData() {

    fetch(`http://localhost:3000/products/${id}`)
        .then((res) => {
            return res.json()
        })
        .then((Res) => {
            // console.log(Res)
            document.getElementById("box").innerHTML = view(Res)
            document.getElementById("CartBtn").addEventListener("click",()=>{
                fetch(`http://localhost:3000/cart`,{
                      method : "POST",
                      headers : {
                         'Content-Type' : "application/json"
                      },
                      body : JSON.stringify(Res)
                })
                .then((Res)=>{
                    return Res.json()
                })
                .then((Res)=>{
                    alert("Data added succesfully")
                })
                .catch((err)=>{
                    console.log(err)
                })
            })
        })
        .catch((err) => {
            console.log(err)
        })
}


function view(arr){
//    return  arr.map((el)=>{
        return `
              <div id="card">
                  <div>
                     <img src="${arr.image}" alt="${arr.title}" title="${arr.id}" width="350px"/>
                  </div>
                  <div>
                     <p>${arr.title} - ₹ ${arr.price}</p>
                     <button id="CartBtn">Add to Cart</button>
                  </div>
             </div>
        `
    // }).join("")

}



FetchingData()