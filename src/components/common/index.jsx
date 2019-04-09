import React from "react";
import { connect } from "react-redux";

import Modal from "./modal";
const Common = props => {
  let loading;
  if (props.loading.status && props.loading.type === null) {
    loading = "default";
  } else if (props.loading.status && props.loading.type) {
    loading = props.loading.type;
  }

  return (
    <div className="common">
      {/* Loading */}
      {loading === "default" ? (
        <Modal status="">
          <span>Loading</span>
          <span>We Are Loading Some Time Special</span>
          <img src="/assets/images/loading.gif" alt="" />
        </Modal>
      ) : loading ? (
        <Modal status={loading}>
          <span>{props.loading.head}</span>
          <span>{props.loading.body}</span>
        </Modal>
      ) : null}
    </div>
  );
};
const mapStateToProps = (state, ownProps) => {
  return {
    loading: state.loading
  };
};
export default connect(
  mapStateToProps,
  null
)(Common);
