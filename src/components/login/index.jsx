import React, { Component } from "react";
import { connect } from "react-redux";
import { Redirect } from "react-router-dom";

import {
  GoogleLogin,
  FacebookLogin,
  GithubLogin,
  TwitterLogin
} from "../../store/action/auth";
import { LoadingCreate, LoadingRemove } from "../../store/action/loading";

import "./style.scss";
import HandWriting from "../common/handWriting";
import Option from "../common/option";

class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      title: "",
      modal: false
    };
  }
  componentDidMount() {
    if (!this.props.auth.isLoaded) {
      this.props.loadingCreate();
    } else {
      this.props.loadingRemove();
    }
    // if()
  }
  componentDidUpdate(prevProps, prevState) {
    if (!this.props.auth.isLoaded) {
      this.props.loadingCreate();
    } else {
      this.props.loadingRemove();
    }
  }
  shuffle = array => {
    return array.sort(() => Math.random() - 0.5);
  };

  handelGoogleLogin = () => {
    const { googleLogin } = this.props;
    googleLogin();
  };
  handelTwitterLogin = () => {
    const { twitterLogin } = this.props;
    twitterLogin();
  };
  handelFacebookLogin = () => {
    const { facebookLogin } = this.props;
    facebookLogin();
  };
  handelGithubLogin = () => {
    const { githubLogin } = this.props;
    githubLogin();
  };
  handelAnonymouslyLogin = () => {
    this.setState({ modal: true });
  };
  disabledModal = () => {
    this.setState({ modal: false });
  };

  render() {
    const { auth } = this.props;
    const { modal } = this.state;

    if (auth.uid) {
      return <Redirect to="/" />;
    }

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
      <React.Fragment>
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
                        <HandWriting delay="400" text="connect." speed="1000" />
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
                <h1>Connect.</h1>
                <p>
                  Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                  Officiis nihil placeat quia possimus praesentium sapiente
                  inventore non et eos ullam tempora mollitia suscipit
                  reiciendis nam accusantium, quaerat dolorem culpa repellendus.
                </p>
              </div>
              <div className="item">{/* <h3>Login</h3> */}</div>
              <div className="item">
                <button
                  className="btn flex-container"
                  onClick={this.handelAnonymouslyLogin}
                >
                  {/* <Link to="/chat" style={{ textDecoration: "none" }}> */}
                  <i className="far fa-grin-tears item" />
                  <span className="item">Guess Login</span>
                  {/* </Link> */}
                </button>
                <button
                  className="btn flex-container"
                  onClick={this.handelFacebookLogin}
                >
                  {/* <Link to="/chat" style={{ textDecoration: "none" }}> */}
                  <i className="fab fa-facebook-square item" />
                  <span className="item">Login With Facebook</span>
                  {/* </Link> */}
                </button>
                <button
                  className="btn flex-container"
                  onClick={this.handelTwitterLogin}
                >
                  {/* <Link to="/chat" style={{ textDecoration: "none" }}> */}
                  <i className="fab fa-twitter-square item" />
                  <span className="item">Login With Twitter</span>
                  {/* </Link> */}
                </button>
                <button
                  className="btn flex-container"
                  onClick={this.handelGoogleLogin}
                >
                  {/* <Link to="/chat" style={{ textDecoration: "none" }}> */}
                  <i className="fab fa-google-plus-square item" />
                  <span className="item">Login With Google +</span>
                  {/* </Link> */}
                </button>
                <button
                  className="btn flex-container"
                  onClick={this.handelGithubLogin}
                >
                  {/* <Link to="/chat" style={{ textDecoration: "none" }}> */}
                  <i className="fab fa-github-square item" />
                  <span className="item">Login With GitHub</span>
                  {/* </Link> */}
                </button>
                {/* </div> */}
              </div>
            </div>
          </div>
        </div>
        {modal && <Option disabledModal={this.disabledModal} />}
      </React.Fragment>
    );
  }
}

// export default Login;
const mapStateToProps = (state, ownProps) => {
  return {
    auth: state.firebase.auth,
    status: state.auth.status
  };
};

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    googleLogin: () => {
      dispatch(GoogleLogin());
    },
    facebookLogin: () => {
      dispatch(FacebookLogin());
    },
    githubLogin: () => {
      dispatch(GithubLogin());
    },
    twitterLogin: () => {
      dispatch(TwitterLogin());
    },
    loadingCreate: () => {
      dispatch(LoadingCreate());
    },
    loadingRemove: () => {
      dispatch(LoadingRemove());
    }
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Login);
