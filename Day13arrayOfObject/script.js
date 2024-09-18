let obj = {
    title : "Tshirt",
    price : 250
}
let obj2 = {
    title : "Jeans",
    price : 900
}

let products = [obj,obj2]

// for(let x=0; x<products.length; x++){
//     console.log(products[x].title)
// }
let sum = 0
products.forEach((el)=>{
    sum += el.price
})


let a = products.filter((el)=>{
    return el.price <= 300
})

let b = products.filter((el)=>{
    return el.title == "Jeans" || el.price == 900
})

let z = products.sort((a,b)=>b.price - a.price)



console.log(z)