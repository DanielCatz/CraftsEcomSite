import React from 'react';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import Avatar from '@material-ui/core/Avatar';

import ReactImageZoom from 'react-image-zoom';
import Button from '@material-ui/core/Button';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1
  },
  paper: {
    padding: theme.spacing(3),
    background: '#FFF9F9',

    color: theme.palette.text.secondary,
    minHeight: 385
  },
  large: {
    minWidth: 100,
    minHeight: 100
  },
  main: {
    minWidth: 500,
    minHeight: 500
  }
}));

const ProductDisplayPage = props => {
  const classes = useStyles();
  const { name, description, price, blurb, images } = props.product;
  const img = images[0].fields ? images[0].fields.file.url : '';
  const extras = images.map(image => (
    <Grid item>
      <Avatar className={classes.large} variant="square" alt="Fleur" src={image.fields.file.url} />
    </Grid>
  ));
  const imgProps = { width: '100%', height: '100%', zoomWidth: '300', zoomPosition: 'original', img };
  return (
    <div>
      <Paper className={classes.paper} variant="outlined" square elevation={3}>
        <Grid container spacing={3} direction="row" justify="space-evenly" alignItems="flex-start">
          <Grid item xs={12} sm={12} md={6}>
            <Grid item>
              <Paper variant="outlined" square elevation={1}>
                <Grid container spacing={3} direction="row" justify="center" alignItems="center">
                  <Grid item>
                    <Avatar className={classes.main} variant="square" alt="Fleur" src={img} />
                  </Grid>
                </Grid>
              </Paper>
            </Grid>
            <Grid item>
              <Paper variant="outlined" square elevation={3}>
                <Grid container spacing={3} direction="row" justify="flex-start" alignItems="center">
                  {extras}
                </Grid>
              </Paper>
            </Grid>
          </Grid>

          <Grid item xs={12} sm={12} md={6}>
            <Paper variant="outlined" square elevation={3}>
              <p>something here </p>
              <h2>{name}</h2>
              <p>{description} </p>
              <p>{price} </p>
              <p>{blurb} </p>
              <Button variant="outlined" onClick={props.addItem}>
                Add Item
              </Button>
            </Paper>
          </Grid>
        </Grid>
      </Paper>

      <div className="container" />
    </div>
  );
};
export default ProductDisplayPage;
