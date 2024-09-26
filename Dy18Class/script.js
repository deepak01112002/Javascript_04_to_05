

class Students{
    constructor(name,grid,institue){
        this.name =  name
        this.grid  = grid
        this.institue = institue 
    }
    FullData(a){
       return `${this.name}'s ${this.grid} in ${this.institue} institute`
    }
}


let a = new Students("deepak",2545,"Masai School")
let b = new Students("d",2545,"M")
// console.log(a.name)
// a.FullData()
console.log(a.FullData(25))
console.log(a,b)
