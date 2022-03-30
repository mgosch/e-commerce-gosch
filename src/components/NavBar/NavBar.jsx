import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import CartWidget from '../CartWidget/CartWidget';
import { NavLink } from 'react-router-dom';

const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
    },
    menuButton: {
        marginRight: theme.spacing(2),
    },
    title: {
        flexGrow: 3,
        textDecoration: 'none'
    },
}));

const NavBar = () => {
    const classes = useStyles();
    return (
        <>
            <AppBar position="static">
                <Toolbar>
                    <IconButton edge="start" className={classes.menuButton} color="inherit" aria-label="menu">
                        <MenuIcon />
                    </IconButton>
                    <NavLink to="/" className={classes.title}>
                        <Typography variant="h6">
                            Todos
                        </Typography>
                    </NavLink>
                    <NavLink to="/category/Alien" className={classes.title}>
                        <Typography variant="h6">
                            Alien
                        </Typography>
                    </NavLink>
                    <NavLink to="/category/Human" className={classes.title}>
                        <Typography variant="h6">
                            Human
                        </Typography>
                    </NavLink>
                    <CartWidget />
                    <Button color="inherit">Login</Button>
                </Toolbar>
            </AppBar>
        </>
    )
}

export default NavBar;