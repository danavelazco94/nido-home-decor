import { Row, Col } from "react-bootstrap";
import Item from "../Item/Item.jsx";

const ItemList = ({ items }) => {
    return (
        <Row className="g-4 w-100">
            {items.map((product) => (
                <Col key={product.id} xs={12} sm={6} md={4}>
                    <Item product={product} />
                </Col>
            ))}
        </Row>
    );
};

export default ItemList;