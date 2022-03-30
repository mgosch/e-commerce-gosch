import React from 'react';
import { Grid, Button, Card } from '@material-ui/core';
import Typography from '@material-ui/core/Typography';
import './styles.css';
import { useNavigate } from 'react-router-dom';

const Item = ({ item }) => {
    const navigate = useNavigate();
    return (
        <Grid item xs={2} sm={4} md={4} key={item.index}>
            <Card>
                <Typography className='Producto'>
                    {item.name}
                </Typography>
                <div className='Image'>
                    <img style={{ minWidth: 100, maxWidth: 140  }} src={item.image} alt='' />
                </div>
                <div className='Boton'>
                    <Button variant="outlined" onClick={()=>navigate(`/item/${item.id}`)}>
                        Ver detalle
                    </Button>
                </div>
            </Card>
        </Grid>
    )
}

export default Item