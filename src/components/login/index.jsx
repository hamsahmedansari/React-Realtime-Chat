import React, { Component } from "react";
import "./style.scss";

class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <div className="login">
        <div className="flex-container">
          <div className="item head flex-container">
            <h2 className="item">
              <i className="fa fa-comments-o" /> Messenger App
            </h2>
          </div>
          <div className="item body flex-container">
            <div className="item social-btn">
              <button className="btn ">
                Login with <i className="fa fa-google-plus" />
              </button>

              <button className="btn ">
                Login with <i className="fa fa-facebook" />
              </button>

              <button className="btn ">
                Login with <i className="fa fa-twitter" />
              </button>

              <button className="btn ">
                Login with <i className="fa fa-github" />
              </button>
            </div>
            <div className="item">
              <h2>head</h2>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Login;
