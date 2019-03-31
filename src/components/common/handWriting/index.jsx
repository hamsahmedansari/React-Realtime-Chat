import { Component } from "react";
import PropTypes from "prop-types";

class HandWriting extends Component {
  constructor(props) {
    super(props);
    this.state = { title: "" };
  }
  writeTitle = (text, s, d) => {
    let i = 0;
    let speed = s ? s : 100;
    let delay = d ? d : 0;
    let newSpeed = speed / String(text).length;
    setTimeout(() => {
      let iteration = setInterval(() => {
        if (this.state.title === text) {
          clearInterval(iteration);
        } else {
          this.setState({ title: String(text).slice(0, i + 1) });
        }
        i++;
      }, newSpeed);
    }, delay);
  };
  componentDidMount() {
    this.writeTitle(this.props.text, this.props.speed, this.props.delay);
  }
  render() {
    return this.state.title;
  }
}

HandWriting.propTypes = {
  text: PropTypes.string,
  speed: PropTypes.string,
  delay: PropTypes.string
};

export default HandWriting;
