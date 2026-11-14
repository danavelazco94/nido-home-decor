import { Row, Col } from "react-bootstrap";
import Item from "../Item/Item.jsx";

const ItemList = ({ items }) => {
    return (
        <Row className="g-4">
            {items.map((product) => (
                <Col key={product.id} md={4}>
                    <Item product={product} />
                </Col>
            ))}
        </Row>
    );
};

export default ItemList;