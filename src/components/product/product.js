import {Link} from "react-router-dom";
import BtnGroup from "../btn-group/btnGroup";

import './product.css';

export default function Product({productInfo}) {

    const {title, id, image, price} = productInfo;

    const shortTittle = title.length > 20 ? title.slice(0, 19) + '...': title;

    return (
            <li className='product-list-item'>
                <h4>{shortTittle}</h4>
                <Link to={`/product/${id}`}>
                <img
                    src={image}
                    alt={'product'}
                    className='product-list-img'
                />
                </Link>
                <span className='product-list-price'>{price} $</span>
                <BtnGroup productId={id}/>
            </li>

    );
}