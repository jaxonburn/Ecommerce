import React, { Component } from 'react'


class Item extends Component {

    render() {
        const {title, img, price} = this.props.product
        return (
            <div className="product">
                <img alt="shop item" src={img}></img>
                <div>{title}</div>
                <div>${price}</div>
            </div>
        )
    }
}

export default Item
