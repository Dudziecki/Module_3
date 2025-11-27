const ProductsDiscount = new Map();

class Product {
    constructor(name, price) {
        this.name = name;
        this.price = price;
    }

    setDiscount(discount) {
        ProductsDiscount.set(this, discount);
    }

    getDiscount() {
        if (!ProductsDiscount.has(this)) return 0
        return ProductsDiscount.get(this);

    }

    delete() {
        ProductsDiscount.delete(this);
    }
}

let apple = new Product("Apple", 100);
const banana = new Product("Banana", 50);

apple.setDiscount(25);
banana.setDiscount(10);

console.log("Apple discount:", apple.getDiscount());
console.log("Banana discount:", banana.getDiscount());

apple.delete();
apple = null;

console.log("Есть ли banana?", ProductsDiscount.has(apple));