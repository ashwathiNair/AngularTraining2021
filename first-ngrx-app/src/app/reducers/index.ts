import { ActionReducerMap } from "@ngrx/store";
import {  IAppState} from "./../state/app.state";
import { reducer } from "./app.product.reducers";

export const mainReducer:ActionReducerMap<IAppState,any> =  {
    products:reducer 
};