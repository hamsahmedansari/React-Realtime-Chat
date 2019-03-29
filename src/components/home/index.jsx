import React, { Component } from "react";
// import Login from "../login";
import "./style.scss";
import Profile from "../common/profile";
class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <div className="home">
        {/* <Login /> */}
        <div className="flex-container">
          <div className="item">
            <div className="flex-container">
              {/* Header */}
              <div className="item">
                <h2>CONNECT</h2>
              </div>
            </div>
          </div>
          <div className="item">
            <div className="flex-container">
              {/* Header */}
              <div className="item">
                <div className="flex-container search">
                  <i className="fas fa-search item" />
                  <input
                    type="text "
                    className="item"
                    placeholder="Search Here"
                  />
                </div>
              </div>
            </div>
          </div>
          <div className="item">
            <div className="flex-container">
              {/* Header */}
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
          </div>
        </div>
        {/* <div className="header flex-container">
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
        </div> */}
      </div>
    );
  }
}

export default Home;
