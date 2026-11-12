import './App.css'
import Navbar from './components/Navbar/Navbar'
import ItemListContainer from './components/ItemListContainer/ItemListContainer'

function App() {
  return (
    <main>
      <Navbar />
      <ItemListContainer greeting="Encontrá esos detalles que hacen hogar"/>
    </main>
  )
}

export default App
