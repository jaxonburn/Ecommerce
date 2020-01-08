import React, { Component } from 'react';
import store from '../redux'
import Item from './Item'
import Filter from './Filter'



class Shop extends Component {
  componentDidMount(){
    this.unsubscribe = store.subscribe(() => this.forceUpdate());
  }
  componentWillUnmount(){
    this.unsubscribe();
  }

  
  render() {
    var Products = store.getState().apiReduce.Products
    
    
    return (
      <div>
        <Filter />
        <div className="products-page">
          {Products.map(product => (
            <Item product={product} key={product.id}/>
          ))}
          <div className="addCart">Added to Cart</div>
        </div>
       </div>
    );
  }
}

export default Shop;