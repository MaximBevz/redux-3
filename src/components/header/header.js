import WishList from "../wishList/wishList";
import Cart from '../cart/cart';
import {Link} from "react-router-dom";


export default function Header() {
    return (
        <header style={{
            borderBottom: '1px solid lightgray',
            padding: '30px 40px',
            margin: '0px 20px',
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center'
        }}>
            <div>
                <Link
                    to={'/'}
                    style={{
                        textDecoration: 'none',
                        fontWeight: 'bold'
                    }}
                >Let's Shop</Link>
            </div>
            <div style={{
                display:'flex',
                width: '160px',
                justifyContent: 'space-between'
            }}>
                <WishList/>
                <Cart/>
            </div>
        </header>
    );
}