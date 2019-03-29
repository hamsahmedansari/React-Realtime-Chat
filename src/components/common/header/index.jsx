import React, { Component } from "react";
import "./style.scss";
class Header extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <div className="header flex-container">
        <div className="item">
          <h2 className="logo">CONNECT</h2>
        </div>
        <div className="item">
          <div className="flex-container search">
            <i className="fas fa-search item" />
            <input type="text " className="item" placeholder="Search Here" />
          </div>
        </div>
        <div className="item">
          <div className="profile flex-container">
            <div className="item">
              <img src="/assets/images/1.jpeg" alt="" />
            </div>
            <div className="item">
              <h4>Hams Ahmed Ansari</h4>
              <p>
                <i className="fas fa-dot-circle" /> Online
              </p>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Header;
