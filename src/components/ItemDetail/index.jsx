import React, { useState } from 'react';
import Typography from '@material-ui/core/Typography';
import { Button } from '@material-ui/core';
import './styles.css';
import { useNavigate } from 'react-router-dom';
import ItemCount from '../../components/ItemCount';

const ItemDetail = ({ detalle }) => {
    const navigate = useNavigate();

    const [count, setCount] = useState(0);

    const onAdd = (count) => {
        setCount(count);
    }
    
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
                    {count === 0 ?
                        <div className='Items'>
                            <ItemCount stock={10} onAdd={onAdd} />
                        </div> 
                        :
                        <div className='Boton'>
                            <Button variant="outlined" onClick={() => navigate(`/cart`)}>
                                Terminar compra
                            </Button>
                        </div>
                    }
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