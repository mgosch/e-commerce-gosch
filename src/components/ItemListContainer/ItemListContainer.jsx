import React from 'react';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import './styles.css';
import ItemCount from '../ItemCount';

const ItemListContainer = ({ greeting }) => {
  return (
    <>
      <Card style={{ width: 275 }}>
        <CardContent>
          <ItemCount />
        </CardContent>
      </Card>
    </>
  )
}

export default ItemListContainer;