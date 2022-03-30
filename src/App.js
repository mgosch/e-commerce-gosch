import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import NavBar from './components/NavBar/NavBar';
import ItemDetailContainer from './container/ItemDetailContainer/ItemDetailContainer';
import ItemListContainer from './container/ItemListContainer/ItemListContainer';


function App() {

  return (
    <BrowserRouter>
      <NavBar />
      <Routes>
        <Route path='/' element={<ItemListContainer greeting='Bienvenidos a Rick and Morty de Gosch' />} />
        <Route path='/category/:id' element={<ItemListContainer greeting='Bienvenidos a E-Commerce Gosch' />} />
        <Route path='/item/:id' element={<ItemDetailContainer></ItemDetailContainer>} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
