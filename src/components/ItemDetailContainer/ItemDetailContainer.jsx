import { useEffect, useState } from "react";
import { getProductById } from "../../services/getProductById";
import ItemDetail from "../ItemDetail/ItemDetail";
import { useParams, useNavigate } from "react-router-dom";

const ItemDetailContainer = () => {
  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);
  const { id } = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    getProductById(id)
      .then((response) => {
        setProduct(response);
      })
      .catch(() => {
        navigate("/error");
      })
      .finally(() => {
        setLoading(false);
      });
  }, [id, navigate]);

  if (loading) {
    return <p>Cargando Producto...</p>;
  }

  return (
    <div>
      <ItemDetail product={product} />
    </div>
  );
};

export default ItemDetailContainer;
