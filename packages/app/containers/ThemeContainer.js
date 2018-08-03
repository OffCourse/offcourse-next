import { ThemeProvider as StyledThemeProvider, injectGlobal } from "styled-components";
import * as themes from "@offcourse/themes";
import {
  ThemeProvider
} from "../providers";

export default class ThemeContainer extends React.Component {
  render() {
    const { children } = this.props;
    return (
      <ThemeProvider>
        {({ current }) => {
          const theme = themes[current];
          injectGlobal(theme);
          return <StyledThemeProvider theme={theme}>{children}</StyledThemeProvider>;
        }}
      </ThemeProvider>
    );
  }
}
