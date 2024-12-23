"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Author {
    constructor(name, email) {
        this.name = name;
        this.email = email;
    }
    getName() {
        return this.name;
    }
    getEmail() {
        return this.email;
    }
    setEmail(email) {
        this.email = email;
    }
    toString() {
        return "Author [name:" + this.name + ",\nEmail:" + this.email + "]";
    }
}
class Book {
    constructor(name, authors, price, qty) {
        this.qty = 0;
        this.name = name;
        this.authors = authors;
        this.price = price;
        this.qty = qty;
    }
    getName() {
        return this.name;
    }
    getAuthors() {
        return this.authors;
    }
    getPrice() {
        return this.price;
    }
    setPrice(price) {
        this.price = price;
    }
    getQty() {
        return this.qty;
    }
    setQty(qty) {
        this.qty = qty;
    }
    toString() {
        let details = "Book[name=" + this.name + "author={";
        for (let i = 0; i < this.authors.length; i++) {
            details += this.authors[i].toString() + ",";
        }
        details += "},price=" + this.price + ", qty=" + this.qty;
        return details;
    }
    getAuthorName() {
        let authorsNames = '';
        for (let i = 0; i < this.authors.length; i++) {
            authorsNames += this.authors[i].getName() + ", ";
        }
        return authorsNames;
    }
}
// export = {Author,Book};
exports.default = { Author, Book };
