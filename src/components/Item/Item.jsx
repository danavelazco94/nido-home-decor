import { Card, Button } from "react-bootstrap";

const Item = ({ product }) => {
  return (
    <Card className="h-100 shadow-sm border-0">
      <Card.Img
        variant="top"
        src={product.img}
        alt={product.name}
        style={{ height: "240px", objectFit: "cover" }}
      />

      <Card.Body className="d-flex flex-column">
        <Card.Title>{product.name}</Card.Title>

        <Card.Text className="text-muted">
          {product.description}
        </Card.Text>

        <Card.Text className="fw-bold mt-auto">
          ${product.price}
        </Card.Text>

        <Button variant="dark" className="mt-2">
          Ver detalle
        </Button>
      </Card.Body>
    </Card>
  );
};

export default Item;