import { ThemeProvider, injectGlobal } from "styled-components";
import { philosopher, offcourse } from "@offcourse/themes";
import {
  AppShellContainer,
  HeadContainer,
  OverlayContainer,
  MainContainer
} from "../containers";

class App extends React.Component {
  state = {
    isModalOpen: false,
    currentTheme: "offcourse"
  };

  static getInitialProps = async ({ pathname, asPath, query }) => {
    return { pathname, asPath, query };
  };

  render() {
    const theme = currentTheme === "philosopher" ? philosopher : offcourse;
    injectGlobal(theme);
    const { query } = this.props;
    const { currentTheme, isModalOpen } = this.state;

    const toggleModal = () => this.setState({ isModalOpen: !isModalOpen });
    const closeModal = () => this.setState({ isModalOpen: false });

    const links = [
      {
        onClick: toggleModal,
        title: "Sign In",
        level: 1
      },
      {
        onClick: () =>
          this.setState({
            currentTheme:
              currentTheme === "philosopher" ? "offcourse" : "philosopher"
          }),
        title: "Switch Theme",
        level: 3
      },
      {
        href: "https://condescending-wing-149611.netlify.com/",
        title: "Contribute",
        level: 3
      }
    ];

    return (
      <ThemeProvider theme={theme}>
        <AppShellContainer links={links}>
          <HeadContainer />
          <OverlayContainer closeModal={closeModal} isModalOpen={isModalOpen} />
          <MainContainer query={query} />
        </AppShellContainer>
      </ThemeProvider>
    );
  }
}

export default App;
