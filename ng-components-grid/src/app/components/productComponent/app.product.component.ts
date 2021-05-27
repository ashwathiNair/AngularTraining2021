import {Product} from './../../models/app.product.model';
import {ProductLogic} from './../../models/app.product.logic';
import {Component, OnInit} from '@angular/core';

@Component({
    selector : 'app-product-component',
    templateUrl : './app.product.view.html'
})

export class ProductComponent implements OnInit{
    product:Product;
    products:Array<Product>;
    private logic:ProductLogic;
    columnHeaders:Array<string>;
    constructor(){
        this.product = new Product();
        this.products = new Array<Product>();
        this.logic = new ProductLogic();
        this.columnHeaders = new Array<string>();
    }

    ngOnInit():void{
        this.columnHeaders = Object.keys(this.product);
        this.products = this.logic.getProducts();
    }

    clear():void {
        this.product = new Product();
    }

    save():void{
        this.logic.saveProducts(this.product)
    }

    getSelectedProduct(p:Product):void {
        //this.product = Object.assign({},p);
    }

    delete(p:Product):void{
        this.logic.delete(p);
        this.products = this.logic.getProducts();
    }
}