import React, { Component } from 'react'
import store from '../redux'

class CartItem extends Component {

    constructor(props) {
        super(props)
    
        this.state = {
             itemid: undefined,
             moreinfo: false,
             
        }
        
    }
    
    componentDidMount(){
        this.unsubscribe = store.subscribe(() => this.forceUpdate());
      }
      componentWillUnmount(){
        this.unsubscribe();
      }



    RemoveFromCart = (product) => {

        
        store.dispatch({
            type: "DELETE_ITEM",
            product: product
          })
  
          
    }


    
    render() {
        
        const {title, img, price } = this.props.product
        
        return (
            <div className="cartproduct">
                <div className="carttitle">{title}</div>
                <img alt="shop item" src={img}></img>
                <div>${price}</div>
                <button className="trashicon"onClick={() => this.RemoveFromCart(this.props.product)}><i className="fas fa-trash-alt trash"></i></button>
            </div>
        
        )
    }
}

export default CartItem
