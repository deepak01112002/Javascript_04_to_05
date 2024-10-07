
let product = JSON.parse(localStorage.getItem("products")) || []

console.log(product);

document.getElementById("box").innerHTML = view()


function view(){
    return product.map((el,index)=>{
        return `<div class="box" id="card">
             <div>
                <img  src="${el.img}" alt="${el.title}" width="250px" > 
             </div>
             <div>
                <p>${el.title} - ${el.price}</p>
                 <button>Edit</button>
                 <button onclick="DeleteData(${index})">Delete</button>
             </div>
        </div>`
    }).join("")
}

function DeleteData(index){
   
}

