import Head from "next/head";
import { ThemeProvider, injectGlobal } from "styled-components";
import { offcourse as theme } from "@offcourse/themes";
import { AppShell, CourseCardLayout } from "@offcourse/organisms";
import CoursesQuery from "../components/CoursesQuery";
import Router from "next/router";

injectGlobal(theme);

class App extends React.Component {
  state = {
    isOpen: false
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
    const toggle = () => this.setState({ isOpen: !this.state.isOpen });
    const links = [
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
          toggleSidebar={toggle}
          isSidebarOpen={this.state.isOpen}
          links={links}
        >
          <Head>
            <meta
              name="viewport"
              content="width=device-width, initial-scale=1"
            />
          </Head>
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
