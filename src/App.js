import './App.css';
import NavBar from './components/NavBar/NavBar';
import ItemListContainer from './container/ItemListContainer/ItemListContainer';

function App() {

  return (
    <div>
      <NavBar />
      <ItemListContainer greeting= 'Bienvenidos a E-Commerce Gosch'/>
    </div>
  );
}

export default App;
