import { Component, OnInit } from '@angular/core';
import {Product} from './../../models/app.product.model'
import { Store,select } from "@ngrx/store";
import { IAppState } from "./../../state/app.state";
import { ProductActions } from "./../../actions/index";
import { selectProductsList } from "./../../selectors/app.product.selector";

@Component({
    selector: 'app-productslist-component',
    templateUrl: './app.productslist.view.html'
})

export class ProductsListComponent implements OnInit {
    product:Product;
    columnHeaders:Array<string>;
    products$= this.store.pipe(select(selectProductsList));
    constructor(private store: Store<IAppState>) { 
        this.product = new Product();
        this.columnHeaders = new Array<string>();
    }

    ngOnInit() {

        this.columnHeaders = Object.keys(this.product);
        this.store.dispatch(ProductActions.getProducts());
     }
}