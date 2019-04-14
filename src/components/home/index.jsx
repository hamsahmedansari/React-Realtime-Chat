import React, { Component } from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { compose } from "redux";
import { firestoreConnect } from "react-redux-firebase";

import "./style.scss";

import Profile from "../common/profile";
import HandWriting from "../common/handWriting";
import NewMessage from "../common/newMessage";
import People from "../common/people";
import Online from "../common/online";
import GetAllUsers from "../../common/getUsers";
import ChatPanel from "../common/chatPanel";

class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isMenu: false,
      visible: "newMessage",
      search: ""
    };
  }

  handelToggleMenu = () => {
    const { isMenu } = this.state;
    this.setState(perState => ({ ...perState, isMenu: !isMenu }));
  };
  // Responsive
  isUnder850px = () => {
    if (window.innerWidth > 850) {
      this.setState(perState => ({ ...perState, isMenu: false }));
    } else {
      this.setState(perState => ({ ...perState, isMenu: true }));
    }
  };
  componentDidMount() {
    window.addEventListener("resize", this.isUnder850px);
  }
  componentWillUnmount() {
    window.removeEventListener("resize", this.isUnder850px);
  }

  handleChangeNav = pram => {
    this.setState({ visible: pram });
  };

  handelSearchChange = ({ currentTarget }) => {
    this.setState(perState => ({
      ...perState,
      visible: "people",
      search: currentTarget.value
    }));
  };

  render() {
    const { isMenu, visible, search } = this.state;
    const { selectedUser } = this.props;
    const userObj = this.props.user ? this.props.user : null;
    const user = userObj ? userObj[Object.keys(userObj)[0]] : {};
    return (
      <div className="home">
        <div className="flex-container">
          <div className="item">
            <div className="flex-container">
              {/* Header */}
              <div className="item">
                <h2>
                  <HandWriting delay="400" text="CONNECT." speed="1000" />
                </h2>
                <span onClick={this.handelToggleMenu}>
                  <i className="fas fa-ellipsis-h " />
                </span>
              </div>
              {/* Profile */}
              <div className={`item ${isMenu ? "d-none" : ""}`}>
                <Profile
                  isOnline={true}
                  shortName={true}
                  style={{ padding: "10px" }}
                  username={user.fullname}
                  image={user.image}
                />
              </div>
              <div className={`item ${isMenu ? "d-none" : ""}`}>
                <hr />
              </div>
              <div className={`item ${isMenu ? "d-none" : ""}`}>
                <div className="flex-container">
                  <div
                    onClick={() => this.handleChangeNav("newMessage")}
                    className={`item ${
                      visible === "newMessage" ? "active" : ""
                    }`}
                  >
                    <p>All Conversation</p>
                  </div>
                  <div
                    onClick={() => this.handleChangeNav("people")}
                    className={`item ${visible === "people" ? "active" : ""}`}
                  >
                    <p>
                      Peoples (<GetAllUsers type="all" />)
                    </p>
                  </div>
                  <div
                    onClick={() => this.handleChangeNav("online")}
                    className={`item ${visible === "online" ? "active" : ""}`}
                  >
                    <p>
                      Online (<GetAllUsers type="online" />)
                    </p>
                  </div>
                  <div className={`item`}>
                    <p>
                      <Link to="/logout">Logout</Link>
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className={`item ${isMenu ? "d-none" : ""}`}>
            <div className="flex-container">
              {/* Header */}
              <div className="item">
                <div className="flex-container search">
                  <i className="fas fa-search item" />
                  <input
                    type="text "
                    className="item"
                    placeholder="Search Here"
                    onChange={this.handelSearchChange}
                    value={search}
                  />
                </div>
              </div>
              {/* Message's */}
              {visible === "newMessage" ? (
                <div className="item flex-container">
                  <NewMessage />
                </div>
              ) : visible === "people" ? (
                <div className="item flex-container">
                  <People search={search} />
                </div>
              ) : visible === "online" ? (
                <div className="item flex-container">
                  <Online />
                </div>
              ) : null}
            </div>
          </div>
          {/* Chat Panel */}
          <ChatPanel userID={selectedUser.uid} />
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state, ownProps) => {
  return {
    uid: state.firebase.auth.uid,
    user: state.firestore.data.users,
    selectedUser: state.chat
  };
};
// const mapDispatchToProps = (dispatch, ownProps) => {
//   return {};
// };
export default compose(
  connect(
    mapStateToProps,
    null
  ),
  firestoreConnect(props => [{ collection: "users", doc: props.uid }])
)(Home);
