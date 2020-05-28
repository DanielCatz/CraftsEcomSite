import React from 'react';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import RemoveOutlinedIcon from '@material-ui/icons/RemoveOutlined';
import AddOutlinedIcon from '@material-ui/icons/AddOutlined';
import TextField from '@material-ui/core/TextField';
import { Hidden } from '@material-ui/core';
import DeleteIcon from '@material-ui/icons/Delete';
import { Link } from 'react-router-dom';

const CartItem = props => {
  const { product } = props;

  const useStyles = makeStyles(theme => ({
    root: {
      textAlign: '-webkit-center'
    },
    details: {
      alignItems: 'center',
      display: 'flex',
      flexDirection: 'column'
    },
    image: {
      alignItems: 'center',
      width: 120,
      height: 120
    },
    controls: {
      display: 'flex',
      alignItems: 'center'
    }
  }));

  const classes = useStyles();
  const theme = useTheme();
  return (
    <div key={product.slug}>
      <Card className={classes.root}>
        <CardContent>
          <Link to={`/browseproducts/productdisplay/${product.slug}`}>
            <CardMedia
              className={classes.image}
              image={
                product.images[0].fields ? product.images[0].fields.file.url : 'http://tachyons.io/img/avatar_1.jpg'
              }
              title="image desc"
            />
          </Link>
          <div className={classes.controls}>
            <IconButton aria-label="remove" onClick={props.removeItem}>
              {theme.direction === 'rtl' ? <AddOutlinedIcon /> : <RemoveOutlinedIcon />}
            </IconButton>
            <TextField
              label="Quantity"
              id="outlined-size-normal"
              value={product.quantity}
              variant="outlined"
              InputLabelProps={{
                shrink: true
              }}
            />
            <IconButton aria-label="add" onClick={props.addItem}>
              {theme.direction === 'rtl' ? <RemoveOutlinedIcon /> : <AddOutlinedIcon />}
            </IconButton>
          </div>

          <Link to={`/browseproducts/productdisplay/${product.slug}`}>
            <Typography component="h8" variant="h8">
              ${product.price}
            </Typography>
          </Link>
        </CardContent>
      </Card>
    </div>
  );
};

export default CartItem;
