import { useContext } from "react";
import { Link } from "react-router-dom";
import { CartContext } from "../../context/CartContext";
import { FaShoppingCart } from "react-icons/fa";
import "./CartWidget.css";

const CartWidget = () => {
    const { totalItems } = useContext(CartContext);

    return (
        <Link to="/cart" className="cart-widget">
            <FaShoppingCart className="cart-widget-icon" />
            <span className="cart-widget-counter">{totalItems}</span>
        </Link>
    );
};

export default CartWidget;