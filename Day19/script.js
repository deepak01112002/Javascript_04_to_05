class Mobile{
    constructor(calling,message,logo){
        this.calling = calling,
        this.message = message,
        this.logo = logo
    }

    Details(){
        console.log(`Mobile Consist calling - ${this.calling} messaging - ${this.message} and logo = ${this.logo} ${this.camera}`)
    }
}

// function Mobile(calling,message,logo){
//     this.calling = calling,
//     this.message = message,
//     this.logo = logo
// }


// Mobile.prototype.Details = function(){
//     console.log(`Mobile Consist calling - ${this.calling} messaging - ${this.message} and logo = ${this.logo}`)
// }


// function Array(){

// }

// Array.prototype.forEach = function (){

// }

class Smartphone extends Mobile {
    constructor(calling,message,logo,camera,musicSystem){
        super(calling,message,logo)
        this.camera = camera,
        this.musicSystem = musicSystem
    }

    Details(){
        console.log(`Mobile Consist calling - ${this.calling} messaging - ${this.message} and logo `)
    }

}


// class Smartphone2 extends M{

// }

let firstMobile = new Smartphone(true,true,"apple")
console.log(firstMobile.Det())