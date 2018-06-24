import {
  ThemeContainer,
  AppShellContainer,
  HeadContainer,
  OverlayContainer,
  MainContainer
} from "../containers";

class App extends React.Component {
  static getInitialProps = async ({ pathname, asPath, query }) => {
    return { pathname, asPath, query };
  };

  render() {
    const { query } = this.props;
    return (
      <AppShellContainer>
        <HeadContainer />
        <OverlayContainer />
        <MainContainer query={query} />
      </AppShellContainer>
    );
  }
}

export default App;
