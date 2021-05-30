import {useDispatch, useSelector} from "react-redux";
import {useEffect} from "react";
import {fetchProducts} from "../../redux";
import Product from "../product/product";
import './productsList.css';

export default function ProductList() {
    const {products, isProductsLoading} = useSelector(({products}) => products);

    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(fetchProducts());
    }, [])

    if(isProductsLoading) {
        return <h2>Loading...</h2>
    }
    return (
        <ul className='products-list'>
            {products.map(product => <Product key={product.id} productInfo={product}/>)}
        </ul>
    );
}
