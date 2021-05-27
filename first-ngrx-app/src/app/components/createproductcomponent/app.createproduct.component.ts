import { Component, OnInit } from '@angular/core';
import { Categories, Manufacturers } from 'src/app/models/app.constants';
import { Product } from 'src/app/models/app.product.model';

@Component({
    selector: 'app-createproduct-component',
    templateUrl: './app.createproduct.view.html'
})

export class CreateProductComponent implements OnInit {
    product:Product;
    categories=Categories;
    manufacturers=Manufacturers;
    constructor() {

        this.product = new Product();
     }

    ngOnInit() { }

    save():void{

    }

    clear():void{
        this.product = new Product();
    }
}