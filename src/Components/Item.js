import React, { Component } from 'react'
import store from '../redux'
import { Link } from "react-router-dom";
import $ from 'jquery'

class Item extends Component {

    constructor(props) {
        super(props)
    
        this.state = {
             itemid: undefined,
             moreinfo: false,
             
        }
        
    }
    
    showdetails(product){
        store.dispatch({
            type: "PROD_DETAILS",
            product: product
        })
        
    }

    AddtoCart = (product) => {
        store.dispatch({
            type: "ADD_ITEM",
            product: product,
        
          })
          $(".addCart").animate({marginLeft: '-600px', display: 'show'}, "slow");
          setTimeout(function(){ $(".addCart").animate({marginLeft: '0px'}, "slow") }, 2000);
    }

    
    render() {
        
        const {title, img, price, id } = this.props.product
        
        return (
            <div className="product">
                <img alt="shop item" src={img}></img>
                <div>{title}</div>
                <div>${price}</div>
                <div className="moreinfo">
                    <Link className="button"to={`/itemdetails/${id}`}><button className="noBackground" onClick={() => this.showdetails(this.props.product)}>Details</button></Link>
                    <button className="button noBackground"onClick={() => this.AddtoCart(this.props.product)}>Add to Cart</button>
                </div>
            </div>
        
        )
    }
}

export default Item
