import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import ProductContainer from './components/ProductContainer';
import Navbar from './components/navbar';
import HeroImage from './components/HeroImage';
import TextBlock from './components/TextBlock';

class Home extends Component {
  constructor() {
    super();
    this.state = {
      error: 'good',
      products: [],
      message: 'good'
    };
  }

  render() {
    const { message, error } = this.state;
    return (
      <div>
        <HeroImage imageUrl="https://wallpaperplay.com/walls/full/6/c/8/247280.jpg" />
        <div className="container">
          <TextBlock />
        </div>
        <HeroImage imageUrl="https://wallpaperplay.com/walls/full/4/5/3/211742.jpg" />
      </div>
    );
  }
}

export default Home;
