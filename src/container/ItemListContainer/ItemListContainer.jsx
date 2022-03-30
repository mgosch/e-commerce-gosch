import React, { useEffect, useState } from 'react';
import './styles.css';
import Typography from '@material-ui/core/Typography';
import ItemList from '../../components/ItemList';
// import { Loop } from '@material-ui/icons';
import { useParams } from 'react-router-dom';
// import ItemCount from '../../components/ItemCount';

const ItemListContainer = ({ greeting }) => {

  const [productos, setProductos] = useState([]);
  const { id } = useParams();

  // const onAdd = (nombre, count) => {
  //   console.log(nombre, count);
  // }

  useEffect(() => {
    //IIFE
    (async () => {
      const obtenerProductos = new Promise((acc) => {
        setTimeout(() => {
          // acc(fetch('/data.json'))
          acc(fetch('https://rickandmortyapi.com/api/character/'))
        }, 2000)
      })

      try {
        const response = await obtenerProductos;
        const data = await response.json();
        const personajes = data.results;
        if (!id) {
          setProductos(personajes);
        } else {
          const personajesFiltrados = personajes.filter(personajes => personajes.species === id);
          setProductos(personajesFiltrados);
        }
      } catch (error) {
        console.log(error)
      }
    })()
  }, [id])

  return (
    <>
      <Typography className='Bienvenido'>
        {greeting}
      </Typography>
      {/* {(productos.length === 0) ?
        <div className='Loop'>
          <Loop></Loop>
        </div> :
        <ItemList productos={productos} />
      } */}
      <ItemList productos={productos} />
      {/* <div className='Items'>
        <ItemCount stock={10} onAdd={onAdd} nombre={'Remeras'} />
      </div> */}
    </>
  )
}

export default ItemListContainer;