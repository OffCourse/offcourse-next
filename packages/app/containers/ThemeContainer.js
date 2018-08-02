import { ThemeProvider, injectGlobal } from "styled-components";
import * as themes from "@offcourse/themes";
import {
  ThemeContext,
} from "../contexts";

export default class ThemeContainer extends React.Component {
  render() {
    const { children } = this.props;
    return (
      <ThemeContext.Consumer>
        {({ current }) => {
          const theme = themes[current];
          injectGlobal(theme);
          return <ThemeProvider theme={theme}>{children}</ThemeProvider>;
        }}
      </ThemeContext.Consumer>
    );
  }
}
