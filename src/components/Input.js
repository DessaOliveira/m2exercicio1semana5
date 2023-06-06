import React from "react";
import PropTypes from "prop-types";

function Input(props) {
  return (
    <React.Fragment>
      <input placeholder={props.input1}
      className="inputMain"
    ></input>
    </React.Fragment>
  );
}

Input.propTypes = {
  input1: PropTypes.string.isRequired,
  input2: PropTypes.number.isRequired,
  input3: PropTypes.bool,
};

export default Input;