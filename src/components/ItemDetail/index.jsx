import React, { useContext, useState } from 'react';
import Typography from '@material-ui/core/Typography';
import { Button } from '@material-ui/core';
import './styles.css';
import { useNavigate } from 'react-router-dom';
import ItemCount from '../../components/ItemCount';
import { Shop } from '../../context/ShopProvider';

const ItemDetail = ({ detalle }) => {
    const navigate = useNavigate();

    const [count, setCount] = useState(0);

    const {addCart} = useContext(Shop);

    const onAdd = (count) => {
        setCount(count);
    }

    const handleTerminate = () => {
        addCart(detalle, count);
        navigate(`/cart`);
        console.log("Terminó la compra")
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
                    <Typography className='Producto'>
                        Precio: ${detalle.price}
                    </Typography>
                    {count === 0 ?
                        <div className='Items'>
                            <ItemCount stock={detalle.stock} onAdd={onAdd} />
                        </div> 
                        :
                        <div className='Boton'>
                            <Button variant="outlined" onClick={handleTerminate}>
                                Terminar compra
                            </Button>
                        </div>
                    }
                </div>
            </div>
            <div className='Boton'>
                <Button variant="outlined" onClick={() => navigate(`/`)}>
                    Seguir navegando
                </Button>
            </div>
        </>
    )
}

export default ItemDetail