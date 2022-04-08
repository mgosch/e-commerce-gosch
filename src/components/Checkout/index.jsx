import React, { useState } from 'react';
import Box from '@material-ui/core/Box';
import Typography from '@material-ui/core/Typography';
import FormControl from '@material-ui/core/FormControl';
import FormHelperText from '@material-ui/core/FormHelperText';
import Input from '@material-ui/core/Input';
import InputLabel from '@material-ui/core/InputLabel';
import { Button } from '@material-ui/core';
import IconButton from '@material-ui/core/IconButton';
import CloseIcon from '@material-ui/icons/Close';
import { collection, addDoc } from "firebase/firestore";
import { db } from '../../firebase/config';

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  bgcolor: 'background.paper',
  border: '2px solid #000',
  boxShadow: 24,
  p: 4,
};

const Checkout = ({ handleClose, cart, total }) => {
  const [name, setName] = useState("");
  const [direccion, setDireccion] = useState("");
  const [telefono, setTelefono] = useState("");
  const [mail, setMail] = useState("");

  const handleChangeName = (event) => {
    setName(event.target.value);
  };

  const handleChangeDirection = (event) => {
    setDireccion(event.target.value);
  };

  const handleChangeTelefono = (event) => {
    setTelefono(event.target.value);
  };

  const handleChangeMail = (event) => {
    setMail(event.target.value);
  };

  const onSubmit = () => {
    if (name === "" || direccion === "" || telefono === "" || mail === "") {
      return
    }
    const order = {
      buyer: {
        nombre: name,
        direccion: direccion,
        telefono: telefono,
        mail: mail
      },
      items: cart,
      total: total
    };
    console.log(order);
    const orderCollection = collection(db, 'orders');
    addDoc(orderCollection, order).then(({ id }) => alert(`Order generada con id ${id}`));
    handleClose();
  }
  return (
    <Box sx={style}>
      <div className='Titulo'>
        <Typography id="modal-modal-title" variant="h6" component="h2">
          Orden de Compra
        </Typography>
        <IconButton onClick={handleClose} style={{ position: 'absolute', top: '20px', right: '20px' }}>
          <CloseIcon />
        </IconButton>
      </div>
      <FormControl>
        <InputLabel htmlFor="name">Nombre y Apellido</InputLabel>
        <Input id="name" aria-describedby="my-helper-text" value={name} onChange={handleChangeName} />
        <FormHelperText id="my-helper-text">Ingrese su nombre y apellido completo</FormHelperText>
      </FormControl>
      <FormControl>
        <InputLabel htmlFor="direccion">Dirección de envio</InputLabel>
        <Input id="direccion" aria-describedby="my-helper-text" value={direccion} onChange={handleChangeDirection} />
        <FormHelperText id="my-helper-text">Ingrese su dirección</FormHelperText>
      </FormControl>
      <FormControl>
        <InputLabel htmlFor="direccion">Teléfono</InputLabel>
        <Input id="direccion" aria-describedby="my-helper-text" value={direccion} onChange={handleChangeTelefono} />
        <FormHelperText id="my-helper-text">Ingrese tu teléfono</FormHelperText>
      </FormControl>
      <FormControl>
        <InputLabel htmlFor="direccion">Mail</InputLabel>
        <Input id="direccion" aria-describedby="my-helper-text" value={direccion} onChange={handleChangeMail} />
        <FormHelperText id="my-helper-text">Ingrese tu correo electrónico</FormHelperText>
      </FormControl>
      <div className='Boton'>
        <Button variant="outlined" onClick={onSubmit}>
          Confirmar compra
        </Button>
      </div>
    </Box>
  )
}

export default Checkout