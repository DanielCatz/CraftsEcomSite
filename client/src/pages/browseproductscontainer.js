import React from 'react';
import { Fade, FormControlLabel, Switch as Boop } from '@material-ui/core';
import BrowseProducts from './browseproducts';
import createClient from '../Contentful';
import LocalStorageMutator from './business/utils';

class BrowseProductsContainer extends React.Component {
  constructor() {
    super();
    this.state = {
      products: [],
      isVisible: false
    };
  }

  componentWillMount() {
    this.getProductsData();
  }

  getProductsData = async () => {
    try {
      const response = await createClient.getEntries({ content_type: 'flowerStoreProduct' });
      this.setState({ isVisible: true, products: response.items });

      console.log('Browse all pull');
    } catch (error) {
      console.log(error);
    }
  };

  render() {
    const { isVisible, products } = this.state;
    return (
      <div>
        <BrowseProducts products={products} checked={isVisible} />
      </div>
    );
  }
}

export default BrowseProductsContainer;
