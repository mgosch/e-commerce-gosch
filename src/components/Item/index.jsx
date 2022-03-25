import React from 'react';
import { Grid, Button, Card } from '@material-ui/core';
import Typography from '@material-ui/core/Typography';
import './styles.css';

const Item = ({ item }) => {
    return (
        <Grid item xs={2} sm={4} md={4} key={item.index}>
            <Card>
                <Typography className='Producto'>
                    {item.title}
                </Typography>
                <div className='Image'>
                    <img style={{ minWidth: 100, maxWidth: 140  }} src={item.image} alt='' />
                </div>
                <div className='Boton'>
                    <Button variant="outlined">
                        Ver detalle
                    </Button>
                </div>
                <Typography className='Producto'>
                    Precio: ${item.price}
                </Typography>
            </Card>
        </Grid>
    )
}

export default Item