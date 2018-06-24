import { ThemeProvider, injectGlobal } from "styled-components";
import * as themes from "@offcourse/themes";

export default class ThemeContainer extends React.Component {
  state = {
    currentTheme: "philosopher"
  };

  render() {
    const { children } = this.props;
    const { currentTheme } = this.state;
    const theme = themes[currentTheme];
    injectGlobal(theme);

    const switchTheme = () =>
      this.setState({
        currentTheme:
          currentTheme === "philosopher" ? "offcourse" : "philosopher"
      });

    return <ThemeProvider theme={theme}>{children}</ThemeProvider>;
  }
}
