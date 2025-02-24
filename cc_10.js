// Task 1: Creating a Product Class

class Product {
    constructor(name, id, price, stock) { // creating the constructor for the product class
        this.name = name;
        this.id = id;
        this.price = price;
        this.stock = stock;
    };

    getDetails() {
        console.log(`Product: ${this.name}, ID: ${this.id}, Price: $${this.price}, Stock: ${this.stock}`); // logging the properties for any given object of the product class
    }

    updateStock(quantity) {
        this.stock -= quantity; // decreasing stock by the quantity of orders
    }
}

const product1 = new Product ("Laptop", 101, 1200, 10);
product1.getDetails();  // Expected output: "Product: Laptop, ID: 101, Price: $1200, Stock: 10"
product1.updateStock(3); // 3 orders are made, so we have 3 less laptops, so we are at 7
product1.getDetails(); // Expected output: "Product: Laptop, ID: 101, Price: $1200, Stock: 7"

// Task 2: Creating an order class

class Order {
    constructor(orderID, product, quantity) {
        this.orderID = orderID;
        this.product = product;
        this.quantity = quantity;
        this.product.updateStock(this.quantity); // whenever an order is created, we are reducing the stock by the quantity of the order
    }

    getOrderDetails() {
        let totalPrice = this.product.price * this.quantity;
        return `Order ID: ${this.orderID}, Product: ${this.product.name}, Quantity: ${this.quantity}, Total Price: $${totalPrice}`;
    }
}

let order1 = new Order (501, product1, 2);
console.log(order1.getOrderDetails()); // Expected output: Order ID: 501, Product: Laptop, Quantity: 2, Total Price: $2400
product1.getDetails(); // Expected output: Product: Laptop, ID: 101, Price: $1200, Stock: 5

// Task 3: Creating an Inventory Class

class Inventory {
    constructor(products, orders) {
        this.products = [];
        this.orders = [];
    }

    addProduct(product) {
        this.products.push(product)
    }

    listProducts() {
        this.products.forEach(product => product.getDetails());
    }

// Task 4:

    placeOrderID(orderID, product, quantity) {
        let order = new Order(orderID, product, quantity); // Create a new order
        this.orders.push(order); // Add the order to the orders array
    }

    listOrders() {
        this.orders.forEach(order => console.log(order.getOrderDetails()));
    }

}

let inventory = new Inventory();
inventory.addProduct(product1);
//console.log(`Inventory: ${inventory.listProducts()}`);
console.log("Inventory:")
inventory.listProducts(); // Expected output: Product: Laptop, ID: 101, Price: $1200, Stock: 5

// Task 4: Implementing Order Management

inventory.placeOrderID(601, product1, 2) // Order is placed, stock decreases
inventory.listOrders(); // lists the orders that we have placed Expected output: "Order ID: 601, Product: Laptop, Quantity: 2, Total Price: $2400"
product1.getDetails(); // Stock succesfully decreases when an order is placed!!! Expected output: "Product: Laptop, ID: 101, Price: $1200, Stock: 3"