

let value = "rajkot"
fetch(`https://api.openweathermap.org/data/2.5/weather?q=${value}&appid=5358196ad94ffe09653937ab2313f564&units=metric`)
.then((Res)=>{
    return Res.json()
})
.then((Res)=>{
    console.log(Res)
})
.catch((err)=>{
    console.log(err)
})