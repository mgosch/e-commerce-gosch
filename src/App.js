import './App.css';
import NavBar from './components/NavBar/NavBar';
import ItemDetailContainer from './container/ItemDetailContainer/ItemDetailContainer';
// import ItemListContainer from './container/ItemListContainer/ItemListContainer';

function App() {

  return (
    <div>
      <NavBar />
      {/* <ItemListContainer greeting= 'Bienvenidos a E-Commerce Gosch'/> */}
      <ItemDetailContainer></ItemDetailContainer>
    </div>
  );
}

export default App;
