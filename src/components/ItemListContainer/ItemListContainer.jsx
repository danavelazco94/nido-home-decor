import { useEffect, useState } from "react";
import "./ItemListContainer.css";
import { getProducts } from "../../mocks/asyncMock";
import ItemList from "../ItemList/ItemList";

const ItemListContainer = ({ greeting }) => {
  const [items, setItems] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const products = await getProducts();
        setItems(products);
      } catch (error) {
        console.error("Error al cargar los productos:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchProducts();
  }, []);

  if (loading) return <p>Cargando productos...</p>;

  return (
    <section className="item-list-container">
      <h1>{greeting}</h1>
      <ItemList items={items} />
    </section>
  );
};

export default ItemListContainer;