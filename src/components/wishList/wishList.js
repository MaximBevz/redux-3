import {useSelector} from "react-redux";

export default function WishList() {

    const {wishList} = useSelector(({products}) => products);

    return (
        <div>
            Wishlist: {wishList.length}
        </div>
    );
}