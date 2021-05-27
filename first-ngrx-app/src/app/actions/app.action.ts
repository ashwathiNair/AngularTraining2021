import {createAction, props} from '@ngrx/store'
import {Product} from './../models/app.product.model'


export const getProducts=createAction(
    '[Product] Get Products'
)

export const getProductsSuccess=createAction(
    '[Product] Get Product Success', props<{products:Product[]}>()
);

export const postProduct = createAction(
    '[Product] Post Product',
    props<{payload:Product}>()
);

export const postProductSuccess = createAction(
    '[Product] Post Product Success',
    props<{payload:Product}>() 
)

