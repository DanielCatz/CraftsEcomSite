import React from 'react';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import FacebookIcon from '@material-ui/icons/Facebook';
import InstagramIcon from '@material-ui/icons/Instagram';
import PinterestIcon from '@material-ui/icons/Pinterest';
import AlternateEmailIcon from '@material-ui/icons/AlternateEmail';
import PhoneAndroidIcon from '@material-ui/icons/PhoneAndroid';
import CopyrightIcon from '@material-ui/icons/Copyright';
import Divider from '@material-ui/core/Divider';
import { Link } from 'react-router-dom';

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1
  },
  paper: {
    // background: '#D6C8C8',
    padding: theme.spacing(3),
    textAlign: 'center',
    color: theme.palette.text.secondary,
    minHeight: 400
  },
  divider: {
    padding: '20px 0 10px 0'
  },
  footerCard: {
    height: '100%'
  }
}));

const Footer = () => {
  const classes = useStyles();
  return (
    <Paper className={classes.paper} variant="outlined" square elevation={3}>
      <Grid container spacing={3} direction="row" justify="space-evenly" alignItems="stretch">
        <Grid item xs={12} sm={12} md={4}>
          <Paper variant="outlined" square elevation={3}>
            <Grid container spacing={3} direction="column" justify="space-evenly" alignItems="center">
              <Grid item xs={12} sm={12} md={4}>
                Maybe a newsletter?
                <TextField
                  id="outlined-size-normal"
                  variant="outlined"
                  placeholder="paperFlowers@domain.com"
                  InputLabelProps={{
                    shrink: true
                  }}
                />
              </Grid>

              <Grid item>
                <Link className={classes.title} to="/home">
                  Home
                </Link>
              </Grid>
              <Grid item>
                <Link className={classes.title} to="/browse">
                  Browse
                </Link>
              </Grid>
              <Grid item>
                <Link className={classes.title} to="/featured">
                  Featured
                </Link>
              </Grid>
              <Grid item>
                <Link className={classes.title} to="/cart">
                  Cart
                </Link>
              </Grid>
              <Grid item>
                <Link className={classes.title} to="/custom">
                  Custom Order
                </Link>
              </Grid>
              <Grid item>
                <Link className={classes.title} to="/about">
                  About
                </Link>
              </Grid>
            </Grid>
          </Paper>
        </Grid>

        <Grid item xs={12} sm={12} md={4}>
          <Paper variant="outlined" square elevation={3}>
            <Grid container spacing={3} direction="column" justify="space-evenly" alignItems="center" divider>
              <Grid item>Follow Us!</Grid>
              <Grid item>
                <Grid container spacing={3} direction="row" justify="center" alignItems="center">
                  <FacebookIcon />
                  <InstagramIcon />
                  <PinterestIcon />
                </Grid>
              </Grid>

              <Grid item xs={12} sm={12} md={4}>
                <Divider variant="middle" component="hr" />
              </Grid>

              <Grid item xs={12} sm={12} md={4}>
                <Grid item>Contact Us!</Grid>
                <Grid item>
                  <AlternateEmailIcon /> Email@email.com
                </Grid>
                <Grid item>
                  <PhoneAndroidIcon />
                  555-555-555
                </Grid>
              </Grid>
            </Grid>
          </Paper>
        </Grid>

        <Grid item xs={12} sm={12} md={4}>
          <Paper variant="outlined" square elevation={3}>
            <Grid container spacing={3} direction="column" justify="space-around" alignItems="center">
              <Grid item>
                <CopyrightIcon />
                Legaleese
              </Grid>
            </Grid>
          </Paper>
        </Grid>
      </Grid>
    </Paper>
  );
};
export default Footer;
