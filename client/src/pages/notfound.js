import React, { Component } from 'react';
import Typography from '@material-ui/core/Typography';
import Navbar from './components/navbar';

class NotFound extends Component {
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
      <div>
        <Typography variant="h2">404</Typography>
        <Typography variant="h4">I'm afraid I don't know that one</Typography>
      </div>
    );
  }
}

export default NotFound;
