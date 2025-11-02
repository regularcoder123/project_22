class Car{
    constructor(type,color,brand,modelYear)
    {
        this.type = type
        this.color = color
        this.brand = brand
        this.modelYear = modelYear

    }
    old(){
        var date = new Date().getFullYear()
        var modelAge = date - this.modelYear
        return modelAge
    }

    

}
let car1 = new Car('Sports','Green','Lamborghini',2009)
console.log('Your Car is ' + car1.old() + ' years old!')
