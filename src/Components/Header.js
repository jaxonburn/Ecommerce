import React, { Component } from "react";
import { Link } from "react-router-dom";

class Header extends Component {
  constructor(props) {
    super(props);

    this.state = {
      showMenu: false
    };

    this.showMenu = this.showMenu.bind(this);
    this.closeMenu = this.closeMenu.bind(this);
  }

  showMenu(event) {
    event.preventDefault();

    this.setState({ showMenu: true }, () => {
      document.addEventListener("click", this.closeMenu);
    });
  }

  closeMenu(event) {
    if (!this.dropdownMenu.contains(event.target)) {
      this.setState({ showMenu: false }, () => {
        document.removeEventListener("click", this.closeMenu);
      });
    }
  }

  render() {
    return (
      <div className="header">
        <div className="ShopName">
          <span>Store</span>
        </div>
        <div className="bars">
          <i className="fas fa-bars" onClick={this.showMenu}></i>
        </div>
        {this.state.showMenu ? (
          <div
            className="menu"
            ref={element => {
              this.dropdownMenu = element;
            }}
          >
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
        ) : null}
      </div>
    );
  }
}

export default Header;
