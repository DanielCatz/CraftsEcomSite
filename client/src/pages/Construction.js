import React, { Component } from 'react';
import Typography from '@material-ui/core/Typography';
import Navbar from './components/navbar';
import working from './assets/img/under_construction.jpg';
class Construction extends Component {
  constructor() {
    super();
    this.state = {
      error: null,
      url: '',
      message: ''
    };
  }

  render() {
    return (
      <div className="container">
        <Typography variant="h4">Working On It!</Typography>
        <img src={working} />
      </div>
    );
  }
}

export default Construction;
