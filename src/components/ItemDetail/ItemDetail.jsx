import { useContext, useState } from "react";
import { CartContext } from "../../context/CartContext";
import ItemCount from "../ItemCount/ItemCount";
import { Row, Col } from "react-bootstrap";
import "./ItemDetail.css";
import formatPrice from "../../utils/formatPrice";

const ItemDetail = ({ product }) => {
    const { addItem } = useContext(CartContext);
    const [message, setMessage] = useState("");

    const handleAdd = (quantity) => {
        const added = addItem(product, quantity);

        if (added) {
            setMessage("¡Producto agregado al carrito!");
        } else {
            setMessage("No hay stock suficiente para agregar esa cantidad.");
        }

        return added;
    };

    return (
        <section className="item-detail">
            <Row className="align-items-center g-5">
                <Col xs={12} md={6}>
                    <img
                        src={product.img}
                        alt={product.name}
                        className="item-detail-img"
                    />
                </Col>

                <Col xs={12} md={6}>
                    <p>{product.category}</p>
                    <h2>{product.name}</h2>
                    <h3>${formatPrice(product.price)}</h3>
                    <p>{product.description}</p>
                    <p>Stock disponible: {product.stock}</p>

                    <ItemCount
                        stock={product.stock}
                        onAdd={handleAdd}
                    />

                    {message && <p>{message}</p>}
                </Col>
            </Row>
        </section>
    );
};

export default ItemDetail;