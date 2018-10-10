import React, { Component } from "react";
import { Input, Icon } from "@offcourse/atoms";
import { sizes } from "@offcourse/constants";

const { LARGE } = sizes;

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
      <Input unformatted type={inputType} {...this.props}>
        <Icon
          size={LARGE}
          onClick={this.toggleInputType}
          color="grayScale.2"
          name="eye"
        />
      </Input>
    );
  }
}
