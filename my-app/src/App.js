import React from 'react';
import logo from './logo.svg';
import './App.css';
import Header from './component/common/Header';
import Homepage from './container/Homepage';
import Benefit from './component/common/Benefit';
import Footer from './component/common/Footer';
import { BrowserRouter, Route, Link, Switch, Router } from "react-router-dom";
import Shop from './container/Shop';
import Promotion from './container/Promotion';
import Blog from './container/Blog';
import Contact from './container/contact';
import DetailPage from './container/DetailPage/';
import ShoppingCart from './component/common/ShoppingCart';
import Loading from './loading/Loading';





function App() {
  return (
    <div className="app">

      <BrowserRouter>
        <Header />

        <Switch>
          <Route exact path="/" component={Homepage} />
          <Route path="/shop" component={Shop} />
          <Route path="/promotion" component={Promotion} />

          <Route path="/contact" component={Contact} />
          <Route path="/products/shoppingcart" component={ShoppingCart} />
          <Route path="/products/:productId" component={DetailPage} />

        </Switch>

        <Benefit />
        <Footer />
      </BrowserRouter>


    </div>
  );
}

export default App;
