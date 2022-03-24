import { Button } from '@material-ui/core';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import { AddCircle, RemoveCircle } from '@material-ui/icons';
import React from 'react';
import './styles.css';

const ItemCount = ({ stock, onAdd, nombre }) => {
  const [count, setCount] = React.useState(1);

  const handleCount = (parametro) => {
    if (parametro === 'add' && count < stock) {
      setCount(count + 1);
    }

    if (parametro === 'remove' && count > 1) {
      setCount(count - 1);
    }
  }

  return (
    <>
      <Card style={{ width: 275 }}>
        <CardContent className='Card'>
          <Typography className='Producto'>
            {nombre}
          </Typography>
          <div className="Centrado">
            <IconButton onClick={() => handleCount('remove')}>
              < RemoveCircle />
            </IconButton>
            <Typography className='Number'>
              {count}
            </Typography>
            <IconButton onClick={() => handleCount('add')}>
              < AddCircle />
            </IconButton>
          </div>
          <Button variant="outlined" onClick={() => onAdd(nombre, count)}>
            Agregar al carrito
          </Button>
        </CardContent>
      </Card>
    </>

  )
}

export default ItemCount;