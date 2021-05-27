import { Component, OnInit } from '@angular/core';
import {Product} from './../../models/app.product.model'

@Component({
    selector: 'app-productslist-component',
    templateUrl: './app.productslist.view.html'
})

export class ProductsListComponent implements OnInit {
    product:Product;
    columnHeaders:Array<string>;
    constructor() { 
        this.product = new Product();
        this.columnHeaders = new Array<string>();
    }

    ngOnInit() { }
}