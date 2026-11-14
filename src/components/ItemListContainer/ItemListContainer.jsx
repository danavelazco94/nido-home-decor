import { useEffect, useState } from "react"
import "./ItemListContainer.css"
import { getProducts } from "../../mocks/asyncMock";
import ItemList from "../ItemList/ItemList";

const ItemListContainer = ({ greeting }) => {
  const [items, setItems] = useState([]);

  useEffect(() => {
    const fetchProducts = async () => {
      const products = await getProducts();
      setItems(products);
    };

    fetchProducts();
  }, []);

  return (
    <section className="item-list-container">
      <h1>{greeting}</h1>
      <ItemList items={items} />
    </section>
  )
}

export default ItemListContainer