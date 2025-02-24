// Task 1: Creating a Product Class

class Product {
    constructor(name, id, price, stock) { // creating the constructor for the product class
        this.name = name;
        this.id = id;
        this.price = price;
        this.stock = stock;
    };

    getDetails() {
        console.log(`Product: ${this.name}, ID: ${this.id}, Price: ${this.price}, Stock: ${this.stock}`); // logging the properties for any given object of the product class
    }

    updateStock(quantity) {
        this.stock -= quantity; // decreasing stock by the quantity of orders
    }
}

const product1 = new Product ("Laptop", 101, 1200, 10);
product1.getDetails();  // Expected output: "Product: Laptop, ID: 101, Price: $1200, Stock: 10"
product1.updateStock(3); // 3 orders are made, so we have 3 less laptops, so we are at 7
product1.getDetails(); // Expected output: "Product: Laptop, ID: 101, Price: $1200, Stock: 7"

