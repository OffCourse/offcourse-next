import { ThemeProvider, injectGlobal } from "styled-components";
import { Query } from "../components";
import { queries } from "../graphql";
import * as themes from "@offcourse/themes";

export default class ThemeContainer extends React.Component {
  render() {
    const { children } = this.props;
    return (
      <Query query={queries.theme}>
        {({ data }) => {
          const theme = themes[data.theme.current];
          injectGlobal(theme);
          return <ThemeProvider theme={theme}>{children}</ThemeProvider>;
        }}
      </Query>
    );
  }
}
