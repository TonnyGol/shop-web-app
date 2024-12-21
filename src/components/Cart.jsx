import "./Cart.css"
import greenCart from '../resources/cartIcon.png';

const Cart = (props) => {

    const showCart = () => {

    }

    return (
        <button className="cart-button" onClick={showCart}>
            <img src={greenCart} alt="green cart" className="cart-icon" />
            <span className="badge" id="cart-count">{props.cartCount}</span>
        </button>
    )
}

export default Cart