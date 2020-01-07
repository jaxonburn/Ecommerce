
import React, { Component } from 'react';
import store from '../redux'
import CartItem from "./CartItem"


class Cart extends Component {
  componentDidMount(){
    this.unsubscribe = store.subscribe(() => this.forceUpdate());
  }
  componentWillUnmount(){
    this.unsubscribe();
  }

  

  render() {
    const Products = store.getState().firstReducer.Cart
   
    return (
        <div className="cart">
            <div className="leftCart">
            {Products.map(product => (
            <CartItem product={product.product} key={product.product.id}/>
          ))}
            </div>
            <div className="price">
              <span>Items in Cart</span>
            </div>
        </div>
    );
  }
}

export default Cart;