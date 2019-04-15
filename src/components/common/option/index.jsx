import React, { Component } from "react";
import { connect } from "react-redux";

import "./style.scss";
import { AnonymouslyLogin } from "../../../store/action/auth";

class Option extends Component {
  constructor(props) {
    super(props);
    this.state = {
      username: "",
      img: "",
      isError: false
    };
  }
  selectImage = ({ currentTarget }) => {
    const allImage = document.querySelectorAll(".SelectImage");
    allImage.forEach(element => {
      element.classList.remove("active");
    });
    currentTarget.classList.add("active");
    this.setState({
      img: currentTarget.alt
    });
  };
  handelUsername = ({ currentTarget }) => {
    if (currentTarget.value.length >= 15) {
      this.setState({
        isError: true
      });
      return false;
    }
    this.setState({
      username: currentTarget.value,
      isError: false
    });
  };
  render() {
    const images = [
      "/assets/images/1.jpeg",
      "/assets/images/2.jpeg",
      "/assets/images/3.jpeg",
      "/assets/images/4.jpeg",
      "/assets/images/5.jpeg",
      "/assets/images/6.jpeg",
      "/assets/images/7.jpeg",
      "/assets/images/8.jpeg",
      "/assets/images/9.jpeg",
      "/assets/images/10.jpeg",
      "/assets/images/11.jpeg",
      "/assets/images/12.jpeg"
    ];
    return (
      <div className="option">
        <div className="flex-align-item-center flex-container flex-justify-center model animated slideIn">
          <div
            className={`item flex-container flex-column flex-align-item-start flex-justify-space-between flex-wrap `}
          >
            <div className="item header">
              <h3>Add New User</h3>
              <input
                type="text"
                style={{
                  padding: "15px",
                  marginTop: "13px",
                  borderRadius: "100px"
                }}
                className={this.state.isError ? "error" : ""}
                placeholder="Full Name"
                onChange={this.handelUsername}
                value={this.state.username}
              />
            </div>
            <div className="item body w-100 text-center">
              {images.map((img, i) => (
                <img
                  src={img}
                  className="SelectImage"
                  key={i}
                  alt={img}
                  onClick={this.selectImage}
                />
              ))}
            </div>
            <div className="item footer text-center w-100">
              <button
                className="btn "
                style={{ display: "inline" }}
                disabled={
                  !this.state.isError
                    ? this.state.username
                      ? this.state.img
                        ? false
                        : true
                      : true
                    : true
                }
                onClick={() => this.props.anonymouslyLogin(this.state)}
              >
                Add User
              </button>
              <button
                className="btn danger"
                style={{ background: "red", display: "inline" }}
                onClick={() => this.props.disabledModal()}
              >
                Cancel
              </button>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    anonymouslyLogin: pram => {
      dispatch(AnonymouslyLogin(pram));
    }
  };
};
export default connect(
  null,
  mapDispatchToProps
)(Option);
