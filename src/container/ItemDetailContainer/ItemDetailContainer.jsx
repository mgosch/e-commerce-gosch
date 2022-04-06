import React, { useEffect, useState } from 'react';
import './styles.css';
import ItemDetail from '../../components/ItemDetail';
import { useParams } from 'react-router-dom';
import { db } from '../../firebase/config';
import { doc, getDoc } from "firebase/firestore";

const ItemDetailContainer = () => {

  const [detalle, setDetalle] = useState({});
  const {id} = useParams();

  useEffect(() => {
    //IIFE
    (async () => {
      try {
        // const response = await fetch(`https://rickandmortyapi.com/api/character/${id}`);
        // const data = await response.json();
        // setDetalle(data);

        const docRef = doc(db, "productos", id);
        const docSnap = await getDoc(docRef);

        if (docSnap.exists()) {
          setDetalle({id:docSnap.id, ...docSnap.data()});
          console.log("Document data:", docSnap.data());
        } else {
          // doc.data() will be undefined in this case
          console.log("No such document!");
        }

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