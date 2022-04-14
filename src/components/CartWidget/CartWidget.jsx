import ShoppingCart from '@material-ui/icons/ShoppingCart';
import IconButton from '@material-ui/core/IconButton';
import React, { useContext, useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Badge from '@material-ui/core/Badge';
import { Shop } from '../../context/ShopProvider';

const CartWidget = () => {
  const navigate = useNavigate();
  const { conteoItems } = useContext(Shop);
  const [cantidadTotal, setCantidadTotal] = useState(0);

  useEffect(() => {
    setCantidadTotal(conteoItems())
  }, [conteoItems])

  return (
    <>
      <IconButton
        aria-label="account of current user"
        aria-controls="menu-appbar"
        aria-haspopup="true"
        color="inherit"
        onClick={() => navigate(`/cart`)}>
        {cantidadTotal !== 0 ?
          <Badge badgeContent={cantidadTotal} color="secondary">
            <ShoppingCart />
          </Badge> :
          <ShoppingCart />}
      </IconButton>
    </>
  )
}

export default CartWidget;