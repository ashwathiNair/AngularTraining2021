import { IProductState } from "./../state/app.product.state";
import { createSelector } from "@ngrx/store";
import { IAppState } from "./../state/app.state";


export const selectProducts = (state:IAppState) => state.products; 

export const selectProductsList = createSelector(
    selectProducts, 
    (state:IProductState) => state.products
);