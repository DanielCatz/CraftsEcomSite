import React from 'react';
import { Link } from 'react-router-dom';
import '../assets/navbar.css';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import ShoppingCartSharpIcon from '@material-ui/icons/ShoppingCartSharp';
import clsx from 'clsx';
import { Hidden } from '@material-ui/core';
import Button from '@material-ui/core/Button';

const Navbar = props => {
  const { classes, theme, isBarOpen, closeBar, openBar } = props;
  const { login, logout, isAuthenticated } = props.auth;

  const toggleBar = () => {
    if (isBarOpen) closeBar();
    else openBar();
  };

  return (
    <AppBar
      position="static"
      className={clsx(classes.appBar, {
        [classes.appBarShift]: isBarOpen
      })}
    >
      <Toolbar className={classes.toolbar}>
        <Typography variant="h6" className={classes.title}>
          <Link className={classes.title} to="/home">
            Home
          </Link>
        </Typography>
        <Typography variant="h6" className={classes.title}>
          <Link className={classes.title} to="/featured">
            Featured
          </Link>
        </Typography>

        <Typography variant="h6" className={classes.title}>
          <Link className={classes.title} to="/browseproducts">
            Browse
          </Link>
        </Typography>
        <Typography variant="h6" className={classes.title}>
          <Link className={classes.title} to="/about">
            About
          </Link>
        </Typography>
        <Typography variant="h6" className={classes.title}>
          <Link className={classes.title} to="/contact">
            Contact
          </Link>
        </Typography>
        <Typography variant="h6" className={classes.title}>
          <Link className={classes.title} to="/custom">
            Custom Order
          </Link>
        </Typography>
        <Typography>
          {isAuthenticated() ? (
            <Link className={classes.title} to="/account">
              Account
            </Link>
          ) : (
            <div />
          )}
        </Typography>
        <Typography variant="h6" className={classes.title}>
          <Link className={classes.title} to="/cart">
            Cart
          </Link>
        </Typography>
        <Button variant="outlined" onClick={isAuthenticated() ? logout : login}>
          {isAuthenticated() ? 'Log Out' : 'Log In'}
        </Button>
        {isBarOpen ? (
          <div />
        ) : (
          <Hidden smDown>
            <div>
              <IconButton
                aria-label="account of current user"
                aria-controls="menu-appbar"
                aria-haspopup="true"
                onClick={toggleBar}
                color="black"
              >
                <ShoppingCartSharpIcon />
              </IconButton>
            </div>
          </Hidden>
        )}
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;
