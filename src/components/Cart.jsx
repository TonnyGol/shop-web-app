import "./Cart.css"
import greenCart from '../resources/cartIcon2.png';
import { useNavigate } from "react-router-dom";


const Cart = (props) => {

    const showCart = useNavigate();

    return (
        <button className="cart-button" onClick={() => showCart('/cart')}>
            <img src={greenCart} alt="green cart" className="cart-icon" />
            <span className="badge" id="cart-count">{props.cartCount}</span>
        </button>
    )
}

export default Cart