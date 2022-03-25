import { Grid } from '@material-ui/core';
import React from 'react';
import Item from '../Item';
import './styles.css';

const ItemList = ({productos}) => {
  return (
    <Grid container spacing={2} justifyContent="space-between">
        {productos.map(producto => {
          return <Item item={producto} key={producto.id}/>;
        })}
    </Grid>
  )
}

export default ItemList