import './App.css';
import NavBar from "./components/NavBar/NavBar";
import ItemListContainer from './components/ItemListContainer';
import ItemDetailContainer from './components/ItemDetailContainer';
import Cart from './components/Cart/Cart';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { CartProvider } from "./store/cartContext";

function App() {
  return (
    <>
    <main>
      <BrowserRouter>
       <CartProvider>
          <NavBar/>
          <Routes>
            <Route path="/" element={<ItemListContainer/>}/>
            <Route path="/detalle/:id" element={<ItemDetailContainer/>}/>
            <Route path="/category/:idCategory" element={<ItemListContainer/>}/>
            <Route path="/carrito" element={<Cart/>}/>
          </Routes>
          </CartProvider>
      </BrowserRouter>
    </main>
    </>
  );
}

export default App;
