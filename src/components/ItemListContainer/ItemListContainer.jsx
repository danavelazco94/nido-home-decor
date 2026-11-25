import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import "./ItemListContainer.css";
import { getProducts } from "../../mocks/asyncMock";
import ItemList from "../ItemList/ItemList";
import Loader from "../Loader/Loader";

const categories = {
  ceramica: "Cerámica",
  textiles: "Textiles",
  aromas: "Aromas",
  decoracion: "Decoración",
};

const ItemListContainer = ({ greeting }) => {
  const [items, setItems] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const { type } = useParams();
  const categoryName = categories[type];
  let content;


  useEffect(() => {
    const fetchProducts = async () => {
      setLoading(true);
      setError(null);

      try {
        const products = await getProducts();
        setItems(products);
      } catch (error) {
        console.error("Error al cargar los productos:", error);
        setError("No se pudieron cargar los productos. Intentá nuevamente.");
      } finally {
        setLoading(false);
      }
    };

    fetchProducts();
  }, [type]);


  const filteredItems = type
    ? items.filter((product) => product.category === categoryName)
    : items;

  const title = type
    ? categoryName || "Categoría no encontrada"
    : greeting;


  if (loading) {
    content = <Loader message="Cargando productos..." />;
  } else if (error) {
    content = <p>{error}</p>;
  } else {
    content = filteredItems.length > 0
      ? <ItemList items={filteredItems} />
      : <p>No hay productos en esta categoría.</p>;
  }

  return (
    <section className="item-list-container">
      <h1>{title}</h1>

      {type && !categoryName ? (
        <p>Categoría no encontrada.</p>
      ) : (
        content
      )}
    </section>
  );
};

export default ItemListContainer;