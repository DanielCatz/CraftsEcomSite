import React from 'react';
import { connect } from 'react-redux';
import Drawer from '@material-ui/core/Drawer';
import Button from '@material-ui/core/Button';
import List from '@material-ui/core/List';
import Divider from '@material-ui/core/Divider';
import IconButton from '@material-ui/core/IconButton';
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
import ChevronRightIcon from '@material-ui/icons/ChevronRight';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import InboxIcon from '@material-ui/icons/MoveToInbox';
import MailIcon from '@material-ui/icons/Mail';
import ShoppingCartSharpIcon from '@material-ui/icons/ShoppingCartSharp';
import Box from '@material-ui/core/Box';
import CartItemContainer from './CartItemContainer';
import { addItem } from '../../redux/actions/cartActions';

const CartBar = props => {
  const { cart, classes, theme, isBarOpen, closeBar, openBar } = props;

  const cartList = cart.map(item => (
    <div>
      <ListItem button>
        <CartItemContainer product={item} key={item.key} />
      </ListItem>
      <Divider />
    </div>
  ));

  // return <div className="cartbar"></div>;
  /* <Drawer className="drawer" variant="persistent" anchor="right" open="open">
      {cartList}
    </Drawer>
  */
  return (
    <Drawer
      className={classes.drawer}
      variant="persistent"
      anchor="right"
      open={isBarOpen}
      classes={{
        paper: classes.drawerPaper
      }}
    >
      <Box className={classes.drawerHeader}>
        <IconButton onClick={closeBar}>
          <ChevronLeftIcon />
        </IconButton>
        <IconButton onClick={closeBar}>
          <ShoppingCartSharpIcon />
        </IconButton>
        #items
        <div>Subtotal: $Dollaz!</div>
        <List>
          <Button variant="outlined">Proceed to Checkout</Button>
        </List>
      </Box>
      <Box className={classes.drawerHeaderBlock} />

      <List>
        <Divider />
        {cartList}
      </List>
    </Drawer>
  );
};

const mapStateToProp = ({ cart }) => ({ cart });
const mapActionsToProp = {
  addItem
};
export default connect(
  mapStateToProp,
  mapActionsToProp
)(CartBar);
