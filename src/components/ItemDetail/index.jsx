import React from 'react';
import Typography from '@material-ui/core/Typography';
import { Button} from '@material-ui/core';
import './styles.css';
import { useNavigate } from 'react-router-dom';

const ItemDetail = ({ detalle }) => {
    const navigate = useNavigate();
    return (
        <>
            <Typography className='Name'>
                {detalle.name}
            </Typography>
            <div className='Detalle'>
                <div className='Image'>
                    <img src={detalle.image} alt='' />
                </div>
                <div>
                    <Typography className='Producto'>
                        Especie: {detalle.species}
                    </Typography>
                    <Typography className='Producto'>
                        Estado: {detalle.status}
                    </Typography>
                    <Typography className='Producto'>
                        Genero: {detalle.gender}
                    </Typography>
                </div>
            </div>
            <div className='Boton'>
                <Button variant="outlined" onClick={() => navigate(`/`)}>
                    Volver
                </Button>
            </div>
        </>
    )
}

export default ItemDetail