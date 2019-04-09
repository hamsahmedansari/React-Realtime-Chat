import React, { Component } from "react";
import "./style.scss";

class Modal extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  componentDidMount() {
    const routingDiv = document.getElementById("routing");
    routingDiv.children[0].classList.add("inActive");
  }
  componentWillUnmount() {
    const routingDiv = document.getElementById("routing");
    routingDiv.children[0].classList.remove("inActive");
  }
  render() {
    const { status } = this.props;
    return (
      <div className="modal animated fadeIn">
        <div className="flex-align-item-center flex-container flex-justify-center model animated slideIn">
          <div
            className={`item flex-container flex-column flex-align-item-start flex-justify-space-between flex-wrap ${status}`}
          >
            <div className="item header">
              <h3>{this.props.children[0]}</h3>
            </div>
            <div className="item body w-100 text-center">
              {this.props.children[1]}
            </div>
            <div className="item footer text-center w-100">
              {this.props.children[2]}
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Modal;
