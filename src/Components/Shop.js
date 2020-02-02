import React, { Component } from 'react';
import store from '../redux'
import Item from './Item'





class Shop extends Component {
  constructor(props) {
    super(props)
    this.state = {
      loading: true,
      filtered: [],
    }
    this.checkVal = this.checkVal.bind(this)
    this.first = this.first.bind(this)

  }
  
  componentDidMount(){
    this.unsubscribe = store.subscribe(() => this.forceUpdate());
    this.first()
  }
  componentWillUnmount(){
    this.unsubscribe();
  }
  first(){
    let int = setInterval( () => {if(document.readyState === 'complete') {
      this.setState({
        filtered: store.getState().apiReduce.Products.map(product => (
          <Item product={product} key={product.id}/>
            )),
            loading: false
      })
      clearInterval(int)
  }
    },500)
  }
  checkVal(event){
    this.filtered = [];
    let Products = store.getState().apiReduce.Products
    if(event.target.value === "all"){
      this.setState({
        filtered: Products.map(product => (
          <Item product={product} key={product.id}/>
            ))
      })
      return;
    }
      for(let i = 0; i < Products.length; i++){
        if(Products[i].category === event.target.value){
          this.filtered.push(Products[i])
        }
      }
    this.setState({
      filtered: this.filtered.map(product => (
        <Item product={product} key={product.id}/>
      ))
    })
  }

  render() {
    if(this.state.loading === true){
      return <div className="Loading"><i className="fas fa-spinner"></i></div>
    }else if(this.state.loading === false){
    return (
      <div>
            <div className="filter">
                <span>Categories:  </span>
            <form >
              <select id="filterForm" onChange={this.checkVal}>
                <option value="all">Show All</option>
                <option value="phone">Phone</option>
                <option value="tv">Tv</option>
                <option value="small-appliance">Small-Appliance</option>
                <option value="refrigerator">Refrigerator</option>
                <option value="watch">Watch</option>
                <option value="action-camera">Action-Camera</option>
                <option value="headphones">Headphones</option>
              </select>
            </form>
            

            </div>
        <div className="products-page">
          {this.state.filtered}
          <div className="addCart">Added to Cart</div>
        </div>
       </div>
    );
  }
}
}

export default Shop;