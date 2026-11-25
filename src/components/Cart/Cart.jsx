import { useContext } from "react";
import { Link } from "react-router-dom";
import { CartContext } from "../../context/CartContext";
import "./Cart.css";

const Cart = () => {
  const { cart, removeItem, clear } = useContext(CartContext);

  const total = cart.reduce(
    (acc, product) => acc + product.price * product.quantity,
    0
  );

  return (
    <section className="cart">
      <h1>Mi carrito</h1>

      {cart.length === 0 ? (
        <div className="cart-empty">
          <img
            src="https://i.postimg.cc/ZKy1svDc/Carrito-vacio-hogar-acogedor.png"
            alt="Un gatito descansando en un carrito con artículos de decoración"
            className="cart-empty-img"
          />

          <Link to="/" className="cart-empty-link">
            Ver productos
          </Link>
        </div>
      ) : (
        <div>
          {cart.map((product) => (
            <div className="cart-item" key={product.id}>
              <img
                src={product.img}
                alt={product.name}
                className="cart-item-img"
              />

              <div className="cart-item-info">
                <h3>{product.name}</h3>
                <p>Precio: ${product.price}</p>
                <p>Cantidad: {product.quantity}</p>
                <p>
                  Subtotal: ${product.price * product.quantity}
                </p>
              </div>

              <button
                className="cart-item-remove"
                onClick={() => removeItem(product.id)}
              >
                Eliminar
              </button>
            </div>
          ))}

          <div className="cart-summary">
            <h2>Total de la compra: ${total}</h2>

            <div className="cart-summary-buttons">
              <button onClick={clear}>
                Vaciar carrito
              </button>

              <button onClick={() => alert("¡Gracias por tu compra!")}>
                Finalizar compra
              </button>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default Cart;