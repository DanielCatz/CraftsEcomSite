import React, { Component } from 'react';
import { Divider, Typography, Paper } from '@material-ui/core';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import Image from '../assets/img/1.jpg';

const useStyles = makeStyles(theme => ({
  root: {
    padding: theme.spacing(3),
    flexGrow: 1
  },
  paper: {
    padding: theme.spacing(3),
    textAlign: 'center',
    color: theme.palette.text.secondary
  },
  blockLetter: {
    fontFamily: '"Baloo Tammudu 2"',
    fontSize: '1.8rem',
    textTransform: 'uppercase',
    paddingTop: theme.spacing(2)
  },
  statement: {
    fontFamily: 'Bellota, cursive',
    fontSize: '1.8rem',
    textTransform: 'uppercase'
  },
  paragraph: {
    fontFamily: 'Bellota, cursive',
    padding: '5px 0 16px 0px'
  }
}));

const TextBlock = () => {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <Paper className={classes.paper} variant="outlined" square elevation={3}>
        <Divider />
        <Typography className={classes.blockLetter}>Yes, these flowers are made of paper</Typography>
        <Typography className={classes.statement}>I just thought you might want some paper flowers...</Typography>
        <Typography className={classes.paragraph}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur molestie eu leo eu congue. Phasellus at
          elementum mauris. In dictum bibendum felis, ut varius nibh. Nam nec mi sed nibh tempor gravida. Proin at
          maximus lacus. Ut a porta tortor. Maecenas non consequat arcu. Suspendisse tempus augue purus, ornare auctor
          nulla pharetra et. Curabitur dictum ligula non quam malesuada fermentum. Suspendisse a lectus neque.
        </Typography>

        <Divider />
      </Paper>
    </div>
  );
};
export default TextBlock;
