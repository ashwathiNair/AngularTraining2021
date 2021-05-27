import {Product} from './app.product.model'

export class ProductLogic{
    private product:Product;
    private products:Array<Product>;
    constructor(){
        this.products = new Array<Product>();
        this.product = new Product();
        this.product.Id = '123';
        this.product.Name = 'Product1';
        this.product.Description = 'first product';
        this.product.Category = 'prodCategory1';
        this.product.Price = 1200;
        this.products.push(this.product);
    }

    delete(p:Product):void{
        this.products = this.products.filter(function(srcProduct:Product){
            return srcProduct.Id != p.Id;
        });
    }

    getProducts():Array<Product>{
        return this.products;
    }

    saveProducts(p:Product):Array<Product>{
        this.products.push(Object.assign({},p));
        return this.products;
    }

}