import { useContext } from "react";
import { CartContext } from "../../context/CartContext";
import ItemCount from "../ItemCount/ItemCount";
import { Row, Col } from "react-bootstrap";
import "./ItemDetail.css";

const ItemDetail = ({ product }) => {
    const { addItem } = useContext(CartContext);

    const handleAdd = (quantity) => {
        addItem(product, quantity);
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
                    <h3>${product.price}</h3>
                    <p>{product.description}</p>
                    <p>Stock disponible: {product.stock}</p>

                    <ItemCount
                        stock={product.stock}
                        onAdd={handleAdd}
                    />
                </Col>
            </Row>
        </section>
    );
};

export default ItemDetail;