import React, { useEffect, useState } from 'react';
import './styles.css';
import ItemDetail from '../../components/ItemDetail';

const ItemDetailContainer = () => {

  const [detalle, setDetalle] = useState({});

  useEffect(() => {
    //IIFE
    (async () => {
      try {
        const response = await fetch('https://fakestoreapi.com/products/1');
        const data = await response.json();
        setDetalle(data);
      } catch (error) {
        console.log(error)
      }
    })()
  }, [])

  return (
    <div className="Detalle">
      <ItemDetail detalle={detalle}></ItemDetail>
    </div>
  )
}

export default ItemDetailContainer;