// import { Book } from "./Ex1";

const {Author,Book} = require("./Ex1");

console.log("###### EX1 #######");
const author1 = new Author("Nitiphon","664259010@webmail.npru.ac.th");
console.log(author1.toStrin());

const author2 = new Author("Nupnoey","664259009@webmail.npru.ac.th");
console.log(author2.toString());
const book1 = new Book("Basic Progeamming",[author1,author2],180,300)
console.log(book1.toString());
console.log(book1.getAuthorName());


console.log("#################");