import { AddCircle, RemoveCircle } from '@material-ui/icons';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import React from 'react';
import './styles.css';
import { Button } from '@material-ui/core';

const ItemCount = () => {
  const [count, setCount] = React.useState(1);

  const handleCount = (parametro) => {
    if (parametro === 'add') {
      setCount(count + 1);
    } else {
      if (count > 1) {
        setCount(count - 1);
      }
    }
  }

  return (
    <>
      <div class="Centrado">
        <IconButton onClick={() => handleCount('remove')}>
          < RemoveCircle />
        </IconButton>
        <Typography >
          {count}
        </Typography>
        <IconButton onClick={() => handleCount('add')}>
          < AddCircle />
        </IconButton>
      </div>
      <Button variant="outlined">
        Agregar al carrito
      </Button>
    </>

  )
}

export default ItemCount;