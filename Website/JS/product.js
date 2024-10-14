

function FetchingData() {

    fetch(`http://localhost:3000/products`)
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
   return  arr.map((el)=>{
        return `
              <a href="singleProduct.html?id=${el.id}"><div id="card">
                  <div>
                     <img src="${el.image}" alt="${el.title}" title="${el.id}" width="350px"/>
                  </div>
                  <div>
                     <p>${el.title} - ₹ ${el.price}</p>
                  </div>
             </div></a>
        `
    }).join("")

}



FetchingData()