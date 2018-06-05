import Head from "next/head";
import { times, identity } from "ramda";
import { ThemeProvider, injectGlobal } from "styled-components";
import { offcourse as theme } from "../themes";
import { Card, Heading, Group, Button, Masonry, Text } from "@offcourse/atoms";
import { AppShell } from "@offcourse/organisms";

injectGlobal([theme.globals]);
const text = `
  Lorem ipsum dolor amet small batch heirloom thundercats sartorial irony crucifix. Butcher locavore cloud bread humblebrag meh celiac hexagon biodiesel sustainable kale chips messenger bag. Ramps forage next level leggings, retro kale chips disrupt photo booth shaman farm-to-table cornhole neutra bicycle rights cred woke. Vexillologist cornhole vape, subway tile microdosing sartorial jianbing authentic biodiesel. Portland pop-up shabby chic gastropub mlkshk bushwick shoreditch before they sold out craft beer coloring book.
`;
const text1 = `
  Butcher locavore cloud bread humblebrag meh celiac hexagon biodiesel sustainable kale chips messenger bag. 
`;
const text2 = `
  Ramps forage next level leggings, retro kale chips disrupt photo booth shaman farm-to-table cornhole neutra bicycle rights cred woke. Vexillologist cornhole vape, subway tile microdosing sartorial jianbing authentic biodiesel."
`;
const text3 = `
  Portland pop-up shabby chic gastropub mlkshk bushwick shoreditch before they sold out craft beer coloring book.
`;
const text4 = text;

const randInt = (min, max) => {
  return Math.floor(Math.random() * (max - min + 1)) + min;
};

const createFragment = () => {
  return text.slice(randInt(0, 160), randInt(300, 600)).trim();
};

const fragments = [text2, text4, text1, text3];

class Content extends React.Component {
  render() {
    const gutter = 16;
    const sizes = times(identity, 100).map(columns => {
      const mq = `${columns * 288 + (columns - 1) * 16}px`;
      return {
        columns,
        mq,
        gutter
      };
    });

    const { items } = this.props;

    return (
      <div
        style={{
          paddingTop: "1rem",
          display: "flex",
          alignSelf: "center"
        }}
      >
        <Masonry sizes={sizes}>
          {({ forcePack }) =>
            items.map((fragment, index) => (
              <Card key={index}>
                <Heading size="small" section="title">
                  {`Card Example ${index + 1}`}
                </Heading>
                <Group section="body">
                  <Text size="small">{fragment}</Text>
                </Group>
              </Card>
            ))
          }
        </Masonry>
      </div>
    );
  }
}

class App extends React.Component {
  state = {
    isOpen: false,
    items: fragments
  };

  addItem = () => {
    const newItems = [...this.state.items];
    newItems.push(createFragment());
    this.setState({ items: newItems });
  };

  render() {
    const toggle = () => this.setState({ isOpen: !this.state.isOpen });
    const links = [
      {
        onClick: this.addItem,
        title: "Add Card",
        level: 1
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
          position="absolute"
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
          <Content items={this.state.items} />
        </AppShell>
      </ThemeProvider>
    );
  }
}
export default App;
