import React, { Component } from "react";
import PropTypes from "prop-types";
import {
  ThemeProvider as StyledThemeProvider,
  injectGlobal
} from "styled-components";
import * as themes from "@offcourse/themes";
import { ThemeProvider } from "../providers";

export default class ThemeContainer extends Component {
  static propTypes = {
    children: PropTypes.node.isRequired
  };

  render() {
    const { children } = this.props;
    return (
      <ThemeProvider>
        {({ current }) => {
          const theme = themes[current];
          injectGlobal(theme);
          return (
            <StyledThemeProvider theme={theme}>{children}</StyledThemeProvider>
          );
        }}
      </ThemeProvider>
    );
  }
}
