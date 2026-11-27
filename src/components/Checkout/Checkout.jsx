import { useContext, useState } from "react";
import { Link } from "react-router-dom";
import { CartContext } from "../../context/CartContext";
import { addDoc, collection, serverTimestamp } from "firebase/firestore";
import { db } from "../../firebase/config";
import "./Checkout.css";
import formatPrice from "../../utils/formatPrice";
import { AuthContext } from "../../context/AuthContext";

const Checkout = () => {
    const [secondMail, setSecondMail] = useState("");
    const [user, setUser] = useState({});
    const [orderId, setOrderId] = useState("");
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);

    const { cart, clear } = useContext(CartContext);
    const { user: authUser } = useContext(AuthContext);

    const total = cart.reduce(
        (acc, product) => acc + product.price * product.quantity,
        0
    );

    const userData = (e) => {
        setUser({
            ...user,
            [e.target.name]: e.target.value,
        });
    };

    const finalizarCompra = (e) => {
        e.preventDefault();

        if (
            !user.name ||
            !user.lastname ||
            !user.address ||
            !user.email ||
            !secondMail
        ) {
            setError("Por favor, completá todos los campos.");

        } else if (user.email !== secondMail) {
            setError("Los correos electrónicos no coinciden.");

        } else if (user.email !== authUser.email) {
            setError("El correo debe coincidir con el de tu cuenta.");

        } else {
            setError(null);
            setLoading(true);

            const order = {
                usuario: {
                    uid: authUser.uid,
                    email: authUser.email,
                },
                comprador: user,
                compra: cart,
                total: total,
                fecha: serverTimestamp(),
            };

            const orderColl = collection(db, "orders");

            addDoc(orderColl, order)
                .then((res) => {
                    setOrderId(res.id);
                    clear();
                })
                .catch((err) => {
                    console.error("Error al registrar la compra:", err);
                    setError("No se pudo registrar la compra. Intentá nuevamente.");
                })
                .finally(() => setLoading(false));
        }
    };

    if (!cart.length && !orderId) {
        return (
            <section className="checkout-empty">
                <h2>Tu carrito está vacío</h2>
                <Link to="/">Volver a la tienda</Link>
            </section>
        );
    }

    return (
        <section className="checkout">
            {orderId ? (
                <div className="checkout-success">
                    <h1>¡Muchas gracias por tu compra!</h1>
                    <p>Tu orden {orderId} se generó correctamente.</p>
                    <Link to="/">Volver al inicio</Link>
                </div>
            ) : (
                <div className="checkout-form-container">
                    <h1>Finalizar compra</h1>
                    <p>Completá tus datos para terminar tu compra.</p>

                    {error && <p className="checkout-error">{error}</p>}

                    <form onSubmit={finalizarCompra}>
                        <div className="checkout-field">
                            <label htmlFor="name">Nombre</label>
                            <input
                                id="name"
                                name="name"
                                type="text"
                                placeholder="Ingresá tu nombre"
                                onChange={userData}
                            />
                        </div>

                        <div className="checkout-field">
                            <label htmlFor="lastname">Apellido</label>
                            <input
                                id="lastname"
                                name="lastname"
                                type="text"
                                placeholder="Ingresá tu apellido"
                                onChange={userData}
                            />
                        </div>

                        <div className="checkout-field">
                            <label htmlFor="address">Dirección</label>
                            <input
                                id="address"
                                name="address"
                                type="text"
                                placeholder="Ingresá tu dirección"
                                onChange={userData}
                            />
                        </div>

                        <div className="checkout-field">
                            <label htmlFor="email">Correo electrónico</label>
                            <input
                                id="email"
                                name="email"
                                type="email"
                                placeholder="Ingresá tu correo"
                                onChange={userData}
                            />
                        </div>

                        <div className="checkout-field">
                            <label htmlFor="secondEmail">Repetir correo electrónico</label>
                            <input
                                id="secondEmail"
                                type="email"
                                placeholder="Repetí tu correo"
                                onChange={(e) => setSecondMail(e.target.value)}
                            />
                        </div>

                        <h3>Total: ${formatPrice(total)}</h3>

                        <button
                            type="submit"
                            className="checkout-submit"
                            disabled={loading}
                        >
                            {loading ? "Procesando compra..." : "Terminar compra"}
                        </button>
                    </form>
                </div>
            )}
        </section>
    );
};

export default Checkout;