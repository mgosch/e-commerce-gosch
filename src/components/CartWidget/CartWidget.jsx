import ShoppingCart from '@material-ui/icons/ShoppingCart';
import IconButton from '@material-ui/core/IconButton';
import React from 'react';

const CartWidget = () => {
  return (
    <>
      <IconButton
        aria-label="account of current user"
        aria-controls="menu-appbar"
        aria-haspopup="true"
        color="inherit"
      >
        <ShoppingCart />
      </IconButton>
    </>
  )
}

export default CartWidget;