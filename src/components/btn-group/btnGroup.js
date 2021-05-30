import {addToCart, addToWishList, removeFromCart, removeFromWishList} from "../../redux";
import {useDispatch, useSelector} from "react-redux";
import './btnGroup.scss';

export default function BtnGroup({productId}) {
    const {wishList, cart} = useSelector(({products}) => products);

    const isInWishList = (wishList, id) => !!wishList.find(el => el.id === id);
    const isInCart = (cart, id) => !!cart.find(el => el.id === id);
    const dispatch = useDispatch();



    return (
        <div className='btn-group'>
            <button className={isInWishList(wishList, productId) ? 'btn btn-wish-list active-wish' : 'btn btn-wish-list'} onClick={() => {
                isInWishList(wishList, productId) ?
                    dispatch(removeFromWishList(productId)) :
                    dispatch(addToWishList(productId));
            }}>{isInWishList(wishList, productId) ? 'remove from wishlist' : 'add to wishlist'}</button>
            <button className={isInWishList(cart, productId) ? 'btn btn-cart active-cart' : 'btn btn-cart'} onClick={() => {
                isInCart(cart, productId) ?
                    dispatch(removeFromCart(productId)) :
                    dispatch(addToCart(productId));
            }}>{isInCart(cart, productId) ? 'remove from cart' : 'add to cart'}</button>
        </div>
    );
}