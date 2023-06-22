import React from "react";
import PropTypes from "prop-types";

const InputMaskChildrenWrapper = React.forwardRef(
  function InputMaskChildrenWrapper(props, ref) {
    const { children, ...rest } = props;
    return <>{React.cloneElement(children, {ref, ...rest})}</>;
  }
);

InputMaskChildrenWrapper.propTypes = {
  children: PropTypes.node
};

export default InputMaskChildrenWrapper;
