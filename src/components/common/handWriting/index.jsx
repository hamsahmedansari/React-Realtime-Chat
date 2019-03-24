import React, { Component } from "react";

class HandWriting extends Component {
  constructor(props) {
    super(props);
    this.state = { title: "" };
  }
  writeTitle = (text, speed = 100) => {
    let i = 0;
    let newSpeed = speed / String(text).length;
    let iteration = setInterval(() => {
      if (this.state.title === text) {
        clearInterval(iteration);
      } else {
        this.setState({ title: String(text).slice(0, i + 1) });
      }
      i++;
    }, newSpeed);
  };
  componentDidMount() {
    if (this.props.speed) this.writeTitle(this.props.text, this.props.speed);
    else this.writeTitle(this.props.text);
  }
  render() {
    return this.state.title;
  }
}

export default HandWriting;
