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
            <div className="item">
              <div className="background">
                <div className="ball-1" />
                <div className="ball-2" />
                <div className="ball-3" />
                <div className="ball-4" />
                <div className="ball-5" />
                <div className="ball-6" />
                <div className="ball-7" />
              </div>
            </div>
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
              <h1>OR</h1>
            </div>
            <div className="item">
              <button className="btn ">
                Login as Guess <i className="fa fa-frown-o	" />
              </button>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Login;
