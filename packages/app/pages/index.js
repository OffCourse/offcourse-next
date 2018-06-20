import Head from "next/head";
import { ThemeProvider, injectGlobal } from "styled-components";
import { oswald, offcourse } from "@offcourse/themes";
import { Modal } from "@offcourse/molecules";
import { Auth, AppShell, CourseCardLayout } from "@offcourse/organisms";
import CoursesQuery from "../components/CoursesQuery";
import Router from "next/router";

class App extends React.Component {
  state = {
    isSidebarOpen: false,
    isModalOpen: false,
    currentTheme: "offcourse"
  };

  static getInitialProps = async ({ pathname, asPath, query }) => {
    return { pathname, asPath, query };
  };

  goToCollection = query => {
    Router.push({
      pathname: "/",
      query
    });
  };

  render() {
    const { curator, tag } = this.props.query;
    const { currentTheme, isModalOpen, isSidebarOpen } = this.state;
    const theme = currentTheme === "oswald" ? oswald : offcourse;
    injectGlobal(theme);
    const toggleSidebar = () =>
      this.setState({ isSidebarOpen: !isSidebarOpen });
    const toggleModal = () => this.setState({ isModalOpen: !isModalOpen });
    const closeModal = () => this.setState({ isModalOpen: false });
    const handler = message => alert(JSON.stringify(message, null, 2));

    const links = [
      {
        onClick: toggleModal,
        title: "Sign In",
        level: 1
      },
      {
        onClick: () =>
          this.setState({
            currentTheme: currentTheme === "oswald" ? "offcourse" : "oswald"
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
        <AppShell
          position="fixed"
          onLogoClick={() => Router.push("/")}
          toggleSidebar={toggleSidebar}
          isSidebarOpen={isSidebarOpen}
          links={links}
        >
          <Head>
            <meta
              name="viewport"
              content="width=device-width, initial-scale=1"
            />
          </Head>

          <Modal close={closeModal} isOpen={isModalOpen}>
            <Auth
              signIn={handler}
              initialUserName="yeehaa"
              onCancel={closeModal}
              signUp={handler}
              resetPassword={handler}
            />
          </Modal>
          <CoursesQuery variables={{ curator, tag }}>
            {({ loading, error, hasMore, loadMore, courses }) => {
              if (loading) return null;
              if (error) return null;

              return (
                <CourseCardLayout
                  goToCollection={this.goToCollection}
                  hasMore={hasMore}
                  courses={courses}
                  loadMore={loadMore}
                />
              );
            }}
          </CoursesQuery>
        </AppShell>
      </ThemeProvider>
    );
  }
}

export default App;
