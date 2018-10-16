import React, { Component, Fragment } from "react";
import PropTypes from "prop-types";
import {
  ThemeProvider as StyledThemeProvider,
  createGlobalStyle
} from "styled-components";
import * as themes from "@offcourse/themes";
import { ThemeProvider } from "../providers";

const GlobalStyle = createGlobalStyle(themes.offcourse);

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
          return (
            <Fragment>
              <GlobalStyle />
              <StyledThemeProvider theme={theme}>
                {children}
              </StyledThemeProvider>
            </Fragment>
          );
        }}
      </ThemeProvider>
    );
  }
}
