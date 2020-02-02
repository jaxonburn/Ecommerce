import React, { Component } from 'react'
import store from '../redux'
import { Link } from "react-router-dom";
import $ from 'jquery'
import uuid from 'uuid'

export class ProductDetails extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             loading: true
        }
        var int;
        this.int = setInterval( () => {if(store.getState().firstReducer.ProdDetails.id !== undefined) {
            this.setState({
                  loading: false
            })
            clearInterval(int)
        }
          },500)
    }
    
    componentDidMount(){
        this.unsubscribe = store.subscribe(() => this.forceUpdate());
      }
      componentWillUnmount(){
        clearInterval(this.int)
        this.unsubscribe();
      }

    AddtoCart = () => {
        store.dispatch({
            type: "ADD_ITEM",
            product: store.getState().firstReducer.ProdDetails,
            id: uuid()
          })
         $(".addCart").animate({marginLeft: '-600px', display: 'show'}, "slow");
         setTimeout(function(){ $(".addCart").animate({marginLeft: '0px'}, "slow") }, 2000);   
    }
    render() {
        if(this.state.loading === true){
            return <div className="Loading"><i className="fas fa-spinner"></i></div>
        }
        const {title, img, price, rating, description} = store.getState().firstReducer.ProdDetails

        return (
        <div className="productDetailsContainer">
            <div className="productDetails">
                <div className="productImg"><img alt="product"src={img}></img></div>
                <div><h1>{title}</h1></div>
                <div><h2>${price}</h2></div>
                <div>{description}</div>
                <div><h2>{rating}/5</h2></div>
                <div className="lr">
                    <Link className="button" to="/shop/">Back to Shop</Link>
                    <div className="button" onClick={() => this.AddtoCart()}>Add to Cart</div>
                </div>
                <div className="addCart">Added to Cart</div>
            </div>
        </div>  
        )
        }
    }


export default ProductDetails
