import React, { Component } from 'react'
import store from '../redux'
import { Link } from "react-router-dom";
import $ from 'jquery'

export class ProductDetails extends Component {
    AddtoCart(product){
        store.dispatch({
            type: "ADD_ITEM",
            product: product
          })
         $(".addCart").animate({marginLeft: '-600px', display: 'show'}, "slow");
         setTimeout(function(){ $(".addCart").animate({marginLeft: '0px'}, "slow") }, 2000);
         
         
         
    }
    render() {
        if(store.getState().apiReduce.Loaded === false){
            return <div>Loading</div>
        }else{
        const {title, img, price, rating, description} = store.getState().firstReducer.ProdDetails
        return (
            
            <div className="productDetails">
                <div className="productImg"><img alt="product"src={img}></img></div>
                <div><h1>{title}</h1></div>
                <div><h2>${price}</h2></div>
                <div>{description}</div>
                <div><h2>{rating}/5</h2></div>
                <div className="lr">
                    <Link className="button" to="/shop/">Back to Shop</Link>
                    <div className="button" onClick={() => this.AddtoCart(this.props.product)}>Add to Cart</div>
                </div>
                <div className="addCart">Added to Cart</div>
            </div>
        )
        }
    }
}

export default ProductDetails
