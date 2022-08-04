import './App.css';
import NavBar from "./components/NavBar/NavBar";
import ItemListContainer from './components/ItemListContainer';
import ItemCount from './components/ItemCount';

function App() {
  return (
    <>
    <NavBar/>
    <main>
      <ItemListContainer greeting="Productos Destacados"/>
      <ItemCount initial={1} stock={8}/>
    </main>
    </>
  );
}

export default App;
