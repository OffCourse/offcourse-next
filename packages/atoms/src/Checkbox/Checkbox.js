import React, { Component } from "react";
import PropTypes from "prop-types";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheck } from "@fortawesome/free-solid-svg-icons";
import CheckboxWrapper from "./CheckboxWrapper";
import LabelWrapper from "./LabelWrapper";

/**
 * Checkbox component for the offcourse project
 */

class Checkbox extends Component {
  static propTypes = {
    /**  allows the user to directly decide if the value is checked or not */
    checked: PropTypes.bool,
    /** an optional callback that triggers when the checkbox changes its value */
    onToggle: PropTypes.func
  };

  static defaultProps = {
    checked: false,
    onToggle: () => null
  };

  state = {
    checked: this.props.checked
  };

  handleClick = e => {
    e.preventDefault();
    const { onToggle } = this.props;
    this.setState(
      ({ checked }) => ({ checked: !checked }),
      () => onToggle(this.state)
    );
  };

  render() {
    const { checked } = this.state;
    return (
      <CheckboxWrapper onClick={this.handleClick}>
        <input type="checkbox" readOnly checked={checked} />
        <LabelWrapper>
          <FontAwesomeIcon icon={faCheck} />
        </LabelWrapper>
      </CheckboxWrapper>
    );
  }
}

export default Checkbox;
