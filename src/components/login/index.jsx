import React, { Component } from "react";
import "./style.scss";
import HandWriting from "../common/handWriting";

class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      title: ""
    };
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
                  <div className={`ball ball-${i + 1} ${color}`} key={i} />
                ))}
                <div className="flex-container title">
                  <div className="item">
                    <h1>
                      <HandWriting text="connect." speed="1000" />
                    </h1>
                  </div>
                  <div className="item">
                    <h4>Technology</h4>
                    <div className="flex-container technology">
                      <div className="item">
                        <i className="fab fa-html5" />
                      </div>
                      <div className="item">
                        <i className="fab fa-css3-alt" />
                      </div>
                      <div className="item">
                        <i className="fab fa-js" />
                      </div>
                      <div className="item">
                        <i className="fab fa-node" />
                      </div>
                      <div className="item">
                        <i className="fab fa-react" />
                      </div>
                      <div className="item">
                        <i className="fab fa-git" />
                      </div>
                      <div className="item">
                        <i className="fab fa-gripfire" />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="item body flex-container">
            {/* <div className="item flex-container"> */}
            <div className="item">
              <button className="btn flex-container">
                <i className="far fa-grin-tears item" />
                <span className="item">Guess Login</span>
              </button>
            </div>
            <div className="item">
              <h2>OR</h2>
            </div>
            <div className="item">
              <button className="btn flex-container">
                <i className="fab fa-facebook-square item" />
                <span className="item">Login With Facebook</span>
              </button>
              <button className="btn flex-container">
                <i className="fab fa-twitter-square item" />
                <span className="item">Login With Twitter</span>
              </button>
              <button className="btn flex-container">
                <i className="fab fa-google-plus-square item" />
                <span className="item">Login With Google +</span>
              </button>
              <button className="btn flex-container">
                <i className="fab fa-github-square item" />
                <span className="item">Login With GitHub</span>
              </button>
              {/* </div> */}
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Login;
