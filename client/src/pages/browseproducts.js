import React from 'react';
import { Switch, Route, useRouteMatch, Link, withRouter } from 'react-router-dom';
import { Fade, FormControlLabel, Switch as Boop } from '@material-ui/core';
import Navbar from './components/navbar';
import ProductDisplayPageContainer from './ProductDisplayPageContainer';
import ProductContainer from './components/ProductContainer';

const BrowseProducts = props => {
  const match = useRouteMatch();

  const products = props.products.map(product => (
    <ProductContainer key={product.fields.slug} product={product.fields} />
  ));

  return (
    <div>
      <Switch>
        <Route path={`${match.path}/productdisplay/:slug`} component={ProductDisplayPageContainer} />
        <Route path={match.path}>
          <div className="container">
            <h2>This is Browse Products Page</h2>
            <Fade in={props.checked} {...(props.checked ? { timeout: 600 } : {})}>
              <main className="pa3 pa5-ns flex flex-wrap">{products}</main>
            </Fade>
          </div>
        </Route>
      </Switch>
    </div>
  );
};

export default withRouter(BrowseProducts);
