import React, { useContext, useEffect, useState } from 'react'
import { Shop } from '../../context/ShopProvider';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import IconButton from '@material-ui/core/IconButton';
import { Delete } from '@material-ui/icons';
import { Button } from '@material-ui/core';
import './styles.css';
import Modal from '@material-ui/core/Modal';
import Checkout from '../Checkout';
import { CardContent, Card } from '@material-ui/core';
import Typography from '@material-ui/core/Typography';
import { useNavigate } from 'react-router-dom';

function Cart() {
  const navigate = useNavigate();
  const { cart, removeItem, clear, sumaTotal } = useContext(Shop);
  const [suma, setSuma] = useState();
  const [modal, setOpen] = useState(false);

  useEffect(() => {
    setSuma(sumaTotal())
  }, [sumaTotal])
  const handleRemove = (id) => {
    removeItem(id);
  }
  const handleClear = () => {
    clear();
  }
  const handleOpen = () => setOpen(true);
  const handleClose = () => {
    setOpen(false);
    clear();
  }
  return (
    <> {cart.length > 0 ?
      <>
        <TableContainer component={Paper}>
          <Table aria-label="simple table" className='Table'>
            <TableHead>
              <TableRow>
                <TableCell>Personaje</TableCell>
                <TableCell align="right">Especie</TableCell>
                <TableCell align="right">Estado</TableCell>
                <TableCell align="right">Cantidad</TableCell>
                <TableCell align="right">Precio</TableCell>
                <TableCell align="right">Acciones</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {cart.map((row) => (
                <TableRow
                  key={row.name}
                  sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                >
                  <TableCell component="th" scope="row">
                    {row.name}
                  </TableCell>
                  <TableCell align="right">{row.species}</TableCell>
                  <TableCell align="right">{row.status}</TableCell>
                  <TableCell align="right">{row.count}</TableCell>
                  <TableCell align="right">${(row.price * row.count)}</TableCell>
                  <TableCell align="right">
                    <IconButton onClick={() => handleRemove(row.id)}>
                      < Delete />
                    </IconButton>
                  </TableCell>
                </TableRow>
              ))}
              <TableRow>
                <TableCell colSpan={2}>Total</TableCell>
                <TableCell align="right">${suma}</TableCell>
              </TableRow>
            </TableBody>
          </Table>
        </TableContainer>
        <div className='Botones'>
          <Button variant="outlined" onClick={handleClear}>
            Vaciar carrito
          </Button>
          <Button variant="outlined" onClick={handleOpen}>
            Checkout
          </Button>
          <Modal open={modal} aria-labelledby="modal-modal-title" aria-describedby="modal-modal-description">
            <Checkout cart={cart} total={suma} handleClose={handleClose} />
          </Modal>
        </div>
      </> :
      <div className='Content'>
        <Card className="Mensaje">
          <CardContent>
            <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
              Aún no agregaste productos al carrito.
            </Typography>
            <Typography sx={{ fontSize: 12 }} color="text.secondary" gutterBottom>
              Buscá los productos que quieras, añadí los productos a esta sección y pagalos todos juntos.
            </Typography>
            <Button variant="outlined" onClick={() => navigate(`/`)}>
              Buscar productos
            </Button>
          </CardContent>
        </Card>
      </div>
    }
    </>
  )
}

export default Cart;