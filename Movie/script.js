

document.querySelector("input").addEventListener("input",()=>{
    let val = document.querySelector("input").value;
    // console.log(val)
    fetchData(val)
})


function fetchData(val="spider"){
   fetch(`https://www.omdbapi.com/?apikey=987608cc&s=${val}`)
   .then((res)=>res.json())
   .then((Res)=>{
      console.log(Res)
      if(Res.Response == 'False'){
        document.getElementById("box").innerHTML = `<h1>No movie Found !!!</h1>`
      }else{
        document.getElementById("box").innerHTML = view(Res.Search)
      }
      
   })
   .catch((Err)=>console.log(Err))
}

function view(arr){
    return arr.map((el)=>{
        return `<div>
            <div>
                <img src="${el.Poster}" alt="">
            </div>
            <div>
                <p>${el.Title}</p>
            </div>
        </div>`
     }).join("")
}

fetchData()