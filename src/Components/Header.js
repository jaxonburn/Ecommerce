import React, { Component } from "react";
import { Link } from "react-router-dom";
import $ from 'jquery';

class Header extends Component {
  constructor(props) {
    super(props);

    this.state = {
      showMenu: false,
      clicks: 0
    };
  }
  componentDidMount() {
    $(".menu").hide(0);
  }
  menu = (e) => {
    this.setState({clicks: this.state.clicks + 1})
    if(this.state.clicks % 2 === 0) {
        $(".menu").slideDown(200);
        $(e.target).css("transform", "rotateZ(90deg)")
    } else if(this.state.clicks % 1 === 0) {
      $(".menu").slideUp(200);
      $(e.target).css("transform", "rotateZ(0deg)")
    }
  }

  render() {
    return (
      <div className="header">
        <div className="ShopName">
          <span>Store</span>
        </div>
          <div className="menu">
            <button>
              {" "}
              <Link to="/">
                <span className="menuitems">Home</span>
              </Link>{" "}
            </button>
            <button>
              {" "}
              <Link to="/shop">
                <span className="menuitems">Shop</span>
              </Link>{" "}
            </button>
            <button>
              <Link to="/cart">
              <span className="menuitems">
                  <i className="fas fa-shopping-cart"></i>
          </span>
              </Link>
            </button>
          </div>
          <div className="bars">
          <i className="fas fa-bars" onClick={this.menu}></i>
        </div>
      </div>
    );
  }
}

export default Header;
