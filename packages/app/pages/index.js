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

    const switchTheme = () => console.log("HI");

    return (
      <ThemeContainer>
        <AppShellContainer switchTheme={switchTheme}>
          <HeadContainer />
          <OverlayContainer />
          <MainContainer query={query} />
        </AppShellContainer>
      </ThemeContainer>
    );
  }
}

export default App;
