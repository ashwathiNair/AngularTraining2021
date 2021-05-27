import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { HttpService } from '../services/app.http.service';
import { switchMap } from "rxjs/operators";
import { ProductActions } from '../actions';
import { of } from 'rxjs';
import { Product } from '../models/app.product.model';


@Injectable()
export class ProductEffect {

    constructor(private serv: HttpService,
        private action$:Actions) { } 

    getProducts$ = createEffect(()=> this.action$.pipe(
        ofType(ProductActions.getProducts),
        switchMap(()=> this.serv.getData()),
        switchMap((products:Product[])=>of(ProductActions.getProductsSuccess({products})))
    ));

    posProduct$ = createEffect(()=> this.action$.pipe(
        ofType(ProductActions.postProduct), 
        switchMap((param)=> this.serv.postData(param.payload)),
        switchMap((payload:Product)=>of(ProductActions.postProductSuccess({payload})))
    ));

}