import {Product} from './../models/app.product.model';

export interface IProductState{
    products:Product[];
    product:Product;
}

export const initialProductState:IProductState={
    products:[],
    product : new Product()
};