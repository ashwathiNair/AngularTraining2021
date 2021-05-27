import { createReducer,on } from "@ngrx/store";
import { ProductActions } from "./../actions/index";
import { initialProductState } from "./../state/app.product.state";

export const reducer = createReducer(
    initialProductState,
    on(ProductActions.getProductsSuccess,(state, {products}) => ({
        ...state,products
    })),

    on(ProductActions.postProductSuccess, (state, payload)=>({
        ...state,payload
    }))
);