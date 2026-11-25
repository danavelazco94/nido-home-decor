import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { CartProvider } from "./context/CartProvider";
import MainLayout from "./layouts/MainLayout";
import ItemListContainer from "./components/ItemListContainer/ItemListContainer";
import ItemDetailContainer from "./components/ItemDetailContainer/ItemDetailContainer";
import Cart from "./components/Cart/Cart";
import Error from "./components/Error";

function App() {
  return (
    <BrowserRouter>
      <CartProvider>
        <Routes>
          <Route path="/" element={<MainLayout />}>
            <Route
              index
              element={
                <ItemListContainer greeting="Encontrá esos detalles que hacen hogar" />
              }
            />
            <Route
              path="category/:type"
              element={<ItemListContainer />}
            />
            <Route
              path="item/:id"
              element={<ItemDetailContainer />}
            />
            <Route path="cart" element={<Cart />} />
            <Route path="error" element={<Error />} />
            <Route path="*" element={<Error />} />
          </Route>
        </Routes>
      </CartProvider>
    </BrowserRouter>
  );
}

export default App;