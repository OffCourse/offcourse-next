import React, { Component } from "react";
import PropTypes from "prop-types";
import { Input, Icon } from "@offcourse/atoms";

export default class PasswordInput extends Component {
  state = {
    inputType: "password"
  };

  static propTypes = { ...Input.propTypes };

  toggleInputType = () => {
    this.setState(({ inputType }) => {
      return { inputType: inputType === "password" ? "text" : "password" };
    });
  };

  render() {
    const { inputType } = this.state;
    return (
      <Input type={inputType} {...this.props}>
        <Icon onClick={this.toggleInputType} color="grayScale.2" name="eye" />
      </Input>
    );
  }
}
