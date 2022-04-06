import React, { useEffect, useState } from 'react';
import './styles.css';
import Typography from '@material-ui/core/Typography';
import ItemList from '../../components/ItemList';
// import { Loop } from '@material-ui/icons';
import { useParams } from 'react-router-dom';
import { collection, getDocs } from "firebase/firestore";
import { db } from '../../firebase/config';

const ItemListContainer = ({ greeting }) => {

  const [productos, setProductos] = useState([]);
  const { id } = useParams();

  useEffect(() => {
    //IIFE
    (async () => {
      // const obtenerProductos = new Promise((acc) => {
      //   setTimeout(() => {
      //     // acc(fetch('/data.json'))
      //     acc(fetch('https://rickandmortyapi.com/api/character/'))
      //   }, 2000)
      // })

      try {
        // const response = await obtenerProductos;
        // const data = await response.json();
        // console.log(data);
        // const personajes = data.results;

        const querySnapshot = await getDocs(collection(db, "productos"));
        const personajes = [];
        querySnapshot.forEach((doc) => {
          // doc.data() is never undefined for query doc snapshots
          personajes.push({id: doc.id, ...doc.data()});
          console.log(doc.id, " => ", doc.data());
        });
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
    </>
  )
}

export default ItemListContainer;