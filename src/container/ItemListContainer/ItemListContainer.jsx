import React from 'react';
import './styles.css';
import ItemCount from '../../components/ItemCount';
import Typography from '@material-ui/core/Typography';

const ItemListContainer = ({ greeting }) => {

  const onAdd = (nombre, count) => {
    console.log(nombre, count);
  }

  return (
    <>
      <Typography className='Bienvenido'>
        {greeting}
      </Typography>
      <div className='Items'>
        <ItemCount stock={10} onAdd={onAdd} nombre={'Remeras'} />
        <ItemCount stock={15} onAdd={onAdd} nombre={'Polleras'} />
        <ItemCount stock={20} onAdd={onAdd} nombre={'Pantalones'} />
      </div>
    </>
  )
}

export default ItemListContainer;