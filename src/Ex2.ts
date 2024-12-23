class Customer{
    private id:number;
    private name:string;
    private discount:number;

    constructor (id:number,name:string,discount:number){
        this.id = id ;
        this.name = name ;
        this.discount = discount;
    }
    public getName():string{
        return this.name;
    }
    public getDiscount():number{
      return this.discount;
    }
    public setDiscount(discount:number):void{

    }
    public toString():string{
        return "Author [name:"+this.id+",\ndiscount%:"+this.discount+"]";
    }
}
