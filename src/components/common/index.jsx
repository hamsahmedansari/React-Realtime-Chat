import React from "react";
import { connect } from "react-redux";

import Modal from "./modal";
import HandWriting from "./handWriting";

const Common = props => {
  console.log(props);

  return (
    <div className="common">
      {/* Loading */}
      {props.loading && (
        <Modal status="">
          <span>
            <HandWriting delay="100" text="Loading" speed="10" />
          </span>
          <span>We Are Loading Some Time Special</span>
          <img src="/assets/images/loading.gif" alt="" />
        </Modal>
      )}
    </div>
  );
};
const mapStateToProps = (state, ownProps) => {
  return {
    loading: state.loading.status
  };
};
export default connect(
  mapStateToProps,
  null
)(Common);
