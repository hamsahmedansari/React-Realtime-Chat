import React, { Component } from "react";
// import Login from "../login";
import "./style.scss";
import Profile from "../common/profile";
import MessageBox from "../common/messageBox";
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
              {/* Profile */}
              <div className="item">
                <Profile shortName={true} style={{ padding: "10px" }} />
              </div>
              <div className="item">
                <hr />
              </div>
              <div className="item">
                <div className="flex-container">
                  <div className="item active">
                    <p>New Message (2)</p>
                  </div>
                  <div className="item">
                    <p>Peoples (2)</p>
                  </div>
                  <div className="item">
                    <p>Logout</p>
                  </div>
                </div>
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
              {/* Profile */}
              <div className="item">
                <MessageBox />
              </div>
            </div>
          </div>
          <div className="item">
            <div className="flex-container">
              {/* Header */}
              <div className="item">
                <Profile />
              </div>
              {/* Profile */}
              <div className="item">
                <Profile />
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Home;
