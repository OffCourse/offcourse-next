import React, { Fragment } from "react";
import PropTypes from "prop-types";
import {
  ThemeProvider as StyledThemeProvider,
  createGlobalStyle
} from "styled-components";
import * as themes from "@offcourse/themes";
import { ThemeProvider } from "../providers";

const GlobalStyle = createGlobalStyle(themes.offcourse);

const ThemeContainer = ({ children }) => {
  return (
    <ThemeProvider>
      {({ current }) => {
        const theme = themes[current];
        return (
          <Fragment>
            <GlobalStyle />
            <StyledThemeProvider theme={theme}>{children}</StyledThemeProvider>
          </Fragment>
        );
      }}
    </ThemeProvider>
  );
};

ThemeContainer.propTypes = {
  children: PropTypes.node.isRequired
};

export default ThemeContainer;
