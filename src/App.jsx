import './App.css';
import Navbar from './components/Navbar/Navbar';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';
import ItemDetailContainer from './components/ItemDetailConteiner/ItemDetailConteiner';

function App() {
  return (
    <main>
      <Navbar />
      <ItemListContainer greeting="Encontrá esos detalles que hacen hogar"/>
      <ItemDetailContainer />
    </main>
  );
};

export default App;
