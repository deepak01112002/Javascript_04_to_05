

let a = new URLSearchParams(window.location.search)
let id = a.get("id")


function FetchingData() {

    fetch(`http://localhost:3000/products/${id}`)
        .then((res) => {
            return res.json()
        })
        .then((Res) => {
            console.log(Res)
            document.getElementById("box").innerHTML = view(Res)
        })
        .catch((err) => {
            console.log(err)
        })
}


function view(arr){
//    return  arr.map((el)=>{
        return `
              <a href="singleProduct.html?id=${arr.id}"><div id="card">
                  <div>
                     <img src="${arr.image}" alt="${arr.title}" title="${arr.id}" width="350px"/>
                  </div>
                  <div>
                     <p>${arr.title} - ₹ ${arr.price}</p>
                     <button >Add to Cart</button>
                  </div>
             </div></a>
        `
    // }).join("")

}



FetchingData()