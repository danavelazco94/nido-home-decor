import { FaShoppingCart } from "react-icons/fa";
import "./CartWidget.css"

const CartWidget = () => {
  return (
    <div className="cart-widget">
        <FaShoppingCart className="cart-widget-icon"/>
        <span className="cart-widget-counter">0</span>
    </div>
  )
}

export default CartWidget