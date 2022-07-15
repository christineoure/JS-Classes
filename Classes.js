class KioskCalc{
    constructor(fruit, quantity){
        this.fruit = fruit
        this.quantity = quantity
        this.fruitPriceList = {"orange":30, "mango":15, "Avocado":40};
        this.getTotalCost = function(){
            return`${this.quantity} ${this.fruit} for KES ${this.quantity*this.fruitPriceList[this.fruit]}.00`
        }
    }
}
var kioskCalc = new KioskCalc("orange",2)
console.log(kioskCalc.getTotalCost())
