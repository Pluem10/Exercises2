class Author {
    private name:string;
    private email:string;
    

     constructor (name:string, email:string){
        this.name = name;
        this.email  = email;
    }
     public getName():string{
        return this.name;
    }
    public getEmail():string{
        return this.email;

    }
    public setEmail(email:string):void{
        this.email = email ;

    }
    public toString():string{
        return "Author [name:"+this.name+",\nEmail:"+this.email+"]";
    }
}
class Book{
    private name:string;
    private authors:Author[];
    private price:number;
    private qty:number = 0 ;
    constructor(name:string, authors:Author[],price:number,qty:number){
        this.name = name;
        this.authors = authors;
        this.price = price;
        this.qty= qty;
    }
    public getName():string{
        return this.name;
    
    }
    public getAuthors():Author[]{
        return this.authors;
    } 
    public getPrice():number{
        return this.price;
        
    }
    public setPrice(price:number):void{
        this.price = price ;

    }
    public getQty():number{
        return this.qty;

    }
    public setQty(qty:number):void{
        this.qty = qty ;

    }
    public toString():string{
        let details = "Book[name="+this.name+"author={";

        for(let i=0; i< this.authors.length;i++){
            details += this.authors[i].toString()+","
    
        }
        details += "},price="+this.price+", qty="+this.qty;
        return details

    }
    public getAuthorName(): string {
    let authorsNames = '';
    for (let i = 0; i < this.authors.length; i++) {
        authorsNames += this.authors[i].getName() + ", ";
    }
        return authorsNames;
    }
}
// export = {Author,Book};
export default {Author,Book};