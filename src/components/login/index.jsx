import React, { Component } from "react";
import "./style.scss";

class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  shuffle = array => {
    return array.sort(() => Math.random() - 0.5);
  };
  render() {
    let colorArr = [
      "color-1",
      "color-2",
      "color-3",
      "color-4",
      "color-5",
      "color-6",
      "color-7"
    ];
    return (
      <div className="login">
        <div className="flex-container">
          <div className="item head flex-container">
            <div className="item">
              <div className="background">
                {this.shuffle(colorArr).map((color, i) => (
                  <div className={`ball-${i + 1} ${color}`} key={i} />
                ))}
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
