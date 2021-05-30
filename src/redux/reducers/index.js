import {combineReducers} from "redux";

import {productsReducer} from './productsReducer';

export const reducers = combineReducers({
    products: productsReducer
})

