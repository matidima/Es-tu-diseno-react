import './App.css';
import NavBar from "./components/NavBar/NavBar";
import ItemListContainer from './components/ItemListContainer';

function App() {
  return (
    <>
    <NavBar/>
    <main>
      <ItemListContainer greeting="Productos Destacados"/>
    </main>
    </>
  );
}

export default App;
