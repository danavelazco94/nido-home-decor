import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import "./ItemListContainer.css";
import ItemList from "../ItemList/ItemList";
import Loader from "../Loader/Loader";
import { collection, getDocs, query, where } from "firebase/firestore";
import { db } from "../../firebase/config";

const categories = {
  ceramica: "Cerámica",
  textiles: "Textiles",
  aromas: "Aromas",
  decoracion: "Decoración",
};

const ItemListContainer = ({ greeting }) => {
  const [result, setResult] = useState({
    type: null,
    items: [],
    error: null,
    loaded: false,
  });

  const { type } = useParams();
  const categoryName = categories[type];

  useEffect(() => {
    if (type && !categoryName) return;

    let isActive = true;

    const prodColl = type
      ? query(
          collection(db, "products"),
          where("category", "==", categoryName)
        )
      : collection(db, "products");

    getDocs(prodColl)
      .then((res) => {
        const list = res.docs.map((doc) => {
          return {
            id: doc.id,
            ...doc.data(),
          };
        });

        if (isActive) {
          setResult({
            type,
            items: list,
            error: null,
            loaded: true,
          });
        }
      })
      .catch((error) => {
        console.error("Error al cargar los productos:", error);

        if (isActive) {
          setResult({
            type,
            items: [],
            error: "No se pudieron cargar los productos.",
            loaded: true,
          });
        }
      });

    return () => {
      isActive = false;
    };

  }, [type, categoryName]);

  const loading = !result.loaded || result.type !== type;

  return (
    <section className="item-list-container">
      <h1>
        {type ? categoryName || "Categoría no encontrada" : greeting}
      </h1>

      {type && !categoryName ? (
        <p>Categoría no encontrada.</p>
      ) : loading ? (
        <Loader message="Cargando productos..." />
      ) : result.error ? (
        <p>{result.error}</p>
      ) : result.items.length > 0 ? (
        <ItemList items={result.items} />
      ) : (
        <p>No hay productos en esta categoría.</p>
      )}
    </section>
  );
};

export default ItemListContainer;