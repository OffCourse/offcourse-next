import Layout from "../components/Layout";
import { CoursesContainer } from "../containers";

export default class IndexPage extends React.Component {
  render() {
    return (
      <Layout>
        <CoursesContainer />
      </Layout>
    );
  }
}
