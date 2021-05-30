import {
    SET_PRODUCTS,
    SET_PRODUCTS_LOADING,
    RESET_PRODUCTS_LOADING,
    ADD_TO_WISHLIST,
    REMOVE_FROM_WISHLIST,
    ADD_TO_CART,
    REMOVE_FROM_CART,
    SELECTED_PRODUCT
} from '../actionTypes';

const initialState = {
    products: [],
    isProductsLoading: false,
    cart: [],
    wishList: [],
    singleProduct: null
}

export const productsReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_PRODUCTS : {
            return {
                ...state,
                products: action.payload
            };
        }
        case SET_PRODUCTS_LOADING : {
            return {
                ...state,
                isProductsLoading: true
            };
        }
        case RESET_PRODUCTS_LOADING : {
            return {
                ...state,
                isProductsLoading: false
            };
        }
        case ADD_TO_WISHLIST : {
            const {payload} = action;
            const alreadyExist = state.wishList.find(({id}) => id === payload);

            if(alreadyExist) {
                return state
            }

            const itemInProducts = state.products.find(el => el.id === payload);

            return {
                ...state,
                wishList: [...state.wishList, itemInProducts]
            };
        }
        case REMOVE_FROM_WISHLIST : {
            const {payload} = action;
            const isMissing = !state.products.find(({id})=> id === payload);

            if(isMissing) {
                return state
            }

            return {
                ...state,
                wishList: state.wishList.filter((el) => el.id !== payload)
            };
        }
        case ADD_TO_CART : {
            const {payload} = action;
            const alreadyExist = state.cart.find(({id}) => id === payload);

            if(alreadyExist) {
                return state
            }

            const itemInProducts = state.products.find(el => el.id === payload);
            return {
                ...state,
                cart: [...state.cart, itemInProducts]
            };
        }
        case REMOVE_FROM_CART : {
            const {payload} = action;
            const isMissing = !state.products.find(({id})=> id === payload);

            if(isMissing) {
                return state
            }

            return {
                ...state,
                cart: state.cart.filter((el) => el.id !== payload)
            };
        }
        case SELECTED_PRODUCT : {
            return {
                ...state,
                singleProduct: action.payload
            };
        }
        default:
            return state
    }
}