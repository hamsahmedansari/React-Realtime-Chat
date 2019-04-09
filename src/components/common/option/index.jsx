import React, { Component } from "react";
import "./style.scss";

class Option extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  selectImage = ({ currentTarget }) => {
    console.log(currentTarget);
    const allImage = document.querySelectorAll(".SelectImage");
    allImage.forEach(element => {
      element.classList.remove("active");
    });
    currentTarget.classList.add("active");
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
                placeholder="Full Name"
              />
            </div>
            <div className="item body w-100 text-center">
              {images.map((img, i) => (
                <img
                  src={img}
                  className="SelectImage"
                  key={i}
                  alt=""
                  onClick={this.selectImage}
                />
              ))}
            </div>
            <div className="item footer text-center w-100">
              <button className="btn ">Add User</button>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Option;
