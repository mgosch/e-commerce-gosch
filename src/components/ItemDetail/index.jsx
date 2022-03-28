import React from 'react';
import { Grid, Card } from '@material-ui/core';
import Typography from '@material-ui/core/Typography';
import './styles.css';

const ItemDetail = ({ detalle }) => {
    return (
        <Grid item xs={2} sm={4} md={4} key={detalle.index}>
            <Card>
                <Typography className='Categoria'>
                    {detalle.category}
                </Typography>
                <Typography className='Producto'>
                    {detalle.title}
                </Typography>
                <div className='Image'>
                    <img style={{ minWidth: 100, maxWidth: 140 }} src={detalle.image} alt='' />
                </div>
                <Typography className='Descripcion'>
                    {detalle.description}
                </Typography>
                <Typography className='Producto'>
                    Precio: ${detalle.price}
                </Typography>
            </Card>
        </Grid>
    )
}

export default ItemDetail