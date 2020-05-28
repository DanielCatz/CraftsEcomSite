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

const CartPageItem = props => {
  const { product } = props;

  const useStyles = makeStyles(theme => ({
    root: {
      display: 'flex'
    },
    details: {
      display: 'flex',
      flexDirection: 'column'
    },
    content: {
      flex: '1 0 auto'
    },
    image: {
      width: 151
    },
    controls: {
      display: 'flex',
      alignItems: 'center',
      paddingLeft: theme.spacing(1),
      paddingBottom: theme.spacing(1)
    },
    playIcon: {
      height: 38,
      width: 38
    }
  }));

  const classes = useStyles();
  const theme = useTheme();
  return (
    <div key={product.slug}>
      <Card className={classes.root}>
        <Hidden smDown>
          <Button color="secondary" onClick={props.clearItem}>
            <DeleteIcon />
          </Button>
        </Hidden>
        <CardMedia
          className={classes.image}
          image={product.images[0].fields ? product.images[0].fields.file.url : 'http://tachyons.io/img/avatar_1.jpg'}
          title="image desc"
        />
        <div className={classes.details}>
          <CardContent className={classes.content}>
            <Typography component="h5" variant="h5">
              {product.name}
            </Typography>
            <Typography variant="subtitle1" color="textSecondary">
              {product.name}
            </Typography>
          </CardContent>
          <div className={classes.controls}>
            <IconButton aria-label="remove" onClick={props.removeItem}>
              {theme.direction === 'rtl' ? <AddOutlinedIcon /> : <RemoveOutlinedIcon />}
            </IconButton>
            <TextField
              id="outlined-number"
              label="Quantity"
              type="number"
              value={product.quantity}
              InputLabelProps={{
                shrink: true
              }}
              variant="outlined"
            />
            <IconButton aria-label="add" onClick={props.addItem}>
              {theme.direction === 'rtl' ? <RemoveOutlinedIcon /> : <AddOutlinedIcon />}
            </IconButton>
          </div>
        </div>
        <CardContent className={classes.content}>
          <Typography component="h5" variant="h5">
            {product.price}
          </Typography>
        </CardContent>
      </Card>
    </div>
  );
};

export default CartPageItem;
