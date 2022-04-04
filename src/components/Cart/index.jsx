import React, { useContext } from 'react'
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

function Cart() {
  const { cart, removeItem, clear } = useContext(Shop);

  const handleRemove = (id) => {
    removeItem(id);
  }
  const handleClear = () => {
    clear();
  }
  return (
    <>
      <TableContainer component={Paper}>
        <Table sx={{ minWidth: 650 }} aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell>Personaje</TableCell>
              <TableCell align="right">Especie</TableCell>
              <TableCell align="right">Estado</TableCell>
              <TableCell align="right">Cantidad</TableCell>
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
                <TableCell align="right">
                  <IconButton onClick={() => handleRemove(row.id)}>
                    < Delete />
                  </IconButton>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
      <Button variant="outlined" onClick={handleClear}>
        Vaciar carrito
      </Button>
    </>
  )
}

export default Cart;