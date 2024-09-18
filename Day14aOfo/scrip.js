function fun(){

let data = [
    {
        person : "Mahatama Ghandi",
        quote : "A man products of his Thoughts"
    },
    {
        person : "Albert Einstein",
        quote : "If the facts dont fit the theory change the fact"
    },
    {
        quote : "Give me Blood, I will give you freedom",
        person : "Shubhas Chandra bose"
    },
    {
        quote : "Don't Waste time!!",
        person : "Milind Parak"
    },
    {
        person : "Priyang",
        quote : "Sometime somethings never change we must change ourselves..."
    },
    {
        person : "Tejas",
        quote : "Old is Gold...."
    }
]


let val = Math.floor(Math.random()*data.length)
document.getElementById("box").innerHTML = `<h1>${data[val].quote}</h1> <p>--${data[val].person}</p>`
console.log(data[val])
}

fun()