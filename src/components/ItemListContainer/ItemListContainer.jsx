import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import "./ItemListContainer.css";
import { getProducts } from "../../mocks/asyncMock";
import ItemList from "../ItemList/ItemList";

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
  let filteredItems;
  let title;
  let content;

  useEffect(() => {
    const fetchProducts = async () => {
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
  }, []);

  if (type) {
    filteredItems = items.filter(
      (product) => product.category === categoryName
    );
  } else {
    filteredItems = items;
  }

  if (type) {
    if (categoryName) {
      title = categoryName;
    } else {
      title = "Categoría no encontrada";
    }
  } else {
    title = greeting;
  }

  if (loading) return <p>Cargando productos...</p>;

  if (error) return <p>{error}</p>;

  if (type && !categoryName) {
    return <p>Categoría no encontrada.</p>;
  }

  if (filteredItems.length > 0) {
    content = <ItemList items={filteredItems} />;
  } else {
    content = <p>No hay productos en esta categoría.</p>;
  }

  return (
    <section className="item-list-container">
      <h1>{title}</h1>
      {content}
    </section>
  );
};

export default ItemListContainer;
