import React, { useEffect, useState } from 'react';
import './styles.css';
import ItemDetail from '../../components/ItemDetail';
import { useParams } from 'react-router-dom';

const ItemDetailContainer = () => {

  const [detalle, setDetalle] = useState({});
  const {id} = useParams();

  useEffect(() => {
    //IIFE
    (async () => {
      try {
        const response = await fetch(`https://rickandmortyapi.com/api/character/${id}`);
        const data = await response.json();
        setDetalle(data);
      } catch (error) {
        console.log(error)
      }
    })()
  }, [id])

  return (
    <div>
      <ItemDetail detalle={detalle}></ItemDetail>
    </div>
  )
}

export default ItemDetailContainer;