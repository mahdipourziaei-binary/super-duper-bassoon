import classNames from "classnames";
import React from "react";
import PropTypes from "prop-types";
import Button from "../button/button.jsx";

const NumberButton = ({ onSelect, className, number }) => (
  <Button
    className={classNames("dc-numpad__number", className, {
      "dc-numpad__number--zero": number === 0
    })}
    type="secondary"
    classNameSpan="dc-numpad__number--is-left-aligned"
    has_effect
    onClick={() => onSelect(number)}
  >
    {number}
  </Button>
);

NumberButton.propTypes = {
  className: PropTypes.oneOf([PropTypes.string, PropTypes.object]),
  number: PropTypes.number,
  onSelect: PropTypes.func
};

export default NumberButton;
