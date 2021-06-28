'use strict';

function Product(name, price) {
    this.name = name;
    this.price = price;
}

Product.prototype.make25PercentDiscount = function (price) {
    this.price = this.price * 0.75;
}

let product1 = new Product('товар', 100);
product1.make25PercentDiscount();
console.log(product1);





class Products {
    constructor(name, price) {
        this.name = name;
        this.price = price;
    }

    make25PercentDiscount (price) {
        this.price = this.price * 0.75;
    }
}

let product2 = new Products('товар', 200);
product2.make25PercentDiscount();
console.log(product2);
