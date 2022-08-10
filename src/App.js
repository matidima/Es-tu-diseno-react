import './App.css';
import NavBar from "./components/NavBar/NavBar";
import ItemListContainer from './components/ItemListContainer';
/* import ItemCount from './components/ItemCount'; */
import ItemDetailContainer from './components/ItemDetailContainer';

function App() {
  return (
    <>
    <NavBar/>
    <main>
      <ItemListContainer />
      <ItemDetailContainer greeting="Item Detail Container"/>
      {/* <ItemCount initial={1} stock={8}/> */}
    </main>
    </>
  );
}

export default App;
