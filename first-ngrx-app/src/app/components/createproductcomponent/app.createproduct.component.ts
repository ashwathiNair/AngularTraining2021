import { Component, OnInit } from '@angular/core';
import { Categories, Manufacturers } from 'src/app/models/app.constants';
import { Product } from 'src/app/models/app.product.model';
import { Store,select } from "@ngrx/store";
import { IAppState } from "./../../state/app.state";
import { ProductActions } from "./../../actions/index";
import { Router } from "@angular/router";

@Component({
    selector: 'app-createproduct-component',
    templateUrl: './app.createproduct.view.html'
})

export class CreateProductComponent implements OnInit {
    product:Product;
    categories=Categories;
    manufacturers=Manufacturers;
    constructor(private store:Store<IAppState>, private router:Router) {

        this.product = new Product();
     }

    ngOnInit() { }

    save():void{
        this.store.dispatch(ProductActions.postProduct({payload:this.product}));
        setTimeout(()=>{this.router.navigate([''])}, 4000);
    }
    

    clear():void{
        this.product = new Product();
    }
}