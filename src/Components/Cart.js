
import React, { Component } from 'react';
import store from '../redux'
import CartItem from "./CartItem"
import uuid from 'uuid'


class Cart extends Component {
  constructor(props) {
    super(props)
  
    this.state = {
       checkOut: false,
       complete: false

    }
    this.loadingFunc = this.loadingFunc.bind(this)
    this.complete = this.complete.bind(this)
  }
  
  componentDidMount(){
    this.unsubscribe = store.subscribe(() => this.forceUpdate());
  }
  componentWillUnmount(){
    this.unsubscribe();
  }

  loadingFunc(){
    this.setState({
      checkOut: true
    })
    setTimeout(this.complete, 2000);
  }

  complete(){
    this.setState({
      complete: true
    })

  }

  render() {
    const Products = store.getState().firstReducer.Cart
    var finalPrice = 0.00;
    var shippingPrice = 0.00;
    var total = 0.00;
    for(let i = 0; i < Products.length; i++){
      finalPrice += Number(Products[i].product.price)
      
    }
    finalPrice = Math.floor(finalPrice)
    shippingPrice = Math.floor(finalPrice * 0.02)
    total = finalPrice + shippingPrice;
   if(this.state.checkOut === false && this.state.complete === false){
    return (
        <div className="cart">
            <div className="leftCart">
            {Products.map(product => (
            <CartItem product={product.product} key={uuid.v4()}/>
          ))}
            </div>
            <div className="price">
              <span>Total Price</span>
              <div>
                <div className="totalPrice">
                  <h2>Products:</h2>
                  <h2>${finalPrice}.00</h2> 
                  </div>
                <div className="totalPrice bottom-border">
                  <h2>Shipping:</h2> 
                  <h2>${shippingPrice}.00</h2>
                  </div>
                <div className="totalPrice">
                  <h2>Total: </h2>
                  <h2>${total}</h2>
                  </div>
              </div>
              <div className="CheckOut" onClick={this.loadingFunc}>Check Out</div>
            </div>
        </div>
    );
  }else if(this.state.checkOut === true && this.state.complete === false){
    return <div className="Loading"><i className="fas fa-spinner"></i></div>
  }else if(this.state.complete === true){
    return <div className="completebox"><div className="complete">Thank you for your Purchase! <i className="fas fa-check checkmark"></i></div></div>
  }
}
}

export default Cart;