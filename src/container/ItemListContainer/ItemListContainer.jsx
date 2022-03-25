import React, { useEffect, useState } from 'react';
import './styles.css';
import Typography from '@material-ui/core/Typography';
import ItemList from '../../components/ItemList';
// import ItemCount from '../../components/ItemCount';

const ItemListContainer = ({ greeting }) => {

  const [productos, setProductos] = useState([]);

  // const onAdd = (nombre, count) => {
  //   console.log(nombre, count);
  // }

  useEffect(() => {
    //IIFE
    (async () => {
      const obtenerProductos = new Promise((acc) => {
        setTimeout(() => {
          acc(fetch('/data.json'))
        }, 2000)
      })

      try {
        const response = await obtenerProductos;
        const data = await response.json();
        setProductos(data);
      } catch (error) {
        console.log(error)
      }
    })()
  }, [])

  return (
    <>
      <Typography className='Bienvenido'>
        {greeting}
      </Typography>
      <ItemList productos={productos} />
      {/* <div className='Items'>
      <ItemCount stock={10} onAdd={onAdd} nombre={'Remeras'} />
      </div> */}
    </>
  )
}

export default ItemListContainer;