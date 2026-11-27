import { useEffect, useState } from "react";
import { getProductById } from "../../services/getProductById";
import ItemDetail from "../ItemDetail/ItemDetail";
import { useParams, useNavigate } from "react-router-dom";
import Loader from "../Loader/Loader";

const ItemDetailContainer = () => {
  const [productData, setProductData] = useState({
    id: null,
    product: null,
  });

  const { id } = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    let isMounted = true;

    getProductById(id)
      .then((response) => {
        if (isMounted) {
          setProductData({
            id: id,
            product: response,
          });
        }
      })
      .catch((error) => {
        console.error("Error al cargar el producto:", error);

        if (isMounted) {
          navigate("/error");
        }
      });

    return () => {
      isMounted = false;
    };
  }, [id, navigate]);

  const loading = productData.id !== id;

  if (loading) {
    return <Loader message="Cargando producto..." />;
  }

  return (
    <div>
      <ItemDetail product={productData.product} />
    </div>
  );
};

export default ItemDetailContainer;
