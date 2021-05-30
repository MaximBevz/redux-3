import {useSelector} from "react-redux";

export default function Cart() {
    const {cart} = useSelector(({products}) => products);

    return (
        <div>
            Cart: {cart.length}
        </div>
    );
}