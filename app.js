"use strict";
class Product {
    constructor(id, name, cost) {
        this.id = id;
        this.name = name;
        this.cost = cost;
    }
}
class Delivery {
    constructor(date) {
        this.date = date;
    }
}
class HomeDelivery extends Delivery {
    constructor(date, address) {
        super(date);
        this.date = date;
        this.address = address;
    }
}
class StoreDelivery extends Delivery {
    constructor(date, storeID) {
        super(new Date());
        this.date = date;
        this.storeID = storeID;
    }
}
class Cart {
    constructor() {
        this.products = [];
    }
    addProduct(product) {
        this.products.push(product);
        console.log(this.products);
        return this.products;
    }
    removeProduct(id) {
        this.products = this.products.filter((product) => product.id !== id);
        console.log(this.products);
        return this.products;
    }
    finalCost() {
        const sum = this.products.reduce((acc, product) => acc + product.cost, 0);
        console.log(sum);
        return sum;
    }
    setDelivery(delivery) {
        this.delivery = delivery;
        console.log(this.delivery);
    }
    checkOut() {
        this.products.length > 0 && this.delivery !== undefined;
        if (this.products.length === 0) {
            throw new Error('Нет продуктов');
        }
        if (!this.delivery) {
            throw new Error('Не выбрали доставку');
        }
        return { success: true };
    }
}
const cart = new Cart();
const product1 = new Product(1, 'Печенье', 100);
const product2 = new Product(2, 'Торт', 300);
const product3 = new Product(3, 'Молоко', 500);
cart.addProduct(product1);
cart.addProduct(product2);
cart.addProduct(product3);
cart.removeProduct(2);
cart.setDelivery(new HomeDelivery(new Date(), 'Москва'));
cart.finalCost();
cart.checkOut();
