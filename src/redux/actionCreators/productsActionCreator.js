import {
    ADD_TO_CART,
    ADD_TO_WISHLIST, REMOVE_FROM_CART,
    REMOVE_FROM_WISHLIST,
    RESET_PRODUCTS_LOADING,
    SET_PRODUCTS,
    SET_PRODUCTS_LOADING,
    SELECTED_PRODUCT
} from "../actionTypes";

export const fetchProducts = () => async (dispatch) => {
    try {
        dispatch(setProductsLoading());

        const response = await fetch('https://fakestoreapi.com/products');
        const products = await response.json();

        dispatch(setProducts(products));
    } catch(e) {
        console.log(e);
    } finally {
        dispatch(resetProductsLoading());
    }
}

export const fetchSingleProduct = (id) => async (dispatch) => {
    try {
        dispatch(setProductsLoading());

        const response = await fetch(`https://fakestoreapi.com/products/${id}`);
        const product = await response.json();

        dispatch(selectedProduct(product));
    } catch(e) {
        console.log(e);
    } finally {
        dispatch(resetProductsLoading());
    }
}

export const setProducts = (payload) => ({type: SET_PRODUCTS, payload});
export const setProductsLoading = () => ({type: SET_PRODUCTS_LOADING});
export const resetProductsLoading = () => ({type: RESET_PRODUCTS_LOADING});
export const addToWishList = (payload) => ({type: ADD_TO_WISHLIST, payload});
export const removeFromWishList = (payload) => ({type: REMOVE_FROM_WISHLIST, payload});
export const addToCart = (payload) => ({type: ADD_TO_CART, payload});
export const removeFromCart = (payload) => ({type: REMOVE_FROM_CART, payload});
export const selectedProduct = (payload) => ({type: SELECTED_PRODUCT, payload});