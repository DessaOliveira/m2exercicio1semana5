import React from "react";
import PropTypes from "prop-types";

function Button(props) {

  return (
    <React.Fragment>
      <button className="botao">{props.texto1}</button>
    </React.Fragment>
  );
}

Button.propTypes = {
    texto1: PropTypes.string.isRequired,
    texto2: PropTypes.number.isRequired,
    texto3: PropTypes.bool,
  };
  

export default Button;