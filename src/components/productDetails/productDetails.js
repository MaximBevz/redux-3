import {useParams} from "react-router";
import {useEffect} from "react";
import {fetchSingleProduct, removeSelectedProducts} from "../../redux";
import {useDispatch, useSelector} from "react-redux";
import './productDetails.css';
import BtnGroup from "../btn-group/btnGroup";

export default function ProductDetails() {
    const {productId} = useParams();

    const {singleProduct, isProductsLoading} = useSelector(({products}) => products)
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(fetchSingleProduct(productId));
        return () => {
            dispatch(removeSelectedProducts());
        }
    }, [productId]);

    if(isProductsLoading) {
        return <h2>Loading...</h2>
    }

    return (
        singleProduct !== null ? (
        <div className='product-details'>
            <div>
                <img
                    className='product-details-img'
                    src={singleProduct.image}
                    alt={'clothes'}
                />
            </div>
            <div className='product-details-info'>
                <h3 className='product-details-title'>{singleProduct.title}</h3>
                <p className='product-details-text'>{singleProduct.description}</p>
                <h5 className='product-details-category'>{singleProduct.category}</h5>
                <span className='product-details-price'>{singleProduct.price} $</span>
                <BtnGroup productId={singleProduct.id}/>
            </div>
        </div>
        ) : ''
    );
}