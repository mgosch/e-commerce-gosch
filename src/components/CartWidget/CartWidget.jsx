import ShoppingCart from '@material-ui/icons/ShoppingCart';
import IconButton from '@material-ui/core/IconButton';
import React , { useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import Badge from '@material-ui/core/Badge';
import { Shop } from '../../context/ShopProvider';

const CartWidget = () => {
  const { cart} = useContext(Shop);
  const navigate = useNavigate();
  return (
    <>
      <IconButton
        aria-label="account of current user"
        aria-controls="menu-appbar"
        aria-haspopup="true"
        color="inherit"
        onClick={() => navigate(`/cart`)}>
        <Badge badgeContent={cart.length} color="secondary">
          <ShoppingCart />
        </Badge>
      </IconButton>
    </>
  )
}

export default CartWidget;