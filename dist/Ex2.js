"use strict";
class Customer {
    constructor(id, name, discount) {
        this.id = id;
        this.name = name;
        this.discount = discount;
    }
    getName() {
        return this.name;
    }
    getDiscount() {
        return this.discount;
    }
    setDiscount(discount) {
    }
    toString() {
        return "Author [name:" + this.id + ",\ndiscount%:" + this.discount + "]";
    }
}
