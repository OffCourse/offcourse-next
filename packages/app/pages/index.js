import Head from "next/head";
import { ThemeProvider, injectGlobal } from "styled-components";
import { offcourse as theme } from "@offcourse/themes";
import { AppShell, CourseCardLayout } from "@offcourse/organisms";
import CoursesQuery from "../components/CoursesQuery";

injectGlobal(theme);

class App extends React.Component {
  state = {
    isOpen: false
  };

  render() {
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
          onLogoClick={toggle}
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
          <CoursesQuery>
            {({ loading, error, hasMore, loadMore, courses }) => {
              if (loading) return null;
              if (error) return null;

              return (
                <CourseCardLayout
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
